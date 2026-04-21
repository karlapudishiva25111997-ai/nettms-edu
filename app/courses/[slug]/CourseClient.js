'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { courses } from '../../../lib/courses'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyMtyVDqCpW_DfEVxCYOmrkuvHqYmrBA426uxYawiutIwkH_jyhks6LxRCZtzUXgZuMDg/exec'

// ===== SVG ICONS =====
const WhatsAppIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const ClockIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '3px', verticalAlign: 'middle', flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const GraduationIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const CurrencyIcon = ({ size = 22, color = '#5AB240' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const FireIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
)

const TrainerIcon = ({ size = 22, color = '#1C2213' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const StarIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const CheckCircleIcon = ({ size = 48, color = '#5AB240' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const CheckIcon = ({ size = 14, color = '#5AB240' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const RocketIcon = ({ size = 22, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const DocumentIcon = ({ size = 20, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
)

const TargetIcon = ({ size = 20, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)

const LinkedInIcon = ({ size = 20, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const HandshakeIcon = ({ size = 20, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
)

const VsIcon = ({ size = 22, color = '#1C2213' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
)

const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

// ===== TESTIMONIALS CAROUSEL =====
// ⚠️ This function is OUTSIDE CourseClient — this is correct!
function TestimonialsCarousel({ testimonials, color, bg }) {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive(i => (i === 0 ? total - 1 : i - 1))
  const next = () => setActive(i => (i === total - 1 ? 0 : i + 1))

  const getVisible = () => {
    return [0, 1, 2].map(offset => testimonials[(active + offset) % total])
  }

  const visible = getVisible()

  return (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '40px', border: '1px solid #eef0ec' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
          <StarIcon size={22} /> Student Success Stories
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={prev} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #eef0ec', background: '#f8faf7', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.borderColor = color }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f8faf7'; e.currentTarget.style.borderColor = '#eef0ec' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2213" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <span style={{ fontSize: '13px', color: '#888', fontWeight: '600' }}>{active + 1} / {total}</span>
          <button onClick={next} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #eef0ec', background: '#f8faf7', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.borderColor = color }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f8faf7'; e.currentTarget.style.borderColor = '#eef0ec' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2213" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
      <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px' }}>Real students. Real results. Real careers.</p>

      {/* 3 Cards */}
      <div className="testimonials-carousel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {visible.map((t, idx) => (
          <div key={idx} style={{ border: `1px solid ${idx === 0 ? color : '#eef0ec'}`, borderRadius: '12px', padding: '20px', background: idx === 0 ? bg : '#fafafa', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
            <div style={{ position: 'absolute', top: '8px', right: '14px', fontSize: '60px', color: color, opacity: 0.07, fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
              {[...Array(t.rating)].map((_, j) => (<StarIcon key={j} size={14} />))}
            </div>
            <p style={{ color: '#555', fontSize: '13px', lineHeight: '1.7', marginBottom: '16px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
              "{t.review}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid #eee', paddingTop: '14px' }}>
              {t.image ? (
                <img src={t.image} alt={t.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${color}` }} />
              ) : (
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>
                  {t.initials}
                </div>
              )}
              <div>
                <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '14px' }}>{t.name}</div>
                <div style={{ color: '#888', fontSize: '12px' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? '24px' : '8px', height: '8px', borderRadius: '100px', background: i === active ? color : '#ddd', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .testimonials-carousel-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .testimonials-carousel-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}

// ===== MAIN COMPONENT =====
export default function CourseClient({ course }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [openModule, setOpenModule] = useState(0)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!course) {
    return (
      <div style={{ padding: '100px 40px', textAlign: 'center' }}>
        <h1 style={{ color: '#1C2213', fontFamily: 'var(--font-playfair)' }}>Course not found</h1>
        <Link href="/courses" style={{ color: '#5AB240', marginTop: '20px', display: 'inline-block' }}>← Back to Courses</Link>
      </div>
    )
  }

  const relatedCourses = (() => {
    const others = courses.filter(c => c.slug !== course.slug)
    const idx = courses.findIndex(c => c.slug === course.slug)
    const start = (idx + 1) % others.length
    return [...others.slice(start), ...others.slice(0, start)].slice(0, 3)
  })()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: course.title,
          message: formData.message,
        }),
      })
    } catch (err) {
      // handle silently
    }
    setSubmitted(true)
  }

  const placementSteps = [
    { step: '01', icon: <DocumentIcon />, title: 'Resume Building', desc: 'Our team helps you craft a job-ready resume that highlights your skills and projects to stand out.' },
    { step: '02', icon: <TargetIcon />, title: 'Mock Interviews', desc: 'Practice with real interview questions from top companies. Get feedback and improve before the actual interview.' },
    { step: '03', icon: <LinkedInIcon />, title: 'LinkedIn Profile', desc: 'We optimize your LinkedIn profile to attract recruiters and make you visible to hiring managers.' },
    { step: '04', icon: <HandshakeIcon />, title: 'Direct Referrals', desc: 'We directly refer you to our 50+ hiring partners across India who are actively looking for candidates.' },
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2213', padding: '60px 20px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '13px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <Link href="/courses" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Courses</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <span style={{ color: '#5AB240' }}>{course.title}</span>
          </div>

          <div className="course-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}>
            {/* Left */}
            <div>
              <div style={{ position: 'relative', height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '28px' }}>
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(28,34,19,0.85) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: course.color, borderRadius: '10px', width: '48px', height: '48px', color: '#fff', fontWeight: '800', fontSize: '14px' }}>
                    {course.icon}
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '2px' }}>Course</div>
                    <div style={{ color: '#fff', fontWeight: '700', fontSize: '16px' }}>{course.title}</div>
                  </div>
                </div>
              </div>

              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 5vw, 52px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '16px' }}>
                {course.title}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: '1.8', marginBottom: '28px' }}>
                {course.description}
              </p>

              {/* Meta chips */}
              <div className="meta-chips" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '32px' }}>
                {[
                  { label: 'Duration', value: course.duration, icon: <ClockIcon size={12} /> },
                  { label: 'Mode', value: course.mode, icon: null },
                  { label: 'Next Batch', value: course.nextBatch, icon: <GraduationIcon size={12} /> },
                  { label: 'Fee', value: course.finalFee, icon: null },
                ].map(chip => (
                  <div key={chip.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      {chip.icon}{chip.label}
                    </div>
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '13px' }}>{chip.value}</div>
                  </div>
                ))}
              </div>

              <div className="cta-row" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#masterclass" style={{ background: '#5AB240', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', flex: 1, textAlign: 'center', minWidth: '140px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  Join Free Masterclass <ArrowRightIcon size={14} />
                </a>
                <a href="https://wa.me/919963384555" target="_blank" style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid rgba(255,255,255,0.15)', flex: 1, textAlign: 'center', minWidth: '140px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <WhatsAppIcon size={16} /> Talk to Us
                </a>
              </div>
            </div>

            {/* Right — Sticky Card */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', position: 'sticky', top: '100px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Course Fee</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '30px', fontWeight: '800', color: '#fff', fontFamily: 'var(--font-playfair)' }}>{course.finalFee}</span>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'line-through' }}>{course.fee}</div>
                    <div style={{ color: '#5AB240', fontSize: '12px', fontWeight: '600' }}>Save {course.discount}</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                {[
                  { label: 'Duration', value: course.duration },
                  { label: 'Mode', value: course.mode },
                  { label: 'Next Batch', value: course.nextBatch },
                  { label: 'Certificate', value: 'Yes — Nettms Certificate' },
                  { label: 'Placement', value: 'Yes — Full Support' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>{item.label}</span>
                    <span style={{ color: '#fff', fontSize: '13px', fontWeight: '600', textAlign: 'right', maxWidth: '60%' }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <a href="#masterclass" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#5AB240', color: '#fff', padding: '14px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>
                Join Free Masterclass <ArrowRightIcon size={14} />
              </a>
              <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: '#fff', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <WhatsAppIcon size={15} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: '#f8faf7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="course-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}>

            {/* Left Content */}
            <div>
              {/* What You Will Learn */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  What You Will Learn
                </h2>
                <div className="learn-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {course.whatYouLearn.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: course.bg, border: `1px solid ${course.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke={course.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{ color: '#444', fontSize: '14px', lineHeight: '1.6' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Course Curriculum
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {course.modules.map((mod, i) => (
                    <div key={i} style={{ border: '1px solid #eef0ec', borderRadius: '10px', overflow: 'hidden' }}>
                      <button onClick={() => setOpenModule(openModule === i ? null : i)} style={{ width: '100%', padding: '14px 16px', background: openModule === i ? course.bg : '#fafafa', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ background: course.color, color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0 }}>
                            {i + 1}
                          </span>
                          <span style={{ fontWeight: '600', fontSize: '14px', color: '#1C2213' }}>{mod.name}</span>
                        </div>
                        <span style={{ color: course.color, fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>{openModule === i ? '−' : '+'}</span>
                      </button>
                      {openModule === i && (
                        <div style={{ padding: '14px 16px 16px 50px', background: '#fff' }}>
                          {mod.topics.map((topic, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', borderBottom: j < mod.topics.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: course.color, flexShrink: 0 }} />
                              <span style={{ color: '#555', fontSize: '14px' }}>{topic}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Tools & Technologies
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {course.tools.map(tool => (
                    <span key={tool} style={{ background: course.bg, color: course.color, fontSize: '13px', fontWeight: '600', padding: '8px 16px', borderRadius: '100px', border: `1px solid ${course.color}25` }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Who Should Join */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Who Should Join
                </h2>
                <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <h4 style={{ color: '#1C2213', fontWeight: '700', marginBottom: '12px', fontSize: '15px' }}>This course is for</h4>
                    {course.whoShouldJoin.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <CheckIcon size={14} color="#5AB240" />
                        <span style={{ color: '#555', fontSize: '14px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 style={{ color: '#1C2213', fontWeight: '700', marginBottom: '12px', fontSize: '15px' }}>Prerequisites</h4>
                    {course.prerequisites.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <ArrowRightIcon size={13} />
                        <span style={{ color: '#555', fontSize: '14px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Outcomes */}
              <div style={{ background: '#1C2213', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#fff', fontWeight: '700', marginBottom: '20px' }}>
                  Career Outcomes
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {course.careerRoles.map(role => (
                    <span key={role} style={{ background: 'rgba(90,178,64,0.15)', color: '#5AB240', fontSize: '13px', fontWeight: '600', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(90,178,64,0.3)' }}>
                      {role}
                    </span>
                  ))}
                </div>
                <div style={{ background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.25)', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CurrencyIcon size={22} color="#5AB240" />
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Average Salary Range</div>
                    <div style={{ color: '#5AB240', fontWeight: '700', fontSize: '20px', fontFamily: 'var(--font-playfair)' }}>{course.salary}</div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {course.faqs.map((faq, i) => (
                    <div key={i} style={{ border: '1px solid #eef0ec', borderRadius: '10px', overflow: 'hidden' }}>
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '14px 16px', background: openFaq === i ? '#f8faf7' : '#fff', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', gap: '12px' }}>
                        <span style={{ fontWeight: '600', fontSize: '14px', color: '#1C2213' }}>{faq.q}</span>
                        <span style={{ color: '#5AB240', fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 16px 14px', background: '#f8faf7' }}>
                          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }} id="masterclass">
              <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #eef0ec', marginBottom: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', color: '#1C2213', fontWeight: '700', marginBottom: '6px' }}>
                  Register for Free Masterclass
                </h3>
                <p style={{ color: '#888', fontSize: '13px', marginBottom: '20px' }}>Register for a FREE 2-Hour Masterclass. Our team will confirm your seat within a few hours.</p>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                      <CheckCircleIcon size={52} color="#5AB240" />
                    </div>
                    <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '18px', marginBottom: '8px' }}>Thank You!</div>
                    <div style={{ color: '#666', fontSize: '14px' }}>Your seat is being confirmed! We will WhatsApp you shortly.</div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input type="text" placeholder="Your Full Name *" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <input type="email" placeholder="Email Address *" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <textarea placeholder="What do you want to learn? (Optional)" rows={3} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <button type="submit" style={{ background: '#5AB240', color: '#fff', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '15px', cursor: 'pointer', width: '100%' }}>
                      Register for Free Masterclass →
                    </button>
                  </form>
                )}
              </div>
              <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#fff', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', marginBottom: '12px', width: '100%', boxSizing: 'border-box' }}>
                <WhatsAppIcon size={20} color="#fff" /> Chat on WhatsApp
              </a>
              <a href="tel:+919963384555" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#1C2213', color: '#fff', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', width: '100%', boxSizing: 'border-box' }}>
                <PhoneIcon size={16} /> Call +91 9963384555
              </a>
            </div>
          </div>

          {/* ===== URGENCY BANNER ===== */}
          {course.seats && (
            <div className="urgency-banner" style={{ background: 'linear-gradient(135deg, #FF4B2B, #FF416C)', borderRadius: '16px', padding: '20px 28px', marginTop: '40px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '200px' }}>
                <FireIcon size={32} />
                <div>
                  <div style={{ color: '#fff', fontWeight: '800', fontSize: '20px', fontFamily: 'var(--font-playfair)' }}>
                    Only {course.seats} Seats Left!
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginTop: '2px' }}>
                    Next batch starting soon — reserve your seat before it fills up
                  </div>
                </div>
              </div>
              <a href="https://wa.me/919963384555" target="_blank" style={{ background: '#fff', color: '#FF4B2B', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '800', fontSize: '15px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Reserve My Seat →
              </a>
            </div>
          )}


          {/* ===== MASTERCLASS BANNER ===== */}
          <div style={{ background: 'linear-gradient(135deg, #5AB240, #3d8a2a)', borderRadius: '16px', padding: '28px 32px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '200px' }}>
              <div style={{ fontSize: '40px' }}>🎓</div>
              <div>
                <div style={{ color: '#fff', fontWeight: '800', fontSize: '20px', fontFamily: 'var(--font-playfair)', marginBottom: '4px' }}>
                  Attend a FREE 2-Hour Masterclass First!
                </div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px' }}>
                  Experience the teaching, meet the trainer, see live demos — before enrolling. Zero commitment!
                </div>
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
                  {['100% Free', 'Live Session', 'Limited Seats', 'Industry Expert'].map(tag => (
                    <span key={tag} style={{ color: '#fff', fontSize: '12px', fontWeight: '700', background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: '100px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <a href={`https://wa.me/919963384555?text=Hi%2C%20I%20want%20to%20register%20for%20the%20FREE%20${encodeURIComponent(course.title)}%20Masterclass`} target="_blank" style={{ background: '#fff', color: '#5AB240', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '800', fontSize: '15px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Register Free →
            </a>
          </div>

          {/* ===== TRAINER PROFILE ===== */}
          {course.trainer && (
            <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '40px', border: '1px solid #eef0ec' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <TrainerIcon size={22} color="#1C2213" /> Meet Your Trainer
              </h2>
              <div className="trainer-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: course.trainer.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '24px', flexShrink: 0 }}>
                  {course.trainer.initials}
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ fontWeight: '800', fontSize: '20px', color: '#1C2213', marginBottom: '4px' }}>{course.trainer.name}</div>
                  <div style={{ color: course.trainer.color, fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>{course.trainer.role}</div>
                  <div style={{ display: 'inline-block', background: '#f0f0f0', color: '#555', fontSize: '12px', fontWeight: '600', padding: '3px 12px', borderRadius: '100px', marginBottom: '14px' }}>
                    {course.trainer.experience} Experience
                  </div>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{course.trainer.bio}</p>
                </div>
              </div>
            </div>
          )}

          {/* ===== FEE & EMI ===== */}
          {course.emi && (
            <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '40px', border: '1px solid #eef0ec' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CurrencyIcon size={22} color="#1C2213" /> Fee & EMI Options
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="emi-grid">
                {[
                  { label: 'Full Payment', amount: course.emi.originalFee, note: 'One time — save more', highlight: false },
                  { label: '3 Month EMI', amount: course.emi.emi3 + '/mo', note: 'Pay in 3 easy installments', highlight: true },
                ].map(plan => (
                  <div key={plan.label} style={{ border: plan.highlight ? `2px solid ${course.color}` : '1px solid #eef0ec', borderRadius: '12px', padding: '20px', textAlign: 'center', background: plan.highlight ? course.bg : '#fafafa', position: 'relative' }}>
                    {plan.highlight && (
                      <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: course.color, color: '#fff', fontSize: '11px', fontWeight: '700', padding: '3px 14px', borderRadius: '100px', whiteSpace: 'nowrap' }}>
                        MOST POPULAR
                      </div>
                    )}
                    <div style={{ color: '#888', fontSize: '12px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>{plan.label}</div>
                    <div style={{ color: '#1C2213', fontSize: '26px', fontWeight: '800', fontFamily: 'var(--font-playfair)', marginBottom: '4px' }}>{plan.amount}</div>
                    <div style={{ color: '#999', fontSize: '12px' }}>{plan.note}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', background: '#f8faf7', borderRadius: '10px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <WhatsAppIcon size={18} color="#5AB240" />
                <span style={{ color: '#555', fontSize: '14px' }}>Need a custom payment plan? <a href="https://wa.me/919963384555" target="_blank" style={{ color: course.color, fontWeight: '700', textDecoration: 'none' }}>WhatsApp us</a> and we will work something out.</span>
              </div>
            </div>
          )}

          {/* ===== PLACEMENT SUPPORT ===== */}
          <div style={{ background: '#1C2213', borderRadius: '16px', padding: '28px 24px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#fff', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <RocketIcon size={22} /> How Our Placement Support Works
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', marginBottom: '28px' }}>
              We don't just train you — we get you placed.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="placement-grid">
              {placementSteps.map(item => (
                <div key={item.step} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ background: course.color, color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', flexShrink: 0 }}>{item.step}</span>
                    {item.icon}
                    <span style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>{item.title}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }} className="placement-stats">
              {[
                { number: '500+', label: 'Students Placed' },
                { number: '85%', label: 'Placement Rate' },
                { number: '50+', label: 'Hiring Partners' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.2)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ color: '#5AB240', fontSize: '24px', fontWeight: '800', fontFamily: 'var(--font-playfair)' }}>{stat.number}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== TESTIMONIALS CAROUSEL ===== */}
          {course.testimonials && (
            <TestimonialsCarousel
              testimonials={course.testimonials}
              color={course.color}
              bg={course.bg}
            />
          )}

          {/* ===== COMPARE WITH OTHERS ===== */}
          {course.competitors && (
            <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '40px', border: '1px solid #eef0ec' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <VsIcon size={22} /> Why Nettms vs Other Institutes
              </h2>
              <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px' }}>See why 500+ students chose Nettms Education.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: '#f8faf7' }}>
                      <th style={{ padding: '14px 16px', textAlign: 'left', color: '#1C2213', fontWeight: '700', borderBottom: '2px solid #eef0ec' }}>Feature</th>
                      <th style={{ padding: '14px 16px', textAlign: 'center', color: course.color, fontWeight: '800', borderBottom: '2px solid #eef0ec', background: course.bg }}>Nettms Education</th>
                      <th style={{ padding: '14px 16px', textAlign: 'center', color: '#888', fontWeight: '700', borderBottom: '2px solid #eef0ec' }}>Other Institutes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {course.competitors.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                        <td style={{ padding: '12px 16px', color: '#444', borderBottom: '1px solid #f0f0f0', fontWeight: '500' }}>{row.feature}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', color: '#1C2213', fontWeight: '600', borderBottom: '1px solid #f0f0f0', background: `${course.bg}50` }}>{row.nettms}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', color: '#888', borderBottom: '1px solid #f0f0f0' }}>{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: course.color, color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
                  <WhatsAppIcon size={16} color="#fff" /> Talk to Us — It's Free
                </a>
              </div>
            </div>
          )}

          {/* Related Courses */}
          <div style={{ marginTop: '60px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#1C2213', fontWeight: '700', marginBottom: '28px' }}>
              Related Courses
            </h2>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {relatedCourses.map(c => (
                <Link key={c.slug} href={`/courses/${c.slug}`} style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', border: '1px solid #eef0ec', textDecoration: 'none', display: 'block', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div style={{ height: '120px', overflow: 'hidden', position: 'relative' }}>
                    <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: c.bg, borderRadius: '8px', width: '36px', height: '36px', color: c.color, fontWeight: '800', fontSize: '11px', marginBottom: '10px' }}>
                      {c.icon}
                    </div>
                    <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '15px', marginBottom: '4px' }}>{c.title}</div>
                    <div style={{ color: '#888', fontSize: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <ClockIcon size={11} /> {c.duration}
                    </div>
                    <div style={{ color: c.color, fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      View Course <ArrowRightIcon size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .course-hero-grid { grid-template-columns: 1fr !important; }
          .course-content-grid { grid-template-columns: 1fr !important; }
          .learn-grid { grid-template-columns: 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: 1fr 1fr !important; }
          .placement-grid { grid-template-columns: 1fr 1fr !important; }
          .emi-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .related-grid { grid-template-columns: 1fr !important; }
          .meta-chips { grid-template-columns: 1fr 1fr !important; }
          .cta-row { flex-direction: column !important; }
          .cta-row a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .emi-grid { grid-template-columns: 1fr !important; }
          .placement-grid { grid-template-columns: 1fr !important; }
          .placement-stats { grid-template-columns: repeat(3, 1fr) !important; }
          .urgency-banner { flex-direction: column !important; text-align: center !important; }
          .urgency-banner a { width: 100% !important; text-align: center !important; box-sizing: border-box !important; }
          .trainer-card { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .testimonials-carousel-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .testimonials-carousel-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}