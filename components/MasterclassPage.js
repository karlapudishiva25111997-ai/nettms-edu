'use client'
import { useState } from 'react'
import Link from 'next/link'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyMtyVDqCpW_DfEVxCYOmrkuvHqYmrBA426uxYawiutIwkH_jyhks6LxRCZtzUXgZuMDg/exec'

// ─────── Modern Stroke-Based SVG Icons ───────
const sw = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} strokeWidth={2.5} style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const GraduationIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const ClockIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const UserIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)

const PulseIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
)

const MapPinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const MoneyIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const ChartIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const TrendingUpIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
)

const TrophyIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
)

const BuildingIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
  </svg>
)

const RocketIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const TargetIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)

const ToolIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const ListIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
)

const UsersIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const StarIcon = ({ size = 16, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const BriefcaseIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const GiftIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
)

const HelpIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const LockIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...sw} style={{ flexShrink: 0 }}>
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const SparklesIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>
    <path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>
  </svg>
)

// Icon registry for data-driven icons (chips, stats)
const iconMap = {
  graduation: GraduationIcon,
  clock: ClockIcon,
  user: UserIcon,
  pulse: PulseIcon,
  mappin: MapPinIcon,
  money: MoneyIcon,
  chart: ChartIcon,
  trending: TrendingUpIcon,
  trophy: TrophyIcon,
  building: BuildingIcon,
  briefcase: BriefcaseIcon,
}

