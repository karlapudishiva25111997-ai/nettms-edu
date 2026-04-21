'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function PlacementsClient() {
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

  const placements = [
    { name: 'Rahul Sharma', role: 'Data Analyst', company: 'TCS', course: 'Data Analysis', initial: 'RS', color: '#14B8A6', salary: '4.2 LPA' },
    { name: 'Priya Reddy', role: 'Python Developer', company: 'Infosys', course: 'Full Stack Python', initial: 'PR', color: '#3B82F6', salary: '5.5 LPA' },
    { name: 'Mohammed Farhan', role: 'DevOps Engineer', company: 'Wipro', course: 'Multi-Cloud DevOps', initial: 'MF', color: '#F97316', salary: '7.2 LPA' },
    { name: 'Sneha Patel', role: 'Medical Coder', company: 'Omega Healthcare', course: 'Medical Coding', initial: 'SP', color: '#EC4899', salary: '3.8 LPA' },
    { name: 'Aditya Kumar', role: 'AI Engineer', company: 'Tech Mahindra', course: 'Gen AI & Agentic AI', initial: 'AK', color: '#A855F7', salary: '9.5 LPA' },
    { name: 'Lakshmi Devi', role: 'Data Scientist', company: 'HCL Technologies', course: 'Data Science', initial: 'LD', color: '#5AB240', salary: '8.0 LPA' },
    { name: 'Kiran Babu', role: 'BIM Coordinator', company: 'L&T Construction', course: 'BIM', initial: 'KB', color: '#F59E0B', salary: '4.5 LPA' },
    { name: 'Divya Nair', role: 'Business Analyst', company: 'Capgemini', course: 'Data Analysis', initial: 'DN', color: '#14B8A6', salary: '5.0 LPA' },
    { name: 'Sai Krishna', role: 'Cloud Engineer', company: 'Accenture', course: 'Multi-Cloud DevOps', initial: 'SK', color: '#F97316', salary: '8.5 LPA' },
    { name: 'Ananya Singh', role: 'Full Stack Developer', company: 'Mphasis', course: 'Full Stack Python', initial: 'AS', color: '#3B82F6', salary: '6.0 LPA' },
    { name: 'Ravi Teja', role: 'ML Engineer', company: 'Mindtree', course: 'Data Science', initial: 'RT', color: '#5AB240', salary: '7.8 LPA' },
    { name: 'Pooja Sharma', role: 'Medical Coder', company: 'Apollo Hospitals', course: 'Medical Coding', initial: 'PS', color: '#EC4899', salary: '3.5 LPA' },
  ]

  const companies = ['TCS', 'Infosys', 'Wipro', 'HCL', 'Accenture', 'Tech Mahindra', 'Capgemini', 'Mphasis', 'Mindtree', 'L&T', 'Apollo Hospitals', 'Omega Healthcare']

  const stats = [
    { number: '500+', label: 'Students Trained', color: '#5AB240' },
    { number: '85%', label: 'Placement Rate', color: '#3B82F6' },
    { number: '50+', label: 'Hiring Partners', color: '#F97316' },
    { number: '₹9.5L', label: 'Highest Package', color: '#A855F7' },
  ]

  const process = [
    { step: '01', title: 'Resume Building', desc: 'Our experts help you craft a professional resume that highlights your skills and projects.', color: '#5AB240' },
    { step: '02', title: 'LinkedIn Optimization', desc: 'We optimize your LinkedIn profile to attract recruiters and increase visibility.', color: '#3B82F6' },
    { step: '03', title: 'Mock Interviews', desc: 'Practice with real interview questions from top companies in your domain.', color: '#F97316' },
    { step: '04', title: 'Job Referrals', desc: 'We connect you directly with our hiring partners and refer you for open positions.', color: '#A855F7' },
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2213', padding: '80px 40px 60px', position: 'relative', overflow: 'hidden', minHeight: '380px', display: 'flex', alignItems: 'center' }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Placements
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 58px)', color: '#fff', fontWeight: '700', marginBottom: '20px', lineHeight: '1.15' }}>
            Our Students Are <span style={{ color: '#5AB240' }}>Getting Hired</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '540px', margin: '0 auto 48px', lineHeight: '1.7' }}>
            From freshers to career switchers — our students are landing jobs at top companies across India.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', flexWrap: 'wrap' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ padding: '0 40px', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', color: stat.color, fontFamily: 'var(--font-playfair)', lineHeight: 1, marginBottom: '6px' }}>{stat.number}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section style={{ background: '#fff', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Our Process
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1C2213', fontWeight: '700', marginBottom: '16px' }}>
              How We Get You <span style={{ color: '#5AB240' }}>Placed</span>
            </h2>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {process.map((item, i) => (
              <div key={i} style={{ background: '#f8faf7', borderRadius: '16px', padding: '32px 24px', border: '1px solid #eef0ec', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = item.color + '40' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#eef0ec' }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: item.color, opacity: 0.15, fontFamily: 'var(--font-playfair)', lineHeight: 1, marginBottom: '16px' }}>{item.step}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1C2213', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7' }}>{item.desc}</p>
                <div style={{ marginTop: '20px', height: '3px', width: '40px', background: item.color, borderRadius: '2px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Placements */}
      <section style={{ background: '#f8faf7', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '55px 55px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Success Stories
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1C2213', fontWeight: '700' }}>
              Meet Our <span style={{ color: '#5AB240' }}>Placed Students</span>
            </h2>
          </div>
          <div className="placements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {placements.map((p, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '24px 20px', border: '1px solid #eef0ec', transition: 'all 0.3s', textAlign: 'center' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = p.color + '40' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#eef0ec' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '18px', margin: '0 auto 16px' }}>
                  {p.initial}
                </div>
                <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '16px', marginBottom: '4px' }}>{p.name}</div>
                <div style={{ color: p.color, fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>{p.role}</div>
                <div style={{ color: '#888', fontSize: '12px', marginBottom: '12px' }}>{p.company}</div>
                <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '8px', marginBottom: '10px' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '2px' }}>Course</div>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#444' }}>{p.course}</div>
                </div>
                <div style={{ background: `${p.color}15`, borderRadius: '8px', padding: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '2px' }}>Package</div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: p.color, fontFamily: 'var(--font-playfair)' }}>{p.salary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section style={{ background: '#1C2213', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Hiring Partners
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px, 4vw, 38px)', color: '#fff', fontWeight: '700', marginBottom: '48px' }}>
            Our Students Work At
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {companies.map((company, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 24px', color: '#fff', fontWeight: '600', fontSize: '15px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(90,178,64,0.15)'; e.currentTarget.style.borderColor = 'rgba(90,178,64,0.4)'; e.currentTarget.style.color = '#5AB240' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f8faf7', padding: '80px 40px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px, 4vw, 40px)', color: '#1C2213', fontWeight: '700', marginBottom: '16px' }}>
            Your Name Could Be on This List
          </h2>
          <p style={{ color: '#666', fontSize: '17px', lineHeight: '1.7', marginBottom: '36px' }}>
            Join Nettms Education and become our next placement success story.
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
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .placements-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .placements-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}