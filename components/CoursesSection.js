'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const courses = [
  {
    icon: 'DA',
    title: 'Data Analysis',
    desc: 'Master Excel, SQL, Power BI & Python to analyze data and drive business decisions.',
    duration: '3 Months',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.1)',
    slug: 'data-analysis',
    tags: ['Excel', 'SQL', 'Power BI', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    icon: 'DS',
    title: 'Data Science',
    desc: 'Learn Machine Learning, Deep Learning and AI to build intelligent data-driven systems.',
    duration: '4 Months',
    color: '#5AB240',
    bg: 'rgba(90,178,64,0.1)',
    slug: 'data-science',
    tags: ['Python', 'ML', 'Deep Learning', 'AI'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    icon: 'AWS',
    title: 'Multi-Cloud DevOps',
    desc: 'Master AWS & Azure cloud platforms with Docker, Kubernetes, CI/CD and Terraform.',
    duration: '3-4 Months',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.1)',
    slug: 'devops',
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
  },
  {
    icon: 'PY',
    title: 'Full Stack Python',
    desc: 'Build complete web applications using Django, React.js, REST APIs and deploy on cloud.',
    duration: '4-5 Months',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.1)',
    slug: 'python-fullstack',
    tags: ['Python', 'Django', 'React', 'REST API'],
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
  },
  {
    icon: 'AI',
    title: 'Gen AI & Agentic AI',
    desc: 'Master Generative AI, LLMs, Prompt Engineering and build autonomous AI agents.',
    duration: '3 Months',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.1)',
    slug: 'gen-ai',
    tags: ['ChatGPT', 'LangChain', 'LLMs', 'Agents'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    icon: 'BIM',
    title: 'BIM',
    desc: 'Building Information Modeling for Civil, Mechanical and ECE engineers.',
    duration: '3 Months',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    slug: 'bim',
    tags: ['Revit', 'AutoCAD', 'Navisworks', '3D'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    icon: 'MC',
    title: 'Medical Coding',
    desc: 'Learn ICD-10, CPT, HCPCS coding systems and prepare for the AAPC CPC certification.',
    duration: '2-3 Months',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.1)',
    slug: 'medical-coding',
    tags: ['ICD-10', 'CPT', 'HCPCS', 'CPC Exam'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
]

export default function CoursesSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let dots = []
    let orbs = []

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
      orbs = Array.from({ length: 6 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 150 + 80,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.07 + 0.02,
      }))
    }

    init()
    window.addEventListener('resize', init)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      orbs.forEach(orb => {
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        g.addColorStop(0, `rgba(90,178,64,${orb.opacity})`)
        g.addColorStop(1, 'rgba(90,178,64,0)')
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })
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
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(90,178,64,${0.1 * (1 - dist / 130)})`
            ctx.lineWidth = 0.7
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
    <section style={{ background: '#f0f7ec', padding: '100px 40px', position: 'relative', overflow: 'hidden', minHeight: '600px' }}>

      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.05) 1px, transparent 1px)', backgroundSize: '55px 55px', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'absolute', top: '-150px', left: '-150px', width: '420px', height: '420px', borderRadius: '50%', border: '1.5px solid rgba(90,178,64,0.1)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-150px', right: '-150px', width: '480px', height: '480px', borderRadius: '50%', border: '1.5px solid rgba(90,178,64,0.1)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="float-ring float-ring-1" />
      <div className="float-ring float-ring-2" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Our Programs
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 46px)', color: '#1C2213', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
            Courses Built for the <span style={{ color: '#5AB240' }}>Real World</span>
          </h2>
          <p style={{ color: '#555', fontSize: '17px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.7' }}>
            Every course is designed with industry experts, focused on job-ready skills and real project experience.
          </p>
        </div>

        {/* Course Cards */}
        <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {courses.map((course) => (
            <div key={course.slug}
              style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.9)', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(28,34,19,0.15)`
                e.currentTarget.style.borderColor = course.color + '60'
                e.currentTarget.style.background = 'rgba(255,255,255,0.98)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.92)'
              }}>

              {/* Course Image */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: course.color, borderRadius: '8px', width: '36px', height: '36px', color: '#fff', fontWeight: '800', fontSize: '11px' }}>
                    {course.icon}
                  </div>
                  <span style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                {/* Title */}
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1C2213', marginBottom: '10px', fontFamily: 'var(--font-playfair)' }}>
                  {course.title}
                </h3>

                {/* Description */}
                <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px', flex: 1 }}>
                  {course.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {course.tags.map(tag => (
                    <span key={tag} style={{ background: course.bg, color: course.color, fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px', border: `1px solid ${course.color}25` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5AB240', display: 'inline-block', animation: 'blink 1.5s infinite' }} />
                      <span style={{ fontSize: '12px', color: '#5AB240', fontWeight: '600' }}>Batch Starting Soon</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#F97316', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                      Limited Seats
                    </div>
                  </div>
                  <Link href={`/courses/${course.slug}`} style={{ background: '#1C2213', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', transition: 'background 0.2s' }}
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
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px' }}>
            Not sure which course is right for you?
          </p>
          <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#5AB240', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            💬 Get Free Counselling
          </a>
        </div>

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes floatRing {
          0%, 100% { transform: scale(1); opacity: 0.06; }
          50% { transform: scale(1.06); opacity: 0.12; }
        }
        .float-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(90,178,64,0.15);
          pointer-events: none;
          z-index: 0;
        }
        .float-ring-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          right: 5%;
          animation: floatRing 7s ease-in-out infinite;
        }
        .float-ring-2 {
          width: 200px;
          height: 200px;
          top: 15%;
          right: 8%;
          animation: floatRing 9s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        @media (max-width: 900px) {
          .courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .float-ring { display: none; }
        }
        @media (max-width: 600px) {
          .courses-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}