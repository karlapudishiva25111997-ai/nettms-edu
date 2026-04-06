 'use client'
import Link from 'next/link'
import { courses } from '../../lib/courses'
import { useEffect, useRef } from 'react'


export default function CoursesPage() {
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

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2213', padding: '80px 40px 60px', position: 'relative', overflow: 'hidden', minHeight: '320px', display: 'flex', alignItems: 'center' }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            All Programs
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff', fontWeight: '700', marginBottom: '16px', lineHeight: '1.15' }}>
            Find Your Perfect <span style={{ color: '#5AB240' }}>Course</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            Industry-ready courses in Tech & Healthcare. Choose the one that fits your goals and start building your career today.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section style={{ background: '#f8faf7', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Stats Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '64px', flexWrap: 'wrap' }}>
            {[
              { number: '7', label: 'Courses Available' },
              { number: '500+', label: 'Students Trained' },
              { number: '85%', label: 'Placement Rate' },
              { number: '2+', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#5AB240', fontFamily: 'var(--font-playfair)', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Course Cards */}
          <div className="all-courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {courses.map((course) => (
              <div key={course.slug}
                style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eef0ec', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(28,34,19,0.12)'
                  e.currentTarget.style.borderColor = course.color + '40'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#eef0ec'
                }}>

                {/* Top color bar */}
                <div style={{ height: '5px', background: course.color }} />

                <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                  {/* Icon + Duration */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: course.bg, border: `1px solid ${course.color}30`, borderRadius: '12px', width: '54px', height: '54px', color: course.color, fontWeight: '800', fontSize: '13px', letterSpacing: '0.5px' }}>
                      {course.icon}
                    </div>
                    <div style={{ background: '#f5f5f5', color: '#666', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '100px' }}>
                      ⏱ {course.duration}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontSize: '21px', fontWeight: '700', color: '#1C2213', marginBottom: '6px', fontFamily: 'var(--font-playfair)' }}>
                    {course.title}
                  </h3>
                  <p style={{ color: course.color, fontSize: '12px', fontWeight: '600', marginBottom: '14px', letterSpacing: '0.3px' }}>
                    {course.subtitle}
                  </p>

                  {/* Description */}
                  <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px', flex: 1 }}>
                    {course.description.slice(0, 120)}...
                  </p>

                  {/* What you learn — top 3 */}
                  <div style={{ marginBottom: '20px' }}>
                    {course.whatYouLearn.slice(0, 3).map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                        <span style={{ color: '#5AB240', fontWeight: '700', fontSize: '13px', marginTop: '1px' }}>✓</span>
                        <span style={{ color: '#555', fontSize: '13px', lineHeight: '1.5' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#999', marginBottom: '2px' }}>Course Fee</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '20px', fontWeight: '800', color: '#1C2213' }}>{course.finalFee}</span>
                        <span style={{ fontSize: '13px', color: '#aaa', textDecoration: 'line-through' }}>{course.fee}</span>
                      </div>
                    </div>
                    <Link href={`/courses/${course.slug}`}
                      style={{ background: '#1C2213', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#5AB240'}
                      onMouseLeave={e => e.currentTarget.style.background = '#1C2213'}>
                      View Course →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '80px', background: '#1C2213', borderRadius: '20px', padding: '60px 40px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 3vw, 36px)', color: '#fff', fontWeight: '700', marginBottom: '12px' }}>
              Not Sure Which Course to Pick?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
              Talk to our counsellors for free. We will help you find the right course based on your background and goals.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919963384555" target="_blank" style={{ background: '#5AB240', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                💬 WhatsApp Us
              </a>
              <a href="tel:+919963384555" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid rgba(255,255,255,0.2)' }}>
                📞 Call Us
              </a>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .all-courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .all-courses-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
