'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { articles } from '../../lib/articles'

const NEWS_API_KEY = '5cba78bb583c474a99530f38465544eb'
const categories = ['All', 'Data Science', 'DevOps', 'Artificial Intelligence', 'Healthcare', 'Technology']

export default function BlogPage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const queries = [
          'data science india',
          'artificial intelligence technology',
          'cloud computing devops',
          'medical coding healthcare',
          'python programming career',
        ]
        const query = queries[Math.floor(Math.random() * queries.length)]
        const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=12&apiKey=${NEWS_API_KEY}`)
        const data = await res.json()
        if (data.articles) {
          setNews(data.articles.filter(a => a.title && a.urlToImage && a.description))
        }
      } catch (err) {
        console.error('News fetch error:', err)
      }
      setLoading(false)
    }
    fetchNews()
  }, [])

  const filteredArticles = articles.filter(a => {
    const matchCategory = activeCategory === 'All' || a.category === activeCategory
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2213', padding: '80px 40px 60px', position: 'relative', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Blog & Resources
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff', fontWeight: '700', marginBottom: '16px', lineHeight: '1.15' }}>
            Learn. Grow. <span style={{ color: '#5AB240' }}>Succeed.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '520px', lineHeight: '1.7', marginBottom: '32px' }}>
            Career guides, industry news and tech insights — updated daily to help you stay ahead.
          </p>

          {/* Search */}
          <div style={{ display: 'flex', gap: '12px', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ flex: 1, padding: '13px 18px', borderRadius: '8px', border: 'none', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-inter)' }}
            />
            <button style={{ background: '#5AB240', color: '#fff', padding: '13px 24px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '15px', cursor: 'pointer' }}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '16px 40px', position: 'sticky', top: '90px', zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '12px', overflowX: 'auto' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{ background: activeCategory === cat ? '#1C2213' : '#f5f5f5', color: activeCategory === cat ? '#fff' : '#666', padding: '7px 18px', borderRadius: '100px', border: 'none', fontSize: '13px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section style={{ background: '#f8faf7', padding: '60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Our Articles */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '4px', height: '28px', background: '#5AB240', borderRadius: '2px' }} />
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#1C2213', fontWeight: '700' }}>
                Career Guides & Insights
              </h2>
            </div>

            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {filteredArticles.map(article => (
                <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eef0ec', transition: 'all 0.3s', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                    <div style={{ height: '6px', background: article.color }} />
                    <div style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <span style={{ background: article.color + '15', color: article.color, fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '100px' }}>{article.category}</span>
                        <span style={{ color: '#999', fontSize: '12px' }}>{article.readTime}</span>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1C2213', marginBottom: '10px', lineHeight: '1.4', fontFamily: 'var(--font-playfair)' }}>
                        {article.title}
                      </h3>
                      <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                        {article.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ color: '#999', fontSize: '12px' }}>{article.date}</span>
                        <span style={{ color: article.color, fontSize: '13px', fontWeight: '600' }}>Read More →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Latest Tech News */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '4px', height: '28px', background: '#3B82F6', borderRadius: '2px' }} />
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#1C2213', fontWeight: '700' }}>
                Latest Tech & Industry News
              </h2>
              <span style={{ background: '#EAF6E3', color: '#5AB240', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '100px', animation: 'blink 2s infinite' }}>
                LIVE
              </span>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px', color: '#888', fontSize: '16px' }}>
                Loading latest news...
              </div>
            ) : (
              <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                {news.slice(0, 9).map((item, i) => (
                  <a key={i} href={item.url} target="_blank" style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eef0ec', transition: 'all 0.3s', height: '100%' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                      {item.urlToImage && (
                        <img src={item.urlToImage} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} onError={e => e.target.style.display = 'none'} />
                      )}
                      <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                          <span style={{ background: '#EEF0EC', color: '#666', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>
                            {item.source?.name || 'News'}
                          </span>
                          <span style={{ color: '#999', fontSize: '11px' }}>
                            {new Date(item.publishedAt).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1C2213', marginBottom: '8px', lineHeight: '1.4' }}>
                          {item.title?.slice(0, 80)}...
                        </h3>
                        <p style={{ color: '#777', fontSize: '13px', lineHeight: '1.5', marginBottom: '12px' }}>
                          {item.description?.slice(0, 100)}...
                        </p>
                        <span style={{ color: '#3B82F6', fontSize: '13px', fontWeight: '600' }}>Read Full Article →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .news-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .news-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}