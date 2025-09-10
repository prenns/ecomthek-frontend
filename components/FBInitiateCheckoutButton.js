"use client"
import { useCallback } from 'react'
import { Button } from 'flowbite-react'

export default function FBInitiateCheckoutButton({
  href,
  children,
  className,
  size,
  gradientDuoTone,
  ariaLabel,
  value = 299,
  currency = 'EUR',
  sessionId,
  requireConsent = false,
  ...props
}) {
  const handleClick = useCallback((e) => {
    // If consent is required and not given, skip tracking
    if (requireConsent && !(window.__consent && window.__consent.analytics)) {
      return
    }

    // Prevent immediate navigation so the pixel call can fire
    try {
      e.preventDefault()
    } catch (err) {
      // ignore
    }

    try {
      const key = 'fb_initiate_fired_' + (sessionId || 'anon')
      if (sessionStorage.getItem(key)) {
        // already fired this session — navigate immediately
        window.location.href = href
        return
      }

      if (typeof fbq === 'function') {
        // send an InitiateCheckout event; include value/currency
        fbq('track', 'InitiateCheckout', { value, currency })
      }

      sessionStorage.setItem(key, '1')
    } catch (err) {
      // ignore errors and continue navigation
    }

    // small delay to give the pixel a chance to send
    setTimeout(() => {
      window.location.href = href
    }, 150)
  }, [href, value, currency, sessionId, requireConsent])

  return (
    <Button
      href={href}
      onClick={handleClick}
      className={className}
      size={size}
      gradientDuoTone={gradientDuoTone}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Button>
  )
}
