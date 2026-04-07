'use client'

export default function TrustBar() {
  return (
    <section style={{ background: '#ffffff', padding: '40px 40px', borderTop: '1px solid #eef0ec', borderBottom: '1px solid #eef0ec' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ color: '#888', fontSize: '13px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Trusted & Certified Institute
          </p>
        </div>

        {/* Certifications + Stats Row */}
        <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'center' }}>

          {/* ISO Certification */}
{/* ISO Certification */}
{/* ISO Certification */}
<div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: '#f8faf7', borderRadius: '12px', border: '1px solid #eef0ec' }}>
<img src="/iso-logo.png" alt="ISO Certified" style={{ width: '60px', height: '52px', objectFit: 'contain', flexShrink: 0 }} />  <div>
    <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '14px', lineHeight: 1.2 }}>ISO Certified</div>
    <div style={{ color: '#888', fontSize: '12px', marginTop: '3px' }}>Quality Management</div>
  </div>
</div>

          {/* Startup India */}
{/* Startup India */}
<div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: '#f8faf7', borderRadius: '12px', border: '1px solid #eef0ec' }}>
  <img src="/startup-india.jpg" alt="Startup India" style={{ width: '100px', height: '40px', objectFit: 'contain', flexShrink: 0 }} />
  <div>
    <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '14px', lineHeight: 1.2 }}>Startup India</div>
    <div style={{ color: '#888', fontSize: '12px', marginTop: '3px' }}>Govt. Recognized</div>
  </div>
</div>

          {/* Students Trained */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: '#f8faf7', borderRadius: '12px', border: '1px solid #eef0ec' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(90,178,64,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5AB240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: '800', color: '#5AB240', fontSize: '22px', fontFamily: 'var(--font-playfair)', lineHeight: 1 }}>500+</div>
              <div style={{ color: '#888', fontSize: '12px', marginTop: '3px' }}>Students Trained</div>
            </div>
          </div>

          {/* Placement Rate */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: '#f8faf7', borderRadius: '12px', border: '1px solid #eef0ec' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(59,130,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: '800', color: '#3B82F6', fontSize: '22px', fontFamily: 'var(--font-playfair)', lineHeight: 1 }}>85%</div>
              <div style={{ color: '#888', fontSize: '12px', marginTop: '3px' }}>Placement Rate</div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}