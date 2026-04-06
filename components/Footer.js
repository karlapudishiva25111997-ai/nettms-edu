'use client'
import Link from 'next/link'
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
              💬 WhatsApp Us
            </a>
            <a href="tel:+919963384555" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid rgba(255,255,255,0.3)' }}>
              📞 Call Us
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                <span style={{ color: '#5AB240' }}>📍</span>
                Ameerpet, Hyderabad
              </div>
              <a href="tel:+919963384555" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                <span style={{ color: '#5AB240' }}>📞</span>
                +91 9963384555
              </a>
              <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                <span style={{ color: '#5AB240' }}>💬</span>
                WhatsApp Us
              </a>
              <a href="mailto:info@nettmsedu.in" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>
                <span style={{ color: '#5AB240' }}>✉️</span>
                info@nettmsedu.in
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
                <Link key={course.slug} href={`/courses/${course.slug}`} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#5AB240'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                  → {course.name}
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
                <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#5AB240'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                  → {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Info */}
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
                <div style={{ color: '#5AB240', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>📍 Find Us</div>
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
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
            Building Tomorrow — One Student at a Time 🌱
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}