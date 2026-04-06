'use client'

const reasons = [
  {
    title: 'Industry-Focused Curriculum',
    desc: 'Every course is built around real job requirements. We teach what companies actually need — not outdated textbook content.',
    color: '#5AB240',
    bg: 'rgba(90,178,64,0.12)',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: 'Live Interactive Classes',
    desc: 'Learn directly from industry professionals in live sessions. Ask questions, get feedback and grow in real time.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    title: 'Real Project Experience',
    desc: 'Every student works on real-world projects. Your portfolio will have actual work to show employers.',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.12)',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: 'Placement Support',
    desc: 'Resume building, mock interviews, LinkedIn profile reviews and direct referrals to our hiring partners.',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.12)',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Hyderabad Based — India Wide',
    desc: 'Located in Ameerpet, the IT hub of Hyderabad. Online batches available for students across India.',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.12)',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Flexible Payment Options',
    desc: 'Easy EMI options available. We believe financial constraints should never stop you from upskilling.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
]

const stats = [
  { number: '500+', label: 'Students Trained' },
  { number: '7+', label: 'Courses Offered' },
  { number: '85%', label: 'Placement Rate' },
  { number: '2+', label: 'Years of Excellence' },
]

export default function WhyNettms() {
  return (
    <section style={{ background: '#1C2213', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-200px', left: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-200px', right: '-200px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(90,178,64,0.1)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '350px', height: '350px', borderRadius: '50%', border: '1px solid rgba(90,178,64,0.08)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Why Choose Us
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 46px)', color: '#ffffff', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
            Why Students Choose <span style={{ color: '#5AB240' }}>Nettms</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.7' }}>
            We are not just a training institute. We are your career growth partner.
          </p>
        </div>

        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {reasons.map((reason, i) => (
            <div key={i}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px 28px', transition: 'all 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderColor = reason.color + '50'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: reason.bg, border: `1px solid ${reason.color}30`, borderRadius: '14px', width: '58px', height: '58px', marginBottom: '20px' }}>
                {reason.icon(reason.color)}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '12px', lineHeight: '1.3' }}>
                {reason.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: '1.8' }}>
                {reason.desc}
              </p>
              <div style={{ marginTop: '24px', height: '2px', width: '40px', background: reason.color, borderRadius: '2px' }} />
            </div>
          ))}
        </div>

        <div className="stats-bar" style={{ marginTop: '80px', background: 'rgba(90,178,64,0.08)', border: '1px solid rgba(90,178,64,0.2)', borderRadius: '16px', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(90,178,64,0.2)' : 'none', padding: '0 20px' }}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: '800', color: '#5AB240', fontFamily: 'var(--font-playfair)', lineHeight: 1, marginBottom: '8px' }}>
                {stat.number}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', fontWeight: '500', letterSpacing: '0.5px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}