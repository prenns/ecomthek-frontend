'use client';
import { useEffect } from 'react';

export default function FBPurchaseEvent({ sessionId = '', value = 299.0, currency = 'EUR', contents = [{ id: 'revenue_leak_finder', quantity: 1 }], requireConsent = false }) {
  useEffect(() => {
    
    try {
      if (requireConsent) {
        // optional: check a global consent flag (site-specific)
        if (typeof window !== 'undefined' && window.__consent && !window.__consent.analytics) return;
      }

      if (typeof window === 'undefined' || !window.sessionStorage) return;
      const key = `fb_purchase_fired_${sessionId || 'anon'}`;
      if (sessionStorage.getItem(key)) return; // already fired this session

      if (typeof window.fbq === 'function') {
        
        // send Purchase event with optional eventID for deduplication
        window.fbq('track', 'Purchase', {
          value: Number(value),
          currency,
          contents,
          content_type: 'product',
        }, sessionId ? { eventID: sessionId } : undefined);

        // mark as fired for this session
        try {
          sessionStorage.setItem(key, '1');
        } catch (e) {
          // ignore storage exceptions
        }
      } else {
        // fbq not ready yet — try to wait briefly and retry once
        const retry = setTimeout(() => {
          if (typeof window.fbq === 'function') {
            try {
              window.fbq('track', 'Purchase', {
                value: Number(value),
                currency,
                contents,
                content_type: 'product',
              }, sessionId ? { eventID: sessionId } : undefined);
              sessionStorage.setItem(key, '1');
            } catch (e) {
              // ignore
            }
          }
        }, 1000);
        return () => clearTimeout(retry);
      }
    } catch (e) {
      // silent
      // console.warn('FBPurchaseEvent error', e);
    }
  }, [sessionId, value, currency, JSON.stringify(contents), requireConsent]);

  return null;
}
