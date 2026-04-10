'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { courses } from '../../../lib/courses'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyMtyVDqCpW_DfEVxCYOmrkuvHqYmrBA426uxYawiutIwkH_jyhks6LxRCZtzUXgZuMDg/exec'

export default function CourseClient({ course }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [openModule, setOpenModule] = useState(0)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!course) {
    return (
      <div style={{ padding: '100px 40px', textAlign: 'center' }}>
        <h1 style={{ color: '#1C2213', fontFamily: 'var(--font-playfair)' }}>Course not found</h1>
        <Link href="/courses" style={{ color: '#5AB240', marginTop: '20px', display: 'inline-block' }}>← Back to Courses</Link>
      </div>
    )
  }

const relatedCourses = (() => {
  const others = courses.filter(c => c.slug !== course.slug)
  const idx = courses.findIndex(c => c.slug === course.slug)
  const start = (idx + 1) % others.length
  return [...others.slice(start), ...others.slice(0, start)].slice(0, 3)
})()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: course.title,
          message: formData.message,
        }),
      })
    } catch (err) {
      // handle silently
    }
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2213', padding: '60px 20px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '13px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <Link href="/courses" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Courses</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>
            <span style={{ color: '#5AB240' }}>{course.title}</span>
          </div>

          <div className="course-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <div style={{ position: 'relative', height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '28px' }}>
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(28,34,19,0.85) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: course.color, borderRadius: '10px', width: '48px', height: '48px', color: '#fff', fontWeight: '800', fontSize: '14px' }}>
                    {course.icon}
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '2px' }}>Course</div>
                    <div style={{ color: '#fff', fontWeight: '700', fontSize: '16px' }}>{course.title}</div>
                  </div>
                </div>
              </div>

              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 5vw, 52px)', color: '#fff', fontWeight: '700', lineHeight: '1.15', marginBottom: '16px' }}>
                {course.title}
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: '1.8', marginBottom: '28px' }}>
                {course.description}
              </p>

              {/* Meta chips */}
              <div className="meta-chips" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '32px' }}>
                {[
                  { label: '⏱ Duration', value: course.duration },
                  { label: '📍 Mode', value: course.mode },
                  { label: '🎓 Next Batch', value: course.nextBatch },
                  { label: '💰 Fee', value: course.finalFee },
                ].map(chip => (
                  <div key={chip.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', marginBottom: '2px' }}>{chip.label}</div>
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '13px' }}>{chip.value}</div>
                  </div>
                ))}
              </div>

              <div className="cta-row" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#enroll" style={{ background: '#5AB240', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', flex: 1, textAlign: 'center', minWidth: '140px' }}>
                  Enroll Now →
                </a>
                <a href="https://wa.me/919963384555" target="_blank" style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid rgba(255,255,255,0.15)', flex: 1, textAlign: 'center', minWidth: '140px' }}>
                  💬 Talk to Us
                </a>
              </div>
            </div>

            {/* Right — Sticky Card */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', position: 'sticky', top: '100px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '4px' }}>Course Fee</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '30px', fontWeight: '800', color: '#fff', fontFamily: 'var(--font-playfair)' }}>{course.finalFee}</span>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'line-through' }}>{course.fee}</div>
                    <div style={{ color: '#5AB240', fontSize: '12px', fontWeight: '600' }}>Save {course.discount}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                {[
                  { label: 'Duration', value: course.duration },
                  { label: 'Mode', value: course.mode },
                  { label: 'Next Batch', value: course.nextBatch },
                  { label: 'Certificate', value: 'Yes — Nettms Certificate' },
                  { label: 'Placement', value: 'Yes — Full Support' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>{item.label}</span>
                    <span style={{ color: '#fff', fontSize: '13px', fontWeight: '600', textAlign: 'right', maxWidth: '60%' }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <a href="#enroll" style={{ display: 'block', background: '#5AB240', color: '#fff', padding: '14px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', textAlign: 'center', marginBottom: '10px' }}>
                Enroll Now →
              </a>
              <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'block', background: 'transparent', color: '#fff', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                💬 WhatsApp Enquiry
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: '#f8faf7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="course-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}>

            {/* Left Content */}
            <div>

              {/* What You Will Learn */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  What You Will Learn
                </h2>
                <div className="learn-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {course.whatYouLearn.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: course.bg, border: `1px solid ${course.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke={course.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{ color: '#444', fontSize: '14px', lineHeight: '1.6' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Course Curriculum
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {course.modules.map((mod, i) => (
                    <div key={i} style={{ border: '1px solid #eef0ec', borderRadius: '10px', overflow: 'hidden' }}>
                      <button onClick={() => setOpenModule(openModule === i ? null : i)} style={{ width: '100%', padding: '14px 16px', background: openModule === i ? course.bg : '#fafafa', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ background: course.color, color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0 }}>
                            {i + 1}
                          </span>
                          <span style={{ fontWeight: '600', fontSize: '14px', color: '#1C2213' }}>{mod.name}</span>
                        </div>
                        <span style={{ color: course.color, fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>{openModule === i ? '−' : '+'}</span>
                      </button>
                      {openModule === i && (
                        <div style={{ padding: '14px 16px 16px 50px', background: '#fff' }}>
                          {mod.topics.map((topic, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', borderBottom: j < mod.topics.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: course.color, flexShrink: 0 }} />
                              <span style={{ color: '#555', fontSize: '14px' }}>{topic}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Tools & Technologies
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {course.tools.map(tool => (
                    <span key={tool} style={{ background: course.bg, color: course.color, fontSize: '13px', fontWeight: '600', padding: '8px 16px', borderRadius: '100px', border: `1px solid ${course.color}25` }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Who Should Join */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Who Should Join
                </h2>
                <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <h4 style={{ color: '#1C2213', fontWeight: '700', marginBottom: '12px', fontSize: '15px' }}>This course is for</h4>
                    {course.whoShouldJoin.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ color: '#5AB240', fontWeight: '700', marginTop: '2px' }}>✓</span>
                        <span style={{ color: '#555', fontSize: '14px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 style={{ color: '#1C2213', fontWeight: '700', marginBottom: '12px', fontSize: '15px' }}>Prerequisites</h4>
                    {course.prerequisites.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ color: '#5AB240', fontWeight: '700', marginTop: '2px' }}>→</span>
                        <span style={{ color: '#555', fontSize: '14px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Outcomes */}
              <div style={{ background: '#1C2213', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#fff', fontWeight: '700', marginBottom: '20px' }}>
                  Career Outcomes
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {course.careerRoles.map(role => (
                    <span key={role} style={{ background: 'rgba(90,178,64,0.15)', color: '#5AB240', fontSize: '13px', fontWeight: '600', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(90,178,64,0.3)' }}>
                      {role}
                    </span>
                  ))}
                </div>
                <div style={{ background: 'rgba(90,178,64,0.1)', border: '1px solid rgba(90,178,64,0.25)', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>💰</span>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Average Salary Range</div>
                    <div style={{ color: '#5AB240', fontWeight: '700', fontSize: '20px', fontFamily: 'var(--font-playfair)' }}>{course.salary}</div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', marginBottom: '20px', border: '1px solid #eef0ec' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: '#1C2213', fontWeight: '700', marginBottom: '20px' }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {course.faqs.map((faq, i) => (
                    <div key={i} style={{ border: '1px solid #eef0ec', borderRadius: '10px', overflow: 'hidden' }}>
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '14px 16px', background: openFaq === i ? '#f8faf7' : '#fff', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', gap: '12px' }}>
                        <span style={{ fontWeight: '600', fontSize: '14px', color: '#1C2213' }}>{faq.q}</span>
                        <span style={{ color: '#5AB240', fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 16px 14px', background: '#f8faf7' }}>
                          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }} id="enroll">
              <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #eef0ec', marginBottom: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', color: '#1C2213', fontWeight: '700', marginBottom: '6px' }}>
                  Enroll in this Course
                </h3>
                <p style={{ color: '#888', fontSize: '13px', marginBottom: '20px' }}>Fill the form and we will contact you within 24 hours</p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                    <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '18px', marginBottom: '8px' }}>Thank You!</div>
                    <div style={{ color: '#666', fontSize: '14px' }}>We will contact you within 24 hours.</div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input type="text" placeholder="Your Full Name *" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <input type="email" placeholder="Email Address *" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <textarea placeholder="Any questions? (Optional)" rows={3} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'var(--font-inter)', width: '100%', boxSizing: 'border-box' }} />
                    <button type="submit" style={{ background: '#5AB240', color: '#fff', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '15px', cursor: 'pointer', width: '100%' }}>
                      Submit Enquiry →
                    </button>
                  </form>
                )}
              </div>

              <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#fff', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', marginBottom: '12px', width: '100%', boxSizing: 'border-box' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <a href="tel:+919963384555" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#1C2213', color: '#fff', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', width: '100%', boxSizing: 'border-box' }}>
                📞 Call +91 9963384555
              </a>
            </div>
          </div>

          {/* Related Courses */}
          <div style={{ marginTop: '60px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#1C2213', fontWeight: '700', marginBottom: '28px' }}>
              Related Courses
            </h2>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {relatedCourses.map(c => (
                <Link key={c.slug} href={`/courses/${c.slug}`} style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', border: '1px solid #eef0ec', textDecoration: 'none', display: 'block', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div style={{ height: '120px', overflow: 'hidden', position: 'relative' }}>
                    <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: c.bg, borderRadius: '8px', width: '36px', height: '36px', color: c.color, fontWeight: '800', fontSize: '11px', marginBottom: '10px' }}>
                      {c.icon}
                    </div>
                    <div style={{ fontWeight: '700', color: '#1C2213', fontSize: '15px', marginBottom: '4px' }}>{c.title}</div>
                    <div style={{ color: '#888', fontSize: '12px', marginBottom: '10px' }}>⏱ {c.duration}</div>
                    <div style={{ color: c.color, fontSize: '13px', fontWeight: '600' }}>View Course →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .course-hero-grid { grid-template-columns: 1fr !important; }
          .course-content-grid { grid-template-columns: 1fr !important; }
          .learn-grid { grid-template-columns: 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .related-grid { grid-template-columns: 1fr !important; }
          .meta-chips { grid-template-columns: 1fr 1fr !important; }
          .cta-row { flex-direction: column !important; }
          .cta-row a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </>
  )
}