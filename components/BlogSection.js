 'use client'
import Link from 'next/link'
import { articles } from '../lib/articles'

export default function BlogSection() {
  const latestArticles = articles.slice(0, 3)

  return (
    <section style={{ background: '#ffffff', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.03) 1px, transparent 1px)', backgroundSize: '55px 55px', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-150px', right: '-150px', width: '500px', height: '500px', borderRadius: '50%', border: '1px solid rgba(90,178,64,0.07)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(90,178,64,0.05)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.3)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Blog & Resources
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 46px)', color: '#1C2213', fontWeight: '700', lineHeight: '1.2' }}>
              Latest Career{' '}
              <span style={{ color: '#5AB240' }}>Guides & Tips</span>
            </h2>
          </div>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1C2213', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', whiteSpace: 'nowrap' }}
            onMouseEnter={e => e.currentTarget.style.background = '#5AB240'}
            onMouseLeave={e => e.currentTarget.style.background = '#1C2213'}>
            View All Articles →
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="blog-section-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {latestArticles.map((article, i) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eef0ec', transition: 'all 0.3s', height: '100%', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(28,34,19,0.12)'; e.currentTarget.style.borderColor = article.color + '40' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#eef0ec' }}>

                {/* Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ background: article.color, color: '#fff', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '100px' }}>
                      {article.category}
                    </span>
                    <span style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '100px' }}>
                      ⏱ {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1C2213', marginBottom: '10px', lineHeight: '1.4', fontFamily: 'var(--font-playfair)' }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                    {article.excerpt.slice(0, 100)}...
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f5f5f5', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: article.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: '700' }}>
                        N
                      </div>
                      <span style={{ fontSize: '12px', color: '#888' }}>{article.author}</span>
                    </div>
                    <span style={{ color: article.color, fontSize: '13px', fontWeight: '700' }}>Read More →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div style={{ marginTop: '60px', background: '#1C2213', borderRadius: '16px', padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(20px, 3vw, 28px)', color: '#fff', fontWeight: '700', marginBottom: '8px' }}>
              Want Daily Career Tips & Tech News?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
              Visit our blog for daily updates on tech careers, industry news and study guides.
            </p>
          </div>
          <Link href="/blog" style={{ background: '#5AB240', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>
            Visit Blog →
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-section-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .blog-section-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
