'use client'
import Link from 'next/link'

const masterclasses = [
  {
    course: 'Data Analysis',
    slug: 'data-analysis',
    seats: 15,
    mode: 'Online + Offline',
    duration: '2 Hours',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.1)',
    icon: 'DA',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    timing: 'Weekdays & Weekends',
    level: 'Beginner to Advanced',
    trainer: 'K. Shiva',
    topics: ['What is Data Analysis?', 'Career scope & salary', 'Live demo on Power BI', 'Q&A with trainer'],
  },
  {
    course: 'BIM',
    slug: 'bim',
    seats: 15,
    mode: 'Online + Offline',
    duration: '2 Hours',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    icon: 'BIM',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    timing: 'Weekdays & Weekends',
    level: 'Civil / Mechanical / ECE Engineers',
    trainer: 'Vijayababu',
    topics: ['What is BIM & why it matters?', 'Career scope in India & abroad', 'Live demo on Revit', 'Q&A with trainer'],
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
            🎓 Free Masterclass
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 46px)', color: '#ffffff', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
            Upcoming{' '}
            <span style={{ color: '#5AB240' }}>Free Masterclasses</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
            Attend a FREE 2-hour live masterclass. Learn from industry experts, see live demos and decide if the course is right for you — zero commitment.
          </p>
        </div>

        {/* Masterclass Cards */}
        <div className="masterclass-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          {masterclasses.map((item, i) => (
            <div key={i}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = item.color + '50' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}>

              {/* Card Image */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img src={item.image} alt={item.course} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 20%, rgba(28,34,19,0.92) 100%)' }} />

                {/* FREE badge */}
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span style={{ background: '#5AB240', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '5px 12px', borderRadius: '100px', letterSpacing: '1px' }}>
                    🎓 FREE
                  </span>
                </div>

                {/* Course name on image */}
                <div style={{ position: 'absolute', bottom: '14px', left: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: item.color, borderRadius: '8px', width: '40px', height: '40px', color: '#fff', fontWeight: '800', fontSize: '11px', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff', fontSize: '16px' }}>{item.course}</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>2-Hour Free Masterclass</div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px' }}>

                {/* Trainer / Duration / Seats */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 14px', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '1px' }}>Trainer</div>
                    <div style={{ color: '#fff', fontWeight: '700', fontSize: '13px' }}>{item.trainer}</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 14px', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '1px' }}>Duration</div>
                    <div style={{ color: item.color, fontWeight: '700', fontSize: '13px' }}>{item.duration}</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 14px', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '1px' }}>Seats</div>
                    <div style={{ color: '#EF4444', fontWeight: '700', fontSize: '13px' }}>Only {item.seats}</div>
                  </div>
                </div>

                {/* What you will cover */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                    What you will cover:
                  </div>
                  {item.topics.map((topic, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{topic}</span>
                    </div>
                  ))}
                </div>

                {/* For whom */}
                <div style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, borderRadius: '8px', padding: '10px 14px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span style={{ color: item.color, fontSize: '13px', fontWeight: '600' }}>For: {item.level}</span>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href={`https://wa.me/919963384555?text=Hi%2C%20I%20want%20to%20register%20for%20the%20FREE%20${item.course}%20Masterclass`} target="_blank" style={{ flex: 1, background: '#5AB240', color: '#fff', padding: '13px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', textAlign: 'center', display: 'block' }}>
                    Register Free →
                  </a>
                  <Link href={`/courses/${item.slug}`} style={{ flex: 1, background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '13px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', textAlign: 'center', display: 'block', border: '1px solid rgba(255,255,255,0.15)' }}>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '16px' }}>
            Want a masterclass for other courses? WhatsApp us!
          </p>
          <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#5AB240"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp for Other Masterclasses
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .masterclass-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}