export default function MasterclassPage({ data }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', qualification: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const t = data.theme
  const primary = t.primary
  const rgba = t.primaryRgba
  const gradEnd = t.gradientEnd

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: `${data.courseName} Masterclass Registration`,
          message: `Qualification: ${formData.qualification}`,
        }),
      })
    } catch (err) {}
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: `${data.courseName} Masterclass`,
        content_category: 'Masterclass Registration',
      })
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: '#1C2213', padding: '60px 20px 40px', position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(${rgba},0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgba},0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, rgba(${rgba},0.1) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <Link href="/masterclass" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Masterclass</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <span style={{ color: primary }}>{data.breadcrumb}</span>
          </div>

          <div className="masterclass-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '60px', alignItems: 'center' }}>

            {/* Left */}
            <div>
              {/* Live Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `rgba(${rgba},0.15)`, border: `1px solid rgba(${rgba},0.4)`, color: primary, padding: '8px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: primary, display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <GraduationIcon size={14} /> FREE 2-Hour Live Masterclass
              </div>

              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 58px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>
                {data.hero.headline1}{' '}
                <span style={{ color: primary }}>{data.hero.headline2}</span>
                <br />{data.hero.headline3}
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '520px' }}
                dangerouslySetInnerHTML={{ __html: data.hero.tagline }} />

              {/* Key info chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
                {data.hero.chips.map((chip, i) => {
                  const ChipIcon = iconMap[chip.icon] || GraduationIcon
                  return (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: '#fff', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: primary, display: 'inline-flex' }}><ChipIcon size={14} /></span> {chip.label}
                    </div>
                  )
                })}
              </div>

              {/* Benefits */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '36px' }}>
                {data.hero.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: primary, display: 'inline-flex' }}><CheckIcon /></span>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Trainer card */}
              <div style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(${rgba},0.3)`, borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '18px', flexShrink: 0 }}>{data.hero.trainer.initials}</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '2px' }}>{data.hero.trainer.name}</div>
                  <div style={{ color: primary, fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>{data.hero.trainer.role}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>{data.hero.trainer.line}</div>
                </div>
              </div>
            </div>

            {/* Right — Registration Form */}
            <div id="register" style={{ background: '#fff', borderRadius: '20px', padding: '36px', boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '88px', height: '88px', borderRadius: '50%', background: `rgba(${rgba},0.1)`, color: primary, marginBottom: '20px' }}>
                    <SparklesIcon size={48} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '12px' }}>
                    You&apos;re Registered!
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                    Thank you! Our team will call you with the masterclass details within a few hours.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: `rgba(${rgba},0.1)`, color: primary, fontSize: '12px', fontWeight: '800', padding: '6px 16px', borderRadius: '100px', marginBottom: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      <GraduationIcon size={12} /> Free Registration
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '6px' }}>
                      Reserve Your Free Seat
                    </h2>
                    <p style={{ color: '#888', fontSize: '14px' }}>Only 15 seats available — register now!</p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', color: '#444', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Full Name *</label>
                      <input type="text" placeholder="Enter your full name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{ padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e0e0e0', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-inter)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#444', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Phone Number *</label>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{ padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e0e0e0', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-inter)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#444', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Email Address *</label>
                      <input type="email" placeholder="your@email.com" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{ padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e0e0e0', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-inter)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#444', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Your Qualification</label>
                      <select value={formData.qualification} onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                        style={{ padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e0e0e0', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-inter)', background: '#fff', color: formData.qualification ? '#333' : '#999' }}>
                        <option value="">Select qualification</option>
                        <option>10th / 12th</option>
                        <option>B.Com / BBA / MBA</option>
                        <option>B.Tech / BE</option>
                        <option>B.Sc / BA</option>
                        <option>Working Professional</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <button type="submit" disabled={loading}
                      style={{ background: primary, color: '#fff', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: '800', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer', width: '100%', marginTop: '4px', opacity: loading ? 0.7 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      {loading ? 'Registering...' : <><GraduationIcon size={18} /> Register for Free Masterclass</>}
                    </button>
                  </form>

                  <p style={{ color: '#aaa', fontSize: '12px', textAlign: 'center', marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', width: '100%', justifyContent: 'center' }}>
                    <LockIcon size={12} /> Your details are safe. We never share your information.
                  </p>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Why This Career is Booming */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.1)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <RocketIcon size={14} /> {data.careerSection.badge}
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1C2213', fontWeight: '700', marginBottom: '14px', lineHeight: '1.2' }}>
              {data.careerSection.heading1} <span style={{ color: primary }}>{data.careerSection.headingHighlight}</span> {data.careerSection.heading2}
            </h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>{data.careerSection.sub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {data.careerSection.stats.map((s, i) => {
              const StatIcon = iconMap[s.icon] || MoneyIcon
              return (
                <div key={i} style={{ background: '#f8faf7', border: '1px solid #e8ede2', borderRadius: '16px', padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '14px', background: `rgba(${rgba},0.1)`, color: primary, marginBottom: '14px' }}>
                    <StatIcon size={28} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: primary, fontWeight: '800', marginBottom: '8px', lineHeight: '1.1' }}>{s.value}</div>
                  <div style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section style={{ background: '#f8faf7', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.1)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <TargetIcon size={14} /> {data.learningsSection.badge}
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1C2213', fontWeight: '700', marginBottom: '14px', lineHeight: '1.2' }}>
              {data.learningsSection.heading1} <span style={{ color: primary }}>{data.learningsSection.headingHighlight}</span>{data.learningsSection.heading2}
            </h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>{data.learningsSection.sub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {data.learningsSection.learnings.map((l, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e8ede2', borderRadius: '14px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '14px', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ color: '#1C2213', fontSize: '17px', fontWeight: '700', margin: 0 }}>{l.title}</h3>
                </div>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools You'll See Live */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.1)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <ToolIcon size={14} /> {data.toolsSection.badge}
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1C2213', fontWeight: '700', marginBottom: '14px', lineHeight: '1.2' }}>
              {data.toolsSection.heading1} <span style={{ color: primary }}>{data.toolsSection.headingHighlight}</span> {data.toolsSection.heading2}
            </h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>{data.toolsSection.sub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {data.toolsSection.tools.map((tool, i) => (
              <div key={i} style={{ background: '#f8faf7', border: '1px solid #e8ede2', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '160px', background: tool.color, opacity: 0.08, borderRadius: '50%', transform: 'translate(50px, -50px)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'inline-block', background: tool.color, color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: '800', fontSize: '14px', marginBottom: '20px' }}>
                    {tool.name}
                  </div>
                  <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>{tool.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {tool.points.map((p, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: primary, display: 'inline-flex' }}><CheckIcon /></span>
                        <span style={{ color: '#555', fontSize: '14px' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclass Agenda */}
      <section style={{ background: '#f8faf7', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.1)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <ListIcon size={14} /> Masterclass Agenda
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px, 4vw, 40px)', color: '#1C2213', fontWeight: '700', marginBottom: '12px' }}>
              What Happens in 2 Hours?
            </h2>
            <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
              Every minute is planned. No boring slides — only real demos and practical knowledge.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {data.agenda.map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '24px 28px', border: '1px solid #eef0ec', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ background: primary, color: '#fff', borderRadius: '10px', padding: '8px 14px', fontSize: '12px', fontWeight: '800', flexShrink: 0, whiteSpace: 'nowrap' }}>
                  {item.time}
                </div>
                <div>
                  <div style={{ color: '#1C2213', fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{item.topic}</div>
                  <div style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section style={{ background: '#1C2213', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.15)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
                <UsersIcon size={14} /> Who Should Attend
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px, 4vw, 40px)', color: '#fff', fontWeight: '700', marginBottom: '16px' }}>
                This Masterclass is For You If...
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                If any of these sounds like you — register now. You will leave with clarity.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {data.whoShouldAttend.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `rgba(${rgba},0.2)`, color: primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckIcon />
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { number: '500+', label: 'Students Trained', Icon: GraduationIcon },
                { number: '85%', label: 'Placement Rate', Icon: BriefcaseIcon },
                { number: '4.9', label: 'Google Rating', Icon: StarIcon },
                { number: '6+', label: 'Years Experience', Icon: UserIcon },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(${rgba},0.2)`, borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', background: `rgba(${rgba},0.12)`, color: primary, marginBottom: '12px' }}>
                    <stat.Icon size={22} />
                  </div>
                  <div style={{ color: primary, fontSize: '28px', fontWeight: '800', fontFamily: 'var(--font-playfair)', marginBottom: '4px' }}>{stat.number}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.1)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <StarIcon size={14} /> Real Stories
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1C2213', fontWeight: '700', marginBottom: '14px', lineHeight: '1.2' }}>
              From Masterclass to <span style={{ color: primary }}>Their Dream Job</span>
            </h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
              Meet students who started just like you — attended the free masterclass, joined the course, got placed.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {data.testimonials.map((tst, i) => (
              <div key={i} style={{ background: '#f8faf7', border: '1px solid #e8ede2', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', color: '#FFB800' }}>
                  {[1,2,3,4,5].map(s => <StarIcon key={s} size={16} filled={true} />)}
                </div>
                <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px', fontStyle: 'italic' }}>&ldquo;{tst.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #e8ede2', paddingTop: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: `linear-gradient(135deg, ${primary}, ${gradEnd})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>{tst.initial}</div>
                  <div>
                    <div style={{ color: '#1C2213', fontSize: '14px', fontWeight: '700' }}>{tst.name}</div>
                    <div style={{ color: primary, fontSize: '12px', fontWeight: '600' }}>{tst.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Hiring */}
      <section style={{ background: '#f8faf7', padding: '70px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.1)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
              <BriefcaseIcon size={14} /> Top Recruiters
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#1C2213', fontWeight: '700', marginBottom: '10px' }}>
              Companies That Hire Our Students
            </h2>
            <p style={{ color: '#666', fontSize: '15px' }}>Past placements include leading IT and consulting MNCs across India.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '900px', margin: '0 auto' }}>
            {data.companies.map((c, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e8ede2', borderRadius: '10px', padding: '14px 22px', color: '#1C2213', fontSize: '15px', fontWeight: '700', fontFamily: 'var(--font-playfair)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section style={{ background: 'linear-gradient(135deg, #1C2213 0%, #2a3320 100%)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(${rgba},0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgba},0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.15)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <GiftIcon size={14} /> Free Bonuses
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', fontWeight: '700', marginBottom: '14px', lineHeight: '1.2' }}>
              Bonuses Worth <span style={{ color: primary }}>{data.bonusTotal}</span> — Yours FREE!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
              Every attendee walks away with these bonuses — no charges, no upselling. Our gift to you for attending.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {data.bonuses.map((b, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(${rgba},0.25)`, borderRadius: '14px', padding: '24px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: `rgba(${rgba},0.2)`, color: primary, fontSize: '12px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px' }}>{b.value}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', background: `rgba(${rgba},0.15)`, color: primary, marginBottom: '14px' }}>
                  <GiftIcon size={22} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '8px', paddingRight: '70px' }}>{b.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a href="#register" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: primary, color: '#fff', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '800', fontSize: '16px' }}>
              <GiftIcon size={18} /> Claim All Bonuses — Register Free
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.1)`, color: primary, padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
              <HelpIcon size={14} /> Got Questions?
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1C2213', fontWeight: '700', marginBottom: '12px', lineHeight: '1.2' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#666', fontSize: '16px' }}>Everything you need to know before registering.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.faqs.map((f, i) => (
              <div key={i} style={{ background: '#f8faf7', border: '1px solid #e8ede2', borderRadius: '12px', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', background: 'transparent', border: 'none', padding: '20px 24px', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontFamily: 'var(--font-inter)' }}>
                  <span style={{ color: '#1C2213', fontWeight: '700', fontSize: '15px', flex: 1 }}>{f.q}</span>
                  <span style={{ color: primary, fontSize: '24px', fontWeight: '700', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0, lineHeight: 1 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 22px', color: '#555', fontSize: '14px', lineHeight: '1.7' }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: `linear-gradient(135deg, ${primary}, ${gradEnd})`, padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', fontWeight: '700', marginBottom: '16px' }}>
            Only 15 Seats Available!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', marginBottom: '36px', lineHeight: '1.7' }}>
            Don&apos;t miss this free opportunity to learn from a real industry expert. Register now and secure your seat!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#register" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: primary, padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '800', fontSize: '16px' }}>
              <GraduationIcon size={18} /> Register Free Now
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @media (max-width: 900px) {
          .masterclass-hero-grid { grid-template-columns: 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
