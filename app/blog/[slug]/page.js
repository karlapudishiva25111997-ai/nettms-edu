 'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { getArticle, articles } from '../../../lib/articles'

export default function ArticlePage({ params }) {
  const { slug } = React.use(params)
  const article = getArticle(slug)
  const related = articles.filter(a => a.slug !== slug).slice(0, 3)

  if (!article) {
    return (
      <div style={{ padding: '100px 40px', textAlign: 'center' }}>
        <h1 style={{ color: '#1C2213', fontFamily: 'var(--font-playfair)' }}>Article not found</h1>
        <Link href="/blog" style={{ color: '#5AB240', marginTop: '20px', display: 'inline-block' }}>← Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2213', padding: '80px 40px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '14px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <span style={{ color: '#5AB240' }}>{article.category}</span>
          </div>

          <span style={{ background: article.color + '25', color: article.color, fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '100px', marginBottom: '16px', display: 'inline-block' }}>
            {article.category}
          </span>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', fontWeight: '700', lineHeight: '1.2', marginBottom: '20px' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            <span>✍️ {article.author}</span>
            <span>📅 {article.date}</span>
            <span>⏱ {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#f8faf7', padding: '60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px', alignItems: 'start' }} className="article-grid">

          {/* Article Content */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', border: '1px solid #eef0ec' }}>
            <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.8', marginBottom: '32px', fontStyle: 'italic', borderLeft: `4px solid ${article.color}`, paddingLeft: '20px' }}>
              {article.excerpt}
            </p>

            {article.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginTop: '36px', marginBottom: '16px' }}>{line.replace('## ', '')}</h2>
              } else if (line.startsWith('- ')) {
                return <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: article.color, fontWeight: '700', marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#555', fontSize: '16px', lineHeight: '1.7' }}>{line.replace('- ', '')}</span>
                </div>
              } else if (line.trim() !== '') {
                return <p key={i} style={{ color: '#555', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>{line}</p>
              }
              return null
            })}

            {/* CTA */}
            <div style={{ background: '#1C2213', borderRadius: '12px', padding: '32px', marginTop: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#fff', fontWeight: '700', marginBottom: '12px' }}>
                Ready to Start Your Career?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', marginBottom: '20px' }}>
                Join Nettms Education and build job-ready skills today.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/courses" style={{ background: '#5AB240', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Explore Courses →
                </Link>
                <a href="https://wa.me/919963384555" target="_blank" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  💬 Talk to Us
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #eef0ec', marginBottom: '20px' }}>
              <h3 style={{ fontWeight: '700', color: '#1C2213', fontSize: '16px', marginBottom: '16px' }}>Related Articles</h3>
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <div style={{ fontSize: '11px', color: r.color, fontWeight: '600', marginBottom: '4px' }}>{r.category}</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1C2213', lineHeight: '1.4' }}>{r.title}</div>
                  <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{r.readTime}</div>
                </Link>
              ))}
            </div>

            <div style={{ background: '#1C2213', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontWeight: '700', color: '#fff', fontSize: '16px', marginBottom: '12px' }}>Free Counselling</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '16px', lineHeight: '1.6' }}>
                Not sure which course is right for you? Talk to our experts for free.
              </p>
              <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'block', background: '#5AB240', color: '#fff', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .article-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
