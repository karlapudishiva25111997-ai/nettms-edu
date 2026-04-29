'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [masterclassOpen, setMasterclassOpen] = useState(false)

  const courses = [
    { name: 'Data Analysis', slug: 'data-analysis' },
    { name: 'Data Science', slug: 'data-science' },
    { name: 'Gen AI & Agentic AI', slug: 'gen-ai' },
    { name: 'BIM', slug: 'bim' },
  ]

  const masterclasses = [
    { name: 'Data Analysis Masterclass', slug: 'data-analysis' },
    { name: 'Data Science Masterclass', slug: 'data-science' },
    { name: 'Gen AI & Agentic AI Masterclass', slug: 'gen-ai' },
  ]

  // SVG Icons
  const LocationIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )

  const PhoneIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )

  const WhatsAppIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )

  const ChevronIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginLeft: '3px', verticalAlign: 'middle' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-info-bar" style={{ background: '#1C2213', color: '#ffffff', fontSize: '13px', padding: '8px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <LocationIcon /> Ameerpet, Hyderabad
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="tel:+919963384555" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <PhoneIcon /> +91 9963384555
          </a>
          <a href="https://wa.me/919963384555" target="_blank" style={{ color: '#5AB240', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
            <WhatsAppIcon /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ background: '#ffffff', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 1000 }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.jpg" alt="Nettms Education" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-menu">

          <Link href="/" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>
            Home
          </Link>

          {/* Courses Dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}>
            <button onClick={() => setCoursesOpen(!coursesOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500', fontSize: '15px', color: '#1C2213', display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0' }}>
              Courses <ChevronIcon />
            </button>

            {/* Invisible bridge */}
            <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', height: '16px', background: 'transparent' }} />

            {coursesOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: '0', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderRadius: '8px', padding: '8px 0', minWidth: '260px', zIndex: 999, border: '1px solid #eee' }}>
                {courses.map((course) => (
                  <Link key={course.slug} href={`/courses/${course.slug}`} onClick={() => setCoursesOpen(false)}
                    style={{ display: 'block', padding: '10px 20px', color: '#1C2213', textDecoration: 'none', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f5f5f5', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#EAF6E3'; e.currentTarget.style.color = '#5AB240'; e.currentTarget.style.paddingLeft = '26px' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C2213'; e.currentTarget.style.paddingLeft = '20px' }}>
                    {course.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>Blog</Link>
          <Link href="/placements" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>Placements</Link>
          <Link href="/about" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>About</Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>Contact</Link>

          {/* Free Masterclass Dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setMasterclassOpen(true)}
            onMouseLeave={() => setMasterclassOpen(false)}>
            <button onClick={() => setMasterclassOpen(!masterclassOpen)} style={{ background: 'rgba(20,184,166,0.1)', border: '1.5px solid #14B8A6', cursor: 'pointer', fontWeight: '700', fontSize: '14px', color: '#14B8A6', display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '6px', fontFamily: 'inherit' }}>
              🎓 Free Masterclass <ChevronIcon />
            </button>

            {/* Invisible bridge */}
            <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', height: '16px', background: 'transparent' }} />

            {masterclassOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: '0', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderRadius: '8px', padding: '8px 0', minWidth: '260px', zIndex: 999, border: '1px solid #eee' }}>
                {masterclasses.map((mc) => (
                  <Link key={mc.slug} href={`/masterclass/${mc.slug}`} onClick={() => setMasterclassOpen(false)}
                    style={{ display: 'block', padding: '10px 20px', color: '#1C2213', textDecoration: 'none', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f5f5f5', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,184,166,0.08)'; e.currentTarget.style.color = '#14B8A6'; e.currentTarget.style.paddingLeft = '26px' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C2213'; e.currentTarget.style.paddingLeft = '20px' }}>
                    {mc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" style={{ background: '#5AB240', color: '#fff', padding: '10px 22px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
            Enroll Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#1C2213' }}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#fff', padding: '20px 24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 998, position: 'fixed', top: '90px', left: 0, right: 0, bottom: 0, overflowY: 'auto' }}>
          <Link href="/" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <div style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ fontWeight: '600', color: '#5AB240', marginBottom: '8px', fontSize: '13px', letterSpacing: '1px' }}>COURSES</div>
            {courses.map(course => (
              <Link key={course.slug} href={`/courses/${course.slug}`} style={{ display: 'block', padding: '6px 0 6px 12px', color: '#1C2213', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>
                {course.name}
              </Link>
            ))}
          </div>

          <Link href="/blog" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/placements" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>Placements</Link>
          <Link href="/about" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>Contact</Link>

          <div style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ fontWeight: '600', color: '#14B8A6', marginBottom: '8px', fontSize: '13px', letterSpacing: '1px' }}>🎓 FREE MASTERCLASS</div>
            {masterclasses.map(mc => (
              <Link key={mc.slug} href={`/masterclass/${mc.slug}`} style={{ display: 'block', padding: '6px 0 6px 12px', color: '#1C2213', textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>
                {mc.name}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#25D366', color: '#fff', padding: '12px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', textAlign: 'center' }}>
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <a href="tel:+919963384555" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#1C2213', color: '#fff', padding: '12px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', textAlign: 'center' }}>
              <PhoneIcon /> Call Us
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger { display: block !important; }
          .top-info-bar { display: none !important; }
        }
      `}</style>
    </>
  )
}