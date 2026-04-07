'use client'
import Link from 'next/link'

const batches = [
  {
    course: 'Data Analysis',
    slug: 'data-analysis',
    date: 'May 5, 2025',
    seats: 8,
    mode: 'Online + Offline',
    duration: '3 Months',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.1)',
    icon: 'DA',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    course: 'Data Science',
    slug: 'data-science',
    date: 'May 10, 2025',
    seats: 5,
    mode: 'Online + Offline',
    duration: '4 Months',
    color: '#5AB240',
    bg: 'rgba(90,178,64,0.1)',
    icon: 'DS',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    course: 'Multi-Cloud DevOps',
    slug: 'devops',
    date: 'May 12, 2025',
    seats: 10,
    mode: 'Online + Offline',
    duration: '3-4 Months',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.1)',
    icon: 'AWS',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
  },
  {
    course: 'Full Stack Python',
    slug: 'python-fullstack',
    date: 'May 15, 2025',
    seats: 6,
    mode: 'Online + Offline',
    duration: '4-5 Months',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.1)',
    icon: 'PY',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
  },
  {
    course: 'Gen AI & Agentic AI',
    slug: 'gen-ai',
    date: 'May 18, 2025',
    seats: 7,
    mode: 'Online + Offline',
    duration: '3 Months',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.1)',
    icon: 'AI',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    course: 'Medical Coding',
    slug: 'medical-coding',
    date: 'May 20, 2025',
    seats: 12,
    mode: 'Online + Offline',
    duration: '2-3 Months',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.1)',
    icon: 'MC',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
]

export default function UpcomingBatches() {
  return (
    <section style={{ background: '#1C2213', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-200px', left: '-200px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Upcoming Batches
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 46px)', color: '#ffffff', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
            Next Batches Starting{' '}
            <span style={{ color: '#5AB240' }}>Soon</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            Limited seats available. Enroll now to secure your spot in the upcoming batch.
          </p>
        </div>

        {/* Batch Cards */}
        <div className="batches-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {batches.map((batch, i) => (
            <div key={i}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3)`; e.currentTarget.style.borderColor = batch.color + '50' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}>

              {/* Card Image */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img
                  src={batch.image}
                  alt={batch.course}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 20%, rgba(28,34,19,0.9) 100%)' }} />

                {/* Seats badge */}
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span style={{ background: batch.seats <= 6 ? '#EF4444' : '#5AB240', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '100px' }}>
                    {batch.seats <= 6 ? `⚠️ Only ${batch.seats} left!` : `${batch.seats} seats`}
                  </span>
                </div>

                {/* Course name on image */}
                <div style={{ position: 'absolute', bottom: '14px', left: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: batch.color, borderRadius: '8px', width: '36px', height: '36px', color: '#fff', fontWeight: '800', fontSize: '11px', flexShrink: 0 }}>
                    {batch.icon}
                  </div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '15px' }}>
                    {batch.course}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px 24px' }}>

                {/* Batch Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>📅 Start Date</span>
                    <span style={{ color: '#fff', fontWeight: '600', fontSize: '13px' }}>{batch.date}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>⏱ Duration</span>
                    <span style={{ color: '#fff', fontWeight: '600', fontSize: '13px' }}>{batch.duration}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>🖥️ Mode</span>
                    <span style={{ color: '#fff', fontWeight: '600', fontSize: '13px' }}>{batch.mode}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="https://wa.me/919963384555" target="_blank" style={{ flex: 1, background: '#5AB240', color: '#fff', padding: '11px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', textAlign: 'center', display: 'block' }}>
                    Book Seat
                  </a>
                  <Link href={`/courses/${batch.slug}`} style={{ flex: 1, background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '11px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', textAlign: 'center', display: 'block', border: '1px solid rgba(255,255,255,0.15)' }}>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .batches-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .batches-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}