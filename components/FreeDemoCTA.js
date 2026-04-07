 'use client'
import Link from 'next/link'

export default function FreeDemoCTA() {
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
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {[
                '✅ 100% Free',
                '✅ No Registration Fee',
                '✅ Live Session',
                '✅ Ask Questions',
              ].map((feature, i) => (
                <span key={i} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', fontWeight: '600' }}>
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919963384555?text=Hi%2C%20I%20want%20to%20register%20for%20a%20Free%20Demo%20Class" target="_blank" style={{ background: '#5AB240', color: '#fff', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                💬 Register for Free Demo
              </a>
              <a href="tel:+919963384555" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                📞 Call Us Now
              </a>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '24px' }}>
              📍 Ameerpet, Hyderabad &nbsp;|&nbsp; Online batches available across India
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


