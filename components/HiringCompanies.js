 'use client'

const companies = [
  { name: 'TCS', color: '#1C2213' },
  { name: 'Infosys', color: '#007CC3' },
  { name: 'Wipro', color: '#341C6B' },
  { name: 'HCL', color: '#0066CC' },
  { name: 'Accenture', color: '#A100FF' },
  { name: 'Tech Mahindra', color: '#E60000' },
  { name: 'Capgemini', color: '#0070AD' },
  { name: 'Mphasis', color: '#E31837' },
  { name: 'Mindtree', color: '#00A651' },
  { name: 'L&T', color: '#E31837' },
  { name: 'Apollo Hospitals', color: '#003DA5' },
  { name: 'Omega Healthcare', color: '#00A651' },
  { name: 'Cognizant', color: '#1565C0' },
  { name: 'IBM', color: '#054ADA' },
  { name: 'Deloitte', color: '#86BC25' },
  { name: 'KPMG', color: '#00338D' },
]

export default function HiringCompanies() {
  return (
    <section style={{ background: '#f8faf7', padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.03) 1px, transparent 1px)', backgroundSize: '55px 55px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Hiring Partners
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1C2213', fontWeight: '700', marginBottom: '16px' }}>
            Our Students Work At{' '}
            <span style={{ color: '#5AB240' }}>Top Companies</span>
          </h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            500+ students placed across India&apos;s leading IT, Healthcare and Engineering companies.
          </p>
        </div>

        {/* Company Logo Wall */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
          {companies.map((company, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #eef0ec', borderRadius: '12px', padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', cursor: 'default', minWidth: '140px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = company.color + '60'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#eef0ec'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <span style={{ fontWeight: '800', fontSize: '16px', color: company.color, letterSpacing: '0.5px' }}>
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div style={{ background: '#1C2213', borderRadius: '16px', padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '32px' }}>
          {[
            { number: '50+', label: 'Hiring Partners', color: '#5AB240' },
            { number: '500+', label: 'Students Placed', color: '#3B82F6' },
            { number: '₹9.5L', label: 'Highest Package', color: '#F97316' },
            { number: '85%', label: 'Placement Rate', color: '#A855F7' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: stat.color, fontFamily: 'var(--font-playfair)', lineHeight: 1, marginBottom: '6px' }}>
                {stat.number}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
