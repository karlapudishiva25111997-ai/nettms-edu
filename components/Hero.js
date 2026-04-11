'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const canvasRef = useRef(null)

  const heroImages = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(90, 178, 64, ${p.opacity})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(90, 178, 64, ${0.12 * (1 - dist / 130)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [mounted])

  const courses = [
    { icon: 'PY', title: 'Full Stack Python', duration: '4-5 Months', color: '#3B82F6', bg: 'rgba(59,130,246,0.15)' },
    { icon: 'AWS', title: 'Multi-Cloud DevOps', duration: '3-4 Months', color: '#F97316', bg: 'rgba(249,115,22,0.15)' },
    { icon: 'AI', title: 'Gen AI & Agentic AI', duration: '3 Months', color: '#A855F7', bg: 'rgba(168,85,247,0.15)' },
    { icon: 'DA', title: 'Data Analysis', duration: '3 Months', color: '#14B8A6', bg: 'rgba(20,184,166,0.15)' },
    { icon: 'DS', title: 'Data Science', duration: '4 Months', color: '#5AB240', bg: 'rgba(90,178,64,0.15)' },
    { icon: 'MC', title: 'Medical Coding', duration: '2-3 Months', color: '#EC4899', bg: 'rgba(236,72,153,0.15)' },
    { icon: 'BIM', title: 'BIM', duration: '3 Months', color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
  ]

  return (
    <>
      <section style={{ background: '#1C2213', minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

        {/* Animated Canvas Background */}
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />

        {/* Grid pattern overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />

        {/* Green glow top right */}
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.1) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Green glow bottom left */}
        <div style={{ position: 'absolute', bottom: '-200px', left: '-200px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Animated floating rings */}
        <div className="ring ring1" />
        <div className="ring ring2" />
        <div className="ring ring3" />

        {/* Main Content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '80px 40px', position: 'relative', zIndex: 1 }}>

          {/* Top Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '8px 20px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', marginBottom: '32px', textTransform: 'uppercase' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5AB240', display: 'inline-block', animation: mounted ? 'pulse 2s infinite' : 'none' }} />
            India&apos;s Trusted Training Institute
          </div>

          {/* Two column layout */}
          <div className="hero-grid">

            {/* Left — Text */}
            <div className="hero-left">
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(38px, 5.5vw, 68px)', color: '#ffffff', lineHeight: '1.1', fontWeight: '700', marginBottom: '24px', letterSpacing: '-0.5px' }}>
                You Need to{' '}
                <span style={{ color: '#5AB240' }}>Upskill</span>
                <br />Today to Build
                <br />Your{' '}
                <span style={{ color: '#5AB240', fontStyle: 'italic' }}>Tomorrow</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: '1.8', marginBottom: '40px', maxWidth: '480px' }}>
                Industry-ready courses in Tech & Healthcare.
                Live classes, real projects, and placement
                support — trusted by students across India.
              </p>

              {/* CTA Row */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <Link href="/courses" style={{ background: '#5AB240', color: '#fff', padding: '15px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Explore Courses <span style={{ fontSize: '18px' }}>→</span>
                </Link>
                <a href="https://wa.me/919963384555" target="_blank" style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '15px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid rgba(255,255,255,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Talk to Us
                </a>
              </div>

              {/* Image Slideshow */}
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '200px', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
                {heroImages.map((img, i) => (
                  <img key={i} src={img} alt="Nettms Education" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: i === currentImage ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
                ))}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(28,34,19,0.6) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '16px' }}>
                  <div style={{ color: '#5AB240', fontSize: '12px', fontWeight: '700', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5AB240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Ameerpet, Hyderabad</div>
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Live Classes + Online Batches</div>
                </div>
                {/* Dots */}
                <div style={{ position: 'absolute', bottom: '12px', right: '16px', display: 'flex', gap: '6px' }}>
                  {heroImages.map((_, i) => (
                    <div key={i} onClick={() => setCurrentImage(i)} style={{ width: i === currentImage ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === currentImage ? '#5AB240' : 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'all 0.3s' }} />
                  ))}
                </div>
              </div>

              {/* Stats Row */}
              <div style={{ display: 'flex', gap: '0', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px' }}>
                {[
                  { number: '500+', label: 'Students Trained' },
                  { number: '7+', label: 'Courses Offered' },
                  { number: '85%', label: 'Placement Rate' },
                ].map((stat, i) => (
                  <div key={stat.label} style={{ flex: 1, paddingRight: '24px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? '24px' : '0' }}>
                    <div style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', color: '#5AB240', fontFamily: 'var(--font-playfair)', lineHeight: 1, marginBottom: '4px' }}>
                      {stat.number}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', letterSpacing: '0.5px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Course Cards Panel */}
            <div className="hero-right">
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Our Programs
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {courses.map((course) => (
                    <Link key={course.slug} href={`/courses/${course.slug}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px 14px', textDecoration: 'none', display: 'block', transition: 'all 0.25s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = course.bg; e.currentTarget.style.borderColor = `${course.color}50`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: course.bg, border: `1px solid ${course.color}30`, borderRadius: '8px', width: '38px', height: '38px', marginBottom: '10px', color: course.color, fontWeight: '800', fontSize: '10px', letterSpacing: '0.5px' }}>
                        {course.icon}
                      </div>
                      <div style={{ color: '#ffffff', fontWeight: '600', fontSize: '12px', marginBottom: '4px', lineHeight: '1.3' }}>
                        {course.title}
                      </div>
                      <div style={{ color: course.color, fontSize: '11px', fontWeight: '500' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '3px', verticalAlign: 'middle' }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {course.duration}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Bottom CTA */}
                <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', padding: '12px', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.25)', borderRadius: '10px', color: '#5AB240', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#5AB240"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Free Counselling — Talk to an Expert
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes ringFloat {
          0%, 100% { transform: scale(1); opacity: 0.06; }
          50% { transform: scale(1.08); opacity: 0.12; }
        }
        @keyframes ringFloat2 {
          0%, 100% { transform: scale(1); opacity: 0.04; }
          50% { transform: scale(1.05); opacity: 0.09; }
        }
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid #5AB240;
          pointer-events: none;
          z-index: 0;
        }
        .ring1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: 10%;
          animation: ringFloat 6s ease-in-out infinite;
        }
        .ring2 {
          width: 280px;
          height: 280px;
          top: 40px;
          right: calc(10% + 60px);
          animation: ringFloat2 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .ring3 {
          width: 180px;
          height: 180px;
          bottom: 60px;
          left: 5%;
          animation: ringFloat 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 480px) {
          .hero-grid {
            gap: 32px;
          }
        }
      `}</style>
    </>
  )
}