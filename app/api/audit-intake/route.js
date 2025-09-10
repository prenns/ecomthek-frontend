import { NextResponse } from 'next/server';

function isValidEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function isValidUrl(value) {
  try {
    // allow relative? require absolute for shop URL
    new URL(value);
    return true;
  } catch (e) {
    return false;
  }
}

function validatePayload(body) {
  if (!body) return 'Leerer Request-Body';
  const { name, shopUrl, revenueRange, biggestChallenge, otherChallengeText } = body;
  if (!name || typeof name !== 'string' || !name.trim()) return 'Name ist erforderlich.';
  if (!shopUrl || typeof shopUrl !== 'string' || !isValidUrl(shopUrl)) return 'Gültige Shop-URL ist erforderlich.';
  if (!revenueRange || typeof revenueRange !== 'string') return 'Umsatz-Range ist erforderlich.';
  if (!biggestChallenge || typeof biggestChallenge !== 'string') return 'Größte Challenge ist erforderlich.';
  if (biggestChallenge === 'Sonstiges' && (!otherChallengeText || !otherChallengeText.trim())) return 'Bei "Sonstiges" bitte die Challenge kurz beschreiben.';
  return null;
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);

    const validationError = validatePayload(body);
    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    }

    // Build payload to forward to webhook or to store in DB
    const payload = {
      receivedAt: new Date().toISOString(),
      product: body.product || 'Revenue Leak Finder',
      price: body.price || 29900,
      currency: body.currency || 'EUR',
      stripe_session_id: body.stripe_session_id || null,
      form: body,
    };

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => null);
          console.error('n8n webhook error:', res.status, text);
          return NextResponse.json({ success: false, error: 'Fehler beim Weiterleiten an Webhook.' }, { status: 502 });
        }
      } catch (err) {
        console.error('n8n webhook fetch failed', err);
        return NextResponse.json({ success: false, error: 'Fehler beim Kontaktieren des Webhooks.' }, { status: 502 });
      }
    } else {
      // no webhook configured — still accept and respond success so frontend can show confirmation
      console.log('Kein N8N_WEBHOOK_URL gesetzt — speichere intern / handle manuell:', payload);
    }

    // Return success message which the frontend can display
    return NextResponse.json(
      {
        success: true,
        message: '',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Unexpected error in /api/audit-intake:', err);
    return NextResponse.json({ success: false, error: 'Interner Serverfehler' }, { status: 500 });
  }
}
