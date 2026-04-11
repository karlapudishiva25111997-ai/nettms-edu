'use client'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5AB240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function FreeDemoCTA() {
  const features = [
    '100% Free',
    'No Registration Fee',
    'Live Session',
    'Ask Questions',
  ]

  return (
    <section style={{ background: '#f8faf7', padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '55px 55px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ background: '#1C2213', borderRadius: '24px', padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

          {/* Background glow */}
          <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(90,178,64,0.15)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '8px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', marginBottom: '28px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5AB240', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              FREE Demo Class Available
            </div>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', fontWeight: '700', lineHeight: '1.2', marginBottom: '20px' }}>
              Not Sure Yet?{' '}
              <span style={{ color: '#5AB240' }}>Try a Free Demo!</span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Attend a free demo class before enrolling. Experience our teaching style, meet the trainer and ask all your questions — completely free, no commitment.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {features.map((feature, i) => (
                <span key={i} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckIcon /> {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919963384555?text=Hi%2C%20I%20want%20to%20register%20for%20a%20Free%20Demo%20Class" target="_blank" style={{ background: '#5AB240', color: '#fff', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <WhatsAppIcon /> Register for Free Demo
              </a>
              <a href="tel:+919963384555" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <PhoneIcon /> Call Us Now
              </a>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LocationIcon /> Ameerpet, Hyderabad &nbsp;|&nbsp; Online batches available across India
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}