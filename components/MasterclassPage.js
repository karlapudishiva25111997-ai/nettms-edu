'use client'
import { useState } from 'react'
import Link from 'next/link'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyMtyVDqCpW_DfEVxCYOmrkuvHqYmrBA426uxYawiutIwkH_jyhks6LxRCZtzUXgZuMDg/exec'

const CheckIcon = ({ color = '#5AB240' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

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
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${rgba},0.15)`, border: `1px solid rgba(${rgba},0.4)`, color: primary, padding: '8px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: primary, display: 'inline-block', animation: 'pulse 2s infinite' }} />
                🎓 FREE 2-Hour Live Masterclass
              </div>

              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 58px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>
                {data.hero.headline1}{' '}
                <span style={{ color: primary }}>{data.hero.headline2}</span>
                <br />{data.hero.headline3}
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '520px' }}
                dangerouslySetInnerHTML={{ __html: data.hero.tagline }} />

              {/* Key info chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
                {data.hero.chips.map((chip, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 16px', color: '#fff', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{chip.icon}</span> {chip.label}
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '36px' }}>
                {data.hero.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckIcon />
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
                  <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '12px' }}>
                    You're Registered!
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                    Thank you! Our team will call you with the masterclass details within a few hours.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <div style={{ background: `rgba(${rgba},0.1)`, color: primary, fontSize: '12px', fontWeight: '800', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      🎓 Free Registration
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
                      style={{ background: primary, color: '#fff', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: '800', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer', width: '100%', marginTop: '4px', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Registering...' : '🎓 Register for Free Masterclass'}
                    </button>
                  </form>

                  <p style={{ color: '#aaa', fontSize: '12px', textAlign: 'center', marginTop: '16px' }}>
                    🔒 Your details are safe. We never share your information.
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
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.1)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {data.careerSection.badge}
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1C2213', fontWeight: '700', marginBottom: '14px', lineHeight: '1.2' }}>
              {data.careerSection.heading1} <span style={{ color: primary }}>{data.careerSection.headingHighlight}</span> {data.careerSection.heading2}
            </h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>{data.careerSection.sub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {data.careerSection.stats.map((s, i) => (
              <div key={i} style={{ background: '#f8faf7', border: '1px solid #e8ede2', borderRadius: '16px', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: primary, fontWeight: '800', marginBottom: '8px', lineHeight: '1.1' }}>{s.value}</div>
                <div style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section style={{ background: '#f8faf7', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.1)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {data.learningsSection.badge}
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
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.1)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {data.toolsSection.badge}
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
                        <CheckIcon /> <span style={{ color: '#555', fontSize: '14px' }}>{p}</span>
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
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.1)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              📋 Masterclass Agenda
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
              <div style={{ display: 'inline-block', background: `rgba(${rgba},0.15)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                👥 Who Should Attend
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
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `rgba(${rgba},0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckIcon color={primary} />
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { number: '500+', label: 'Students Trained', icon: '🎓' },
                { number: '85%', label: 'Placement Rate', icon: '💼' },
                { number: '4.9★', label: 'Google Rating', icon: '⭐' },
                { number: '6+', label: 'Years Experience', icon: '👨‍🏫' },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(${rgba},0.2)`, borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
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
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.1)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              ⭐ Real Stories
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
                <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#FFB800', fontSize: '16px' }}>★</span>)}
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
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.1)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
              💼 Top Recruiters
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
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.15)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              🎁 Free Bonuses
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
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎁</div>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '8px', paddingRight: '70px' }}>{b.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a href="#register" style={{ display: 'inline-block', background: primary, color: '#fff', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '800', fontSize: '16px' }}>
              🎁 Claim All Bonuses — Register Free
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'inline-block', background: `rgba(${rgba},0.1)`, color: primary, padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
              ❓ Got Questions?
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
            Don't miss this free opportunity to learn from a real industry expert. Register now and secure your seat!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#register" style={{ background: '#fff', color: primary, padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '800', fontSize: '16px' }}>
              🎓 Register Free Now
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
