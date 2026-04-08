'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Choose Your Course',
    desc: 'Browse our 7 industry-ready courses and pick the one that matches your career goals. Not sure? Talk to our counsellors for free.',
    color: '#5AB240',
    bg: 'rgba(90,178,64,0.1)',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  },
  {
    number: '02',
    title: 'Enroll & Join Batch',
    desc: 'Fill the enquiry form or WhatsApp us. We will confirm your seat, share batch schedule and get you started within days.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.1)',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    number: '03',
    title: 'Learn & Build Projects',
    desc: 'Attend live classes, work on real projects and build a strong portfolio. Our trainers guide you every step of the way.',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.1)',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  },
  {
    number: '04',
    title: 'Get Placed',
    desc: 'Our placement team helps you with resume, mock interviews and connects you directly with hiring companies.',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.1)',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
  },
]

export default function HowItWorks() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#5AB240', '#3B82F6', '#F97316', '#A855F7']
    const nodeCount = 4

    const draw = (progress) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const padding = canvas.width * 0.1
      const totalWidth = canvas.width - padding * 2
      const nodeSpacing = totalWidth / (nodeCount - 1)
      const centerY = canvas.height / 2
      const nodeRadius = Math.min(28, canvas.width * 0.04)

      const nodePositions = Array.from({ length: nodeCount }, (_, i) => ({
        x: padding + i * nodeSpacing,
        y: centerY,
      }))

      for (let i = 0; i < nodeCount - 1; i++) {
        const startX = nodePositions[i].x
        const endX = nodePositions[i + 1].x
        const segmentProgress = Math.max(0, Math.min(1, (progress * (nodeCount - 1)) - i))

        ctx.beginPath()
        ctx.moveTo(startX, centerY)
        ctx.lineTo(endX, centerY)
        ctx.strokeStyle = 'rgba(255,255,255,0.1)'
        ctx.lineWidth = 3
        ctx.stroke()

        if (segmentProgress > 0) {
          const gradient = ctx.createLinearGradient(startX, 0, endX, 0)
          gradient.addColorStop(0, colors[i])
          gradient.addColorStop(1, colors[i + 1])
          ctx.beginPath()
          ctx.moveTo(startX, centerY)
          ctx.lineTo(startX + (endX - startX) * segmentProgress, centerY)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 3
          ctx.stroke()

          if (segmentProgress < 1) {
            const dotX = startX + (endX - startX) * segmentProgress
            ctx.beginPath()
            ctx.arc(dotX, centerY, 6, 0, Math.PI * 2)
            ctx.fillStyle = colors[i + 1]
            ctx.fill()
            ctx.beginPath()
            ctx.arc(dotX, centerY, 12, 0, Math.PI * 2)
            ctx.fillStyle = colors[i + 1] + '30'
            ctx.fill()
          }
        }
      }

      nodePositions.forEach((pos, i) => {
        const nodeProgress = Math.min(1, progress * nodeCount - i)
        if (nodeProgress <= 0) return
        const scale = Math.min(1, nodeProgress * 2)
        const alpha = Math.min(1, nodeProgress * 2)

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, nodeRadius * 1.8 * scale, 0, Math.PI * 2)
        ctx.fillStyle = colors[i] + Math.round(alpha * 25).toString(16).padStart(2, '0')
        ctx.fill()

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, nodeRadius * scale, 0, Math.PI * 2)
        ctx.fillStyle = '#0f1a0d'
        ctx.fill()

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, nodeRadius * scale, 0, Math.PI * 2)
        ctx.strokeStyle = colors[i]
        ctx.lineWidth = 2.5
        ctx.stroke()

        ctx.fillStyle = colors[i]
        ctx.font = `bold ${Math.round(14 * scale)}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(`0${i + 1}`, pos.x, pos.y)

        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y + nodeRadius * scale)
        ctx.lineTo(pos.x, pos.y + nodeRadius * scale + 40 * scale)
        ctx.strokeStyle = colors[i] + '60'
        ctx.lineWidth = 1.5
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(pos.x, pos.y + nodeRadius * scale + 40 * scale, 3 * scale, 0, Math.PI * 2)
        ctx.fillStyle = colors[i]
        ctx.fill()
      })

      const time = Date.now() / 1000
      for (let p = 0; p < 8; p++) {
        const t = ((time * 0.3 + p / 8) % 1) * (nodeCount - 1)
        const segIndex = Math.floor(t)
        if (segIndex >= nodeCount - 1) continue
        const segT = t - segIndex
        const x = nodePositions[segIndex].x + (nodePositions[segIndex + 1].x - nodePositions[segIndex].x) * segT
        const y = centerY + Math.sin(time * 2 + p) * 12
        const alpha = 0.3 + Math.sin(time * 3 + p) * 0.2
        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = colors[segIndex] + Math.round(alpha * 255).toString(16).padStart(2, '0')
        ctx.fill()
      }
    }

    const startTime = Date.now()
    const duration = 2500

    const animate = () => {
      const elapsed = Date.now() - startTime
      const rawProgress = Math.min(elapsed / duration, 1)
      progressRef.current = rawProgress < 1 ? 1 - Math.pow(1 - rawProgress, 3) : 1
      draw(progressRef.current)
      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section style={{ background: '#0f1a0d', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(90,178,64,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(90,178,64,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-200px', left: '20%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,178,64,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-200px', right: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(90,178,64,0.12)', border: '1px solid rgba(90,178,64,0.35)', color: '#5AB240', padding: '6px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            How It Works
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 46px)', color: '#ffffff', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
            Your Journey to a{' '}
            <span style={{ color: '#5AB240' }}>New Career</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            4 simple steps to go from where you are today to where you want to be.
          </p>
        </div>

        {/* Animated Canvas */}
        <canvas ref={canvasRef} style={{ width: '100%', height: '160px', display: 'block', marginBottom: '32px' }} />

        {/* Step Cards with Images */}
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '8px' }}>
          {steps.map((step, i) => (
            <div key={i}
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${step.color}30`, borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = step.color + '70'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = step.color + '30'; e.currentTarget.style.transform = 'translateY(0)' }}>

              {/* Card Image */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(15,26,13,0.9) 100%)' }} />

                {/* Step number badge on image */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: step.color, borderRadius: '8px', width: '36px', height: '36px', color: '#fff', fontWeight: '900', fontSize: '14px' }}>
                  {i + 1}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '10px', lineHeight: '1.3' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: '1.7' }}>
                  {step.desc}
                </p>
                <div style={{ marginTop: '16px', height: '2px', width: '32px', background: step.color, borderRadius: '2px' }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <a href="https://wa.me/919963384555" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#5AB240', color: '#fff', padding: '15px 36px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>
            💬 Start Your Journey Today
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}