'use client'

export default function MasterclassBanner() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #1C2213 0%, #2a3a1a 100%)', padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-150px', right: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Top badge */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(90,178,64,0.15)', border: '1px solid rgba(90,178,64,0.4)', color: '#5AB240', padding: '8px 24px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5AB240', display: 'inline-block', animation: 'mcpulse 2s infinite' }} />
            🎓 Free Masterclass — Limited Seats
          </div>
        </div>

        {/* Main content */}
        <div className="masterclass-banner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>
              Before You Enroll —{' '}
              <span style={{ color: '#5AB240' }}>Attend a Free 2-Hour Masterclass!</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
              Experience our teaching first. Meet the trainer, see live tool demos, understand the course roadmap and ask all your questions — completely FREE, zero commitment.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {[
                { icon: '🎯', text: 'Live hands-on demo of industry tools' },
                { icon: '👨‍🏫', text: 'Direct interaction with the trainer' },
                { icon: '💼', text: 'Real career roadmap & salary insights' },
                { icon: '❓', text: 'Q&A — get all your doubts cleared' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919963384555?text=Hi%2C%20I%20want%20to%20register%20for%20a%20Free%20Masterclass" target="_blank"
                style={{ background: '#5AB240', color: '#fff', padding: '15px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Register Free on WhatsApp
              </a>
              <a href="tel:+919963384555"
                style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '15px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call +91 9963384555
              </a>
            </div>
          </div>

          {/* Right — Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { course: 'Data Analysis Masterclass', trainer: 'K. Shiva', exp: '6 Years Experience', color: '#14B8A6', icon: 'DA', desc: 'Learn Power BI, SQL & Python in action. See real data projects live.' },
              { course: 'BIM Masterclass', trainer: 'Vijayababu', exp: '15 Years Experience', color: '#F59E0B', icon: 'BIM', desc: 'See Revit & AutoCAD in action. Understand BIM career scope in India & abroad.' },
            ].map((card, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${card.color}30`, borderRadius: '14px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: card.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '12px', flexShrink: 0 }}>
                  {card.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>{card.course}</div>
                  <div style={{ color: card.color, fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>by {card.trainer} — {card.exp}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: '1.5' }}>{card.desc}</div>
                </div>
                <div style={{ background: '#5AB240', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '100px', flexShrink: 0 }}>FREE</div>
              </div>
            ))}

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '8px' }}>
              {[
                { number: '500+', label: 'Students Trained' },
                { number: '85%', label: 'Placement Rate' },
                { number: '4.9★', label: 'Google Rating' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.2)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                  <div style={{ color: '#5AB240', fontSize: '20px', fontWeight: '800', fontFamily: 'var(--font-playfair)' }}>{stat.number}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '3px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mcpulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @media (max-width: 900px) {
          .masterclass-banner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}