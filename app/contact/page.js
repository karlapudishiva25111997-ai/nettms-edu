 'use client'
import { useState, useRef, useEffect } from 'react'



export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let dots = []

    const init = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
      dots = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.3 + 0.1,
      }))
    }

    init()
    window.addEventListener('resize', init)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(dot => {
        dot.x += dot.vx
        dot.y += dot.vy
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(90,178,64,${dot.opacity})`
        ctx.fill()
      })
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(90,178,64,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', init)
    }
  }, [])

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyMtyVDqCpW_DfEVxCYOmrkuvHqYmrBA426uxYawiutIwkH_jyhks6LxRCZtzUXgZuMDg/exec'

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
          course: formData.course,
          message: formData.message,
        }),
      })
    } catch (err) {
      
    }
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: '8px',
    border: '1.5px solid #e0e0e0',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'var(--font-inter)',
    color: '#1C2213',
    background: '#fff',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2213', padding: '80px 40px 60px', position: 'relative', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Get In Touch
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff', fontWeight: '700', marginBottom: '16px', lineHeight: '1.15' }}>
            Let&apos;s Build Your <span style={{ color: '#5AB240' }}>Tomorrow</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            Have questions about our courses? Our counsellors are ready to help you choose the right path.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: '#f8faf7', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'start' }}>

            {/* Left — Info */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: '#1C2213', fontWeight: '700', marginBottom: '12px' }}>
                Contact Information
              </h2>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
                Reach out to us via WhatsApp, phone or email. We are available 6 days a week to answer your queries.
              </p>

              {/* Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {[
                  { icon: '📍', title: 'Our Location', value: '504, Vamshi Estates, Opp. Value Zone Mall, Ameerpet, Hyderabad — 500082', link: null, color: '#5AB240' },
                  { icon: '📞', title: 'Call Us', value: '+91 9963384555', link: 'tel:+919963384555', color: '#3B82F6' },
                  { icon: '💬', title: 'WhatsApp', value: '+91 9963384555', link: 'https://wa.me/919963384555', color: '#25D366' },
                  { icon: '✉️', title: 'Email Us', value: 'info@nettmsedu.in', link: 'mailto:info@nettmsedu.in', color: '#F97316' },
                  { icon: '🌐', title: 'Website', value: 'www.nettmsedu.in', link: 'https://nettmsedu.in', color: '#A855F7' },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid #eef0ec', borderRadius: '12px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + '50'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#eef0ec'; e.currentTarget.style.boxShadow = 'none' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: item.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#999', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.title}</div>
                      {item.link ? (
                        <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} style={{ color: '#1C2213', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}
                          onMouseEnter={e => e.currentTarget.style.color = item.color}
                          onMouseLeave={e => e.currentTarget.style.color = '#1C2213'}>
                          {item.value}
                        </a>
                      ) : (
                        <div style={{ color: '#1C2213', fontWeight: '600', fontSize: '15px' }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timings */}
              <div style={{ background: '#1C2213', borderRadius: '16px', padding: '28px' }}>
                <h3 style={{ color: '#5AB240', fontWeight: '700', fontSize: '16px', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Office Timings
                </h3>
                {[
                  { day: 'Monday — Saturday', time: '9:00 AM – 7:00 PM' },
                  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{t.day}</span>
                    <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>{t.time}</span>
                  </div>
                ))}
                <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '20px', background: '#5AB240', color: '#fff', padding: '13px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', border: '1px solid #eef0ec', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#1C2213', fontWeight: '700', marginBottom: '12px' }}>
                    Thank You!
                  </h3>
                  <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                    We have received your message. Our team will contact you within 24 hours.
                  </p>
                  <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#5AB240', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
                    💬 WhatsApp Us Directly
                  </a>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '26px', color: '#1C2213', fontWeight: '700', marginBottom: '8px' }}>
                    Send Us a Message
                  </h3>
                  <p style={{ color: '#888', fontSize: '14px', marginBottom: '28px' }}>
                    Fill the form below and we will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Full Name *</label>
                        <input type="text" required placeholder="Your full name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#5AB240'}
                          onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Phone Number *</label>
                        <input type="tel" required placeholder="+91 XXXXXXXXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#5AB240'}
                          onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Email Address *</label>
                      <input type="email" required placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#5AB240'}
                        onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Course Interested In</label>
                      <select value={formData.course} onChange={e => setFormData({ ...formData, course: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select a course</option>
                        <option>Data Analysis</option>
                        <option>Data Science</option>
                        <option>Multi-Cloud DevOps</option>
                        <option>Full Stack Python</option>
                        <option>Gen AI & Agentic AI</option>
                        <option>BIM</option>
                        <option>Medical Coding</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Your Message</label>
                      <textarea rows={4} placeholder="Tell us about your background and goals..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: 'none' }}
                        onFocus={e => e.target.style.borderColor = '#5AB240'}
                        onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
                    </div>

                    <button type="submit" style={{ background: '#5AB240', color: '#fff', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#1C2213'}
                      onMouseLeave={e => e.currentTarget.style.background = '#5AB240'}>
                      Send Message →
                    </button>

                    <div style={{ textAlign: 'center', color: '#888', fontSize: '13px' }}>
                      Or reach us directly on{' '}
                      <a href="https://wa.me/919963384555" target="_blank" style={{ color: '#25D366', fontWeight: '600', textDecoration: 'none' }}>
                        WhatsApp
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
