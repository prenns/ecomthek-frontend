'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Button, Card, Label, TextInput, Textarea, Toast } from 'flowbite-react';

const REVENUE_OPTIONS = [
  '< 10.000 € / Monat',
  '10.000 – 50.000 € / Monat',
  '50.000 – 250.000 € / Monat',
  '> 250.000 € / Monat',
];

const CHALLENGE_OPTIONS = [
  'Traffic ist zu teuer',
  'Conversion zu niedrig',
  'Keine funktionierenden Creatives',
  'Retention schwach',
  'Sonstiges',
];

const SHOP_SYSTEMS = ['Shopify', 'WooCommerce', 'Shopware', 'Magento', 'Sonstiges'];
const CHANNELS = ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Influencer', 'SEO', 'E-Mail'];
const EMAIL_SOFTWARE = ['Klaviyo', 'Brevo', 'ActiveCampaign', 'Sonstiges'];
const FLOWS = ['Welcome', 'Abandoned Cart', 'Post-Purchase', 'Newsletter', 'Keine'];
const CONTACT_METHODS = ['E-Mail', 'WhatsApp', 'Slack'];

export default function AuditIntakeForm({ sessionId = '', product = 'Revenue Leak Finder', price = 29900, onSubmitted }) {
  const [form, setForm] = useState({
    name: '',
    shopUrl: '',
    revenueRange: '',
    biggestChallenge: '',
    otherChallengeText: '',

    // optional
    shopSystem: '',
    aov: '',
    conversionRate: '',
    channels: [],
    emailSoftware: '',
    flows: [],
    goals: '',
    accessData: '',
    contactMethod: '',
    adsAccess: '',
  });


  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const toggleArrayValue = (key, value) => {
    setForm((f) => {
      const arr = f[key] || [];
      if (arr.includes(value)) return { ...f, [key]: arr.filter((v) => v !== value) };
      return { ...f, [key]: [...arr, value] };
    });
  };

  const validate = () => {
    if (!form.name.trim()) return 'Bitte gib deinen Namen an.';
    if (!form.shopUrl.trim()) return 'Bitte gib die Shop-URL an.';
    try {
      // eslint-disable-next-line no-new
      new URL(form.shopUrl);
    } catch (e) {
      return 'Bitte gib eine gültige URL an (z. B. https://deinshop.de).';
    }
    if (!form.revenueRange) return 'Bitte wähle eine Umsatz-Range.';
    if (!form.biggestChallenge) return 'Bitte wähle die größte Challenge.';
    if (form.biggestChallenge === 'Sonstiges' && !form.otherChallengeText.trim()) return 'Bitte beschreibe die Challenge.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        product,
        price,
        currency: 'EUR',
        stripe_session_id: sessionId || '{{SESSION_ID}}',
        ...form,
      };

      // Konvertiere numerische Felder
      if (form.aov) payload.aov = Number(form.aov);
      if (form.conversionRate) payload.conversionRate = Number(form.conversionRate);

      const res = await fetch('/api/audit-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        const errorMsg = (json && json.error) || 'Network response was not ok';
        throw new Error(errorMsg);
      }

      // forward API response to parent so the page can show a central success message
      if (onSubmitted) {
        onSubmitted(json);
      } else {
        // Wenn kein onSubmitted gegeben ist (z.B. Seite ist server-rendered), navigiere zur gleichen URL mit ?submitted=1
        try {
          const current = new URLSearchParams(String(searchParams));
          current.set('submitted', '1');
          // preserve session_id / email if present (already in searchParams)
          router.push(`${pathname}?${current.toString()}`);
        } catch (e) {
          // Fallback: einfache Navigation
          router.push(`${pathname}?submitted=1`);
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Uups – etwas ist schiefgelaufen. Bitte versuche es erneut.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="border-0 shadow">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Wir brauchen noch ein paar Infos von dir</h2>
        <p className="mt-1 text-gray-600">So können wir Shop, Ads & Emails gezielt analysieren. Pflichtfelder sind markiert.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        {/* Pflichtfelder */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pflichtfelder</h3>

          <div>
            <Label htmlFor="name" value="Name *" />
            <TextInput id="name" required  value={form.name} onChange={handleChange('name')} />
          </div>


          <div>
            <Label htmlFor="shopUrl" value="Shop-URL *" />
            <TextInput id="shopUrl" type="url" required placeholder="https://deinshop.de" value={form.shopUrl} onChange={handleChange('shopUrl')} />
          </div>

          <div>
            <Label htmlFor="revenueRange" value="Umsatz-Range *" />
            <select id="revenueRange" className="mt-1 block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm" value={form.revenueRange} onChange={handleChange('revenueRange')}>
              <option value="">Bitte wählen...</option>
              {REVENUE_OPTIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div>
            <Label value="Größte Challenge *" />
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {CHALLENGE_OPTIONS.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name="biggestChallenge" value={opt} checked={form.biggestChallenge === opt} onChange={(e) => setForm((f) => ({ ...f, biggestChallenge: e.target.value }))} />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
            {form.biggestChallenge === 'Sonstiges' && (
              <div className="mt-2">
                <Label htmlFor="otherChallengeText" value="Bitte kurz beschreiben *" />
                <TextInput id="otherChallengeText" placeholder="Beschreibe die Challenge" value={form.otherChallengeText} onChange={handleChange('otherChallengeText')} />
              </div>
            )}
          </div>
        </div>

        {/* Optionale Felder */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Optionale Angaben</h3>

          <div>
            <Label htmlFor="shopSystem" value="Shop-System" />
            <select id="shopSystem" className="mt-1 block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm" value={form.shopSystem} onChange={handleChange('shopSystem')}>
              <option value="">Keine Angabe</option>
              {SHOP_SYSTEMS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="aov" value="Durchschnittlicher Warenkorb (AOV)" />
              <TextInput id="aov" type="number" placeholder="z. B. 49,90" value={form.aov} onChange={handleChange('aov')} />
            </div>
            <div>
              <Label htmlFor="conversionRate" value="Conversion Rate (%)" />
              <TextInput id="conversionRate" type="number" placeholder="z. B. 2,5" value={form.conversionRate} onChange={handleChange('conversionRate')} />
            </div>
          </div>

          <div>
            <Label value="Welche Kanäle nutzt ihr?" />
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {CHANNELS.map((c) => (
                <label key={c} className="flex items-center gap-2">
                  <input type="checkbox" checked={form.channels.includes(c)} onChange={() => toggleArrayValue('channels', c)} />
                  <span className="text-sm">{c}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="emailSoftware" value="Welche E-Mail-Software nutzt ihr?" />
            <select id="emailSoftware" className="mt-1 block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm" value={form.emailSoftware} onChange={handleChange('emailSoftware')}>
              <option value="">Keine Angabe</option>
              {EMAIL_SOFTWARE.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <Label value="Welche Flows habt ihr aktiv?" />
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {FLOWS.map((f) => (
                <label key={f} className="flex items-center gap-2">
                  <input type="checkbox" checked={form.flows.includes(f)} onChange={() => toggleArrayValue('flows', f)} />
                  <span className="text-sm">{f}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="goals" value="Ziele (Was wäre Erfolg in 3 Monaten?)" />
            <Textarea id="goals" rows={3} placeholder="Beschreibe kurz eure Ziele" value={form.goals} onChange={handleChange('goals')} />
          </div>


          


        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white" disabled={submitting}>
            {submitting ? 'Sende...' : 'Infos absenden & Audit starten'}
          </Button>
        </div>

        {errorMsg && (
          <Toast className="mt-2 w-full bg-red-50">
            <div className="text-sm font-medium text-red-700">{errorMsg}</div>
          </Toast>
        )}
        {submitted && (
          <Toast className="mt-2 w-full bg-green-50">
            <div className="text-sm font-medium text-green-700">Danke! Deine Infos sind bei uns angekommen. Wir legen jetzt los. 🔎</div>
          </Toast>
        )}
      </form>
    </Card>
  );
}
