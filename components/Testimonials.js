'use client'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Data Analyst',
    company: 'TCS',
    course: 'Data Analysis',
    text: 'Nettms completely changed my career. I was a commerce graduate with no tech background. After the Data Analysis course, I got placed at TCS within 2 months. The trainers are amazing and very patient.',
    initial: 'RS',
    color: '#14B8A6',
  },
  {
    name: 'Aditya Kumar',
    role: 'AI Engineer',
    company: 'Tech Mahindra',
    course: 'Gen AI & Agentic AI',
    text: 'The Gen AI course is way ahead of anything else available in Hyderabad. We worked with real LLMs and built actual AI agents. The trainers have deep industry knowledge and are always available.',
    initial: 'AK',
    color: '#A855F7',
  },
  {
    name: 'Lakshmi Devi',
    role: 'Data Scientist',
    company: 'HCL Technologies',
    course: 'Data Science',
    text: 'I did my B.Tech in ECE and always wanted to work in Data Science. Nettms made it possible. The curriculum is well structured and the live projects gave me the confidence to crack interviews.',
    initial: 'LD',
    color: '#5AB240',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive(a => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section style={{ background: '#f8faf7', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>

      {/* Background decorations */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '55px 55px', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-150px', right: '-150px', width: '500px', height: '500px', borderRadius: '50%', border: '1px solid rgba(90,178,64,0.08)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(90,178,64,0.06)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Student Success
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 46px)', color: '#1C2213', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
            Real Stories.{' '}
            <span style={{ color: '#5AB240' }}>Real Results.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            Our students come from all backgrounds and go on to build amazing careers.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '48px' }} className="test-grid">

          {/* Left — Big quote */}
          <div style={{ background: '#1C2213', borderRadius: '20px', padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Quote mark */}
            <div style={{ fontSize: '80px', lineHeight: 1, color: '#5AB240', opacity: 0.3, fontFamily: 'Georgia', marginBottom: '8px', marginTop: '-20px' }}>
              &ldquo;
            </div>

            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px', fontStyle: 'italic' }}>
              {t.text}
            </p>

            {/* Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '16px', flexShrink: 0 }}>
                {t.initial}
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: '700', fontSize: '16px' }}>{t.name}</div>
                <div style={{ color: t.color, fontSize: '13px', fontWeight: '600' }}>{t.role} — {t.company}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '2px' }}>Course: {t.course}</div>
              </div>
            </div>
          </div>

          {/* Right — All testimonial cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {testimonials.map((item, i) => (
              <div key={i}
                onClick={() => setActive(i)}
                style={{ background: i === active ? '#fff' : 'rgba(255,255,255,0.6)', border: i === active ? `2px solid ${item.color}` : '1px solid #e8f0e4', borderRadius: '12px', padding: '16px 20px', cursor: 'pointer', transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: i === active ? '0 8px 24px rgba(0,0,0,0.08)' : 'none' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '13px', flexShrink: 0 }}>
                  {item.initial}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: '#1C2213' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#888', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.role} — {item.company}</div>
                </div>
                {i === active && (
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <button onClick={prev} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid #1C2213', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#1C2213', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1C2213'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C2213' }}>
            ←
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, i) => (
              <div key={i} onClick={() => setActive(i)} style={{ width: i === active ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === active ? '#5AB240' : '#ccc', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>

          <button onClick={next} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid #1C2213', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#1C2213', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1C2213'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C2213' }}>
            →
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .test-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}