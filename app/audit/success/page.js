import Script from 'next/script';
import {
  Card,
  Avatar,
  Badge,
} from 'flowbite-react';
import AuditIntakeForm from '../../../components/AuditIntakeForm';
import FBPurchaseEvent from '../../../components/FBPurchaseEvent';


export const metadata = {
  title: 'Danke! Dein Audit ist gebucht 🚀 | Revenue Leak Finder',
  description:
    'Danke für deine Bestellung. Bitte fülle das kurze Formular aus, damit wir dein Audit perfekt vorbereiten können.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage({ searchParams }) {
  // searchParams is a plain object when rendered on the server
  const getParam = (k) => {
    const v = searchParams?.[k];
    if (!v) return '';
    return Array.isArray(v) ? v[0] : v;
  };

  const sessionId = getParam('session_id') || '';
  const submittedFlag = (getParam('submitted') || '').toString();
  const submitted = submittedFlag === '1' || submittedFlag === 'true';


  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Fire FB Purchase event on page load (once per session) */}
        <FBPurchaseEvent sessionId={sessionId} value={299.0} currency="EUR" />
        {/* HERO */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              <Badge color="success" className="rounded-md">Zahlung erfolgreich</Badge>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Danke! Dein Audit ist gebucht 🚀
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Wir starten sofort – bitte fülle das kurze Formular unten aus, damit wir dein Audit perfekt vorbereiten können.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>Produkt: <strong className="text-gray-900">Revenue Leak Finder</strong></span>
              <span>Preis: <strong className="text-gray-900">299 €</strong></span>
              <span>Lieferzeit: <strong className="text-gray-900">72 Stunden</strong></span>
              {sessionId ? (
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                  Session-ID: {sessionId}
                </span>
              ) : null}
            </div>
          </div>
        </section>

        {/* FORMULAR (ausgelagert) */}
        <section className="mx-auto max-w-3xl px-4 pb-12 pt-12">
          {!submitted ? (
            <AuditIntakeForm sessionId={sessionId} />
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center shadow">
              <h2 className="text-2xl font-bold text-gray-900">Danke — wir haben deine Infos erhalten!</h2>
              <p className="mt-3 text-gray-700">
                Dein Audit wird spätestens in 72 Stunden bereit sein. Wir kontaktieren dich per E-Mail, sobald alles vorbereitet ist.
              </p>
              {/* client component fires FB Purchase event once (sessionStorage dedupe) */}
              <FBPurchaseEvent sessionId={sessionId} value={299.0} currency="EUR" />
            </div>
          )}
        </section>

        {/* TRUST / BESTÄTIGUNG */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-gray-900">Warum wir?</h3>
                <p className="mt-3 text-gray-600">
                  Wir haben selbst eine 7-stellige E-Commerce-Brand aufgebaut. Du bekommst jetzt das gleiche Know-how, das uns dort hingebracht hat.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
                <Card className="items-center text-center">
                  <Avatar img="/images/alex-prennsberger.png" rounded size="xl" />
                  <div>
                    <h4 className="mt-3 text-lg font-semibold text-gray-900">Alex</h4>
                    <p className="text-sm text-gray-600">Growth & CRO – liebt Zahlen, A/B-Tests & klare Roadmaps.</p>
                  </div>
                </Card>
                <Card className="items-center text-center">
                  <Avatar img="/images/tina-prennsberger.jpg" rounded size="xl" />
                  <div>
                    <h4 className="mt-3 text-lg font-semibold text-gray-900">Tina</h4>
                    <p className="text-sm text-gray-600">Creatives & Retention – E-Mail-Flows, UGC & Brand-Story.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: SO GEHT ES WEITER */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h3 className="text-2xl font-bold text-gray-900">So geht es jetzt weiter</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Card>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-xl">1️⃣</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Du füllst das Formular aus</h4>
                    <p className="mt-1 text-gray-600">Je genauer, desto besser – spart Rückfragen.</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-xl">2️⃣</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Wir analysieren Shop, Ads & Emails</h4>
                    <p className="mt-1 text-gray-600">Technik, UX, Funnel, Tracking & Profitabilität.</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-xl">3️⃣</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Du erhältst innerhalb von 72h dein Audit + 30-Tage-Plan
                    </h4>
                    <p className="mt-1 text-gray-600">Konkrete, priorisierte Maßnahmen inkl. Quick Wins.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}