'use client'
import Link from 'next/link'

// SVG Icons
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5AB240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5AB240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const WhatsAppIcon = ({ color = '#5AB240', size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5AB240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AB240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginLeft: '4px', verticalAlign: 'middle' }}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#111a0a', color: '#fff', padding: '80px 40px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Background grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Top CTA Banner */}
        <div style={{ background: 'linear-gradient(135deg, #5AB240, #3d8a2a)', borderRadius: '16px', padding: '48px 40px', marginBottom: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(22px, 3vw, 32px)', color: '#fff', fontWeight: '700', marginBottom: '8px' }}>
              Ready to Build Your Tomorrow?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px' }}>
              Talk to our counsellors today — it is free and takes only 10 minutes.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919963384555" target="_blank" style={{ background: '#fff', color: '#5AB240', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <WhatsAppIcon color="#5AB240" size={18} /> WhatsApp Us
            </a>
            <a href="tel:+919963384555" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid rgba(255,255,255,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <PhoneIcon /> Call Us
            </a>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>

          {/* Column 1 — Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img src="/logo.jpg" alt="Nettms Education" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: '1.8', marginBottom: '24px', maxWidth: '280px' }}>
              Nettms Education is a leading IT & Healthcare training institute based in Ameerpet, Hyderabad. We help students build job-ready skills and launch successful careers.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                <LocationIcon /> Ameerpet, Hyderabad
              </div>
              <a href="tel:+919963384555" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                <PhoneIcon /> +91 9963384555
              </a>
              <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a href="mailto:info@nettmsedu.in" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                <MailIcon /> info@nettmsedu.in
              </a>
            </div>
          </div>

          {/* Column 2 — Courses */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              Our Courses
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Data Analysis', slug: 'data-analysis' },
                { name: 'Data Science', slug: 'data-science' },
                { name: 'Multi-Cloud DevOps', slug: 'devops' },
                { name: 'Full Stack Python', slug: 'python-fullstack' },
                { name: 'Gen AI & Agentic AI', slug: 'gen-ai' },
                { name: 'BIM', slug: 'bim' },
                { name: 'Medical Coding', slug: 'medical-coding' },
              ].map(course => (
                <Link key={course.slug} href={`/courses/${course.slug}`}
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#5AB240'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                  <ArrowIcon /> {course.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'All Courses', href: '/courses' },
                { name: 'Placements', href: '/placements' },
                { name: 'Contact Us', href: '/contact' },
              ].map(link => (
                <Link key={link.href} href={link.href}
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#5AB240'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                  <ArrowIcon /> {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Timings */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              Timings
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Weekdays</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Mon – Sat: 9AM – 7PM</div>
              </div>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Weekend</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Sunday: 10AM – 4PM</div>
              </div>
              <div style={{ marginTop: '8px', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.2)', borderRadius: '8px', padding: '12px' }}>
                <div style={{ color: '#5AB240', fontSize: '12px', fontWeight: '700', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPinIcon /> Find Us
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: '1.6' }}>
                  Ameerpet, Hyderabad,<br />Telangana — 500016
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
            © 2025 Nettms Education. All rights reserved.
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
            Building Tomorrow — One Student at a Time <LeafIcon />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}