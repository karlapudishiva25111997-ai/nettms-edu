'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function AboutClient() {
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
      <section style={{ background: '#1C2213', padding: '80px 40px 60px', position: 'relative', overflow: 'hidden', minHeight: '380px', display: 'flex', alignItems: 'center' }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-200px', left: '-200px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            About Us
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 60px)', color: '#fff', fontWeight: '700', marginBottom: '20px', lineHeight: '1.15', maxWidth: '700px' }}>
            We Exist to Make <span style={{ color: '#5AB240' }}>Everyone Employable</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', maxWidth: '600px', lineHeight: '1.8', marginBottom: '40px' }}>
            Nettms Education is the training division of Nettms Urban Habitat — a company built on the belief that the right skills can transform any life.
          </p>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            {[
              { number: '2021', label: 'Founded' },
              { number: '500+', label: 'Students Trained' },
              { number: '3', label: 'Business Divisions' },
              { number: '85%', label: 'Placement Rate' },
            ].map((stat, i) => (
              <div key={i} style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? '48px' : '0' }}>
                <div style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: '800', color: '#5AB240', fontFamily: 'var(--font-playfair)', lineHeight: 1, marginBottom: '4px' }}>{stat.number}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ background: '#fff', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Our Story
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1C2213', fontWeight: '700', marginBottom: '24px', lineHeight: '1.2' }}>
                From a Vision to <span style={{ color: '#5AB240' }}>500+ Careers</span>
              </h2>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.9', marginBottom: '20px' }}>
                Nettms Urban Habitat was founded in 2021 with a simple but powerful vision — to bridge the gap between education and employment. We started as a company working in BIM projects and IT solutions, and quickly realized that the biggest challenge in India was not the lack of talent, but the lack of the right skills.
              </p>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.9', marginBottom: '20px' }}>
                That realization gave birth to <strong style={{ color: '#1C2213' }}>Nettms Education</strong> — our dedicated training division. Since then we have trained over 500 students from diverse backgrounds, helping them land jobs in IT, Healthcare and Engineering sectors.
              </p>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.9' }}>
                Today, Nettms Education is one of Hyderabad&apos;s most trusted training institutes — operating from the heart of Ameerpet and reaching students across India through our online programs.
              </p>
            </div>

            <div>
              {[
                { year: '2021', title: 'Nettms Urban Habitat Founded', desc: 'Started as a multi-division company focusing on BIM projects and IT solutions in Hyderabad.', color: '#5AB240' },
                { year: '2022', title: 'Training Division Launched', desc: 'Nettms Education was born — our first batch of students enrolled in BIM and IT courses.', color: '#3B82F6' },
                { year: '2023', title: '200+ Students Trained', desc: 'Expanded course offerings to include Data Science, Full Stack Python and Medical Coding.', color: '#F97316' },
                { year: '2024', title: 'Gen AI & Cloud Courses Added', desc: 'Launched cutting-edge courses in Gen AI, Agentic AI and Multi-Cloud DevOps.', color: '#A855F7' },
                { year: '2025', title: '500+ Students & Growing', desc: 'Now training students across India with online and offline batches and 85% placement rate.', color: '#EC4899' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '11px', flexShrink: 0 }}>
                      {item.year}
                    </div>
                    {i < 4 && <div style={{ width: '2px', flex: 1, background: '#eee', marginTop: '8px' }} />}
                  </div>
                  <div style={{ paddingBottom: '8px' }}>
                    <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '16px', marginBottom: '6px' }}>{item.title}</div>
                    <div style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section style={{ background: '#f8faf7', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '55px 55px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Our Company
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1C2213', fontWeight: '700', marginBottom: '16px' }}>
              Nettms Urban Habitat — <span style={{ color: '#5AB240' }}>3 Divisions</span>
            </h2>
            <p style={{ color: '#666', fontSize: '17px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.7' }}>
              One company, three powerful divisions — each solving a unique problem in the industry.
            </p>
          </div>

          <div className="divisions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {[
              { icon: (color) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>), title: 'BIM Division', subtitle: 'Building Information Modeling', desc: 'We execute professional BIM projects for construction, architecture and engineering firms. Our team delivers high-quality 3D models, coordination and documentation for real estate and infrastructure projects.', tags: ['Revit Modeling', 'Clash Detection', 'BIM Coordination', 'Construction Docs'], color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', active: false },
              { icon: (color) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>), title: 'IT Division', subtitle: 'Software & Technology Solutions', desc: 'We build custom software solutions, web applications and IT systems for businesses. Our team of developers delivers modern, scalable technology products tailored to client needs.', tags: ['Web Development', 'Custom Software', 'IT Consulting', 'Cloud Solutions'], color: '#3B82F6', bg: 'rgba(59,130,246,0.1)', active: false },
              { icon: (color) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>), title: 'Education Division', subtitle: 'Nettms Education — nettmsedu.in', desc: 'Our training arm that has helped 500+ students build job-ready skills. We offer courses in Data Science, DevOps, Full Stack, Gen AI, BIM and Medical Coding — online and offline.', tags: ['7 Courses', '500+ Students', '85% Placement', 'Online + Offline'], color: '#5AB240', bg: 'rgba(90,178,64,0.1)', active: true },
            ].map((div, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '32px 28px', border: div.active ? '2px solid #5AB240' : '1px solid #eef0ec', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                {div.active && (
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#5AB240', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '100px', letterSpacing: '1px' }}>
                    YOU ARE HERE
                  </div>
                )}
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: div.bg, border: `1px solid ${div.color}30`, borderRadius: '14px', width: '58px', height: '58px', marginBottom: '20px' }}>
                  {div.icon(div.color)}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1C2213', marginBottom: '4px', fontFamily: 'var(--font-playfair)' }}>{div.title}</h3>
                <div style={{ color: div.color, fontSize: '12px', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.5px' }}>{div.subtitle}</div>
                <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>{div.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {div.tags.map(tag => (
                    <span key={tag} style={{ background: div.bg, color: div.color, fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px', border: `1px solid ${div.color}25` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ background: '#1C2213', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-200px', left: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Our Vision
          </div>
          <div style={{ fontSize: '60px', color: '#5AB240', opacity: 0.3, fontFamily: 'Georgia', lineHeight: 1, marginBottom: '8px' }}>&ldquo;</div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 4vw, 42px)', color: '#fff', fontWeight: '700', lineHeight: '1.4', marginBottom: '32px' }}>
            Everyone deserves a job. Everyone deserves to earn. We teach the skills that make it possible.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: '1.9', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
            At Nettms, we believe that unemployment is not a people problem — it is a skills problem. Our mission is to identify the most in-demand skills in the market and train people to master them. When someone walks out of Nettms with the right skill, they walk into a job. That is our promise.
          </p>
          <div className="vision-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '60px' }}>
            {[
              { title: 'In-Demand Skills', desc: 'We only teach skills that companies are actively hiring for right now.', color: '#5AB240' },
              { title: 'Employability First', desc: 'Every course is designed around making you hireable, not just knowledgeable.', color: '#3B82F6' },
              { title: 'Inclusive Growth', desc: 'We welcome students from all backgrounds — any degree, any stream, any age.', color: '#F97316' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '28px 24px', textAlign: 'left' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, marginBottom: '16px' }} />
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '16px', marginBottom: '10px' }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: '1.7' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f8faf7', padding: '80px 40px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 40px)', color: '#1C2213', fontWeight: '700', marginBottom: '16px' }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ color: '#666', fontSize: '17px', lineHeight: '1.7', marginBottom: '36px' }}>
            Join 500+ students who have already transformed their careers with Nettms Education.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/courses" style={{ background: '#5AB240', color: '#fff', padding: '15px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Explore Courses →
            </Link>
            <a href="https://wa.me/919963384555" target="_blank" style={{ background: '#1C2213', color: '#fff', padding: '15px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
              💬 Talk to Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .divisions-grid { grid-template-columns: 1fr !important; }
          .vision-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}