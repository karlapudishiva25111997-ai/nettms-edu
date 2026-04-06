'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)

  const courses = [
    { name: 'Data Analysis', slug: 'data-analysis' },
    { name: 'Data Science', slug: 'data-science' },
    { name: 'Multi-Cloud DevOps (AWS, Azure)', slug: 'devops' },
    { name: 'Full Stack — Python', slug: 'python-fullstack' },
    { name: 'Gen AI & Agentic AI', slug: 'gen-ai' },
    { name: 'BIM', slug: 'bim' },
    { name: 'Medical Coding', slug: 'medical-coding' },
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div style={{ background: '#1C2213', color: '#ffffff', fontSize: '13px', padding: '8px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>📍 Ameerpet, Hyderabad</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="tel:+919963384555" style={{ color: '#fff', textDecoration: 'none' }}>📞 +91 9963384555</a>
          <a href="https://wa.me/919963384555" target="_blank" style={{ color: '#5AB240', textDecoration: 'none', fontWeight: '600' }}>💬 WhatsApp Us</a>
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
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500', fontSize: '15px', color: '#1C2213', display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0' }}>
              Courses ▾
            </button>

            {/* Invisible bridge to prevent gap */}
            <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', height: '16px', background: 'transparent' }} />

            {coursesOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: '0', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderRadius: '8px', padding: '8px 0', minWidth: '260px', zIndex: 999, border: '1px solid #eee' }}>
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    onClick={() => setCoursesOpen(false)}
                    style={{ display: 'block', padding: '10px 20px', color: '#1C2213', textDecoration: 'none', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f5f5f5', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#EAF6E3'; e.currentTarget.style.color = '#5AB240'; e.currentTarget.style.paddingLeft = '26px' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C2213'; e.currentTarget.style.paddingLeft = '20px' }}>
                    {course.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/placements" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>
            Placements
          </Link>
          <Link href="/about" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>
            About
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: '#1C2213', fontWeight: '500', fontSize: '15px' }}>
            Contact
          </Link>

          <a href="https://wa.me/919963384555" target="_blank" style={{ background: '#5AB240', color: '#fff', padding: '10px 22px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
            Enroll Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: '#1C2213' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#fff', padding: '20px 24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 998, position: 'relative' }}>
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

          <Link href="/placements" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>
            Placements
          </Link>
          <Link href="/about" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" style={{ display: 'block', padding: '12px 0', color: '#1C2213', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #f0f0f0' }} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'block', marginTop: '16px', background: '#5AB240', color: '#fff', padding: '12px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', textAlign: 'center' }}>
            Enroll Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}