import { motion } from 'framer-motion'
import { Layers, ClipboardCheck, BarChart3 } from 'lucide-react'
import Birds from '../components/Birds'

const GOALS = [
  {
    icon: Layers,
    n: '01',
    title: 'Bring the sources together',
    text: 'Pull Piping Plover observations out of four different survey datasets.',
  },
  {
    icon: ClipboardCheck,
    n: '02',
    title: 'Validate and log every removal',
    text: 'Check every observation; if a row is removed, write down why.',
  },
  {
    icon: BarChart3,
    n: '03',
    title: 'Ready for analysis',
    text: 'Produce one clean, standardized dataset that can be loaded straight into ArcGIS.',
  },
]

export default function SlideObjectives() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #061525 0%, #0B2340 50%, #0E1E3A 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '64px 80px 110px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px', zIndex: 10, maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: '14px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(232,145,110,0.95)',
            marginBottom: '14px',
            fontWeight: 500,
          }}
        >
          Project Objectives
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: '"Playfair Display"',
            fontSize: 'clamp(38px, 4vw, 54px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.15,
          }}
        >
          Four messy sources, <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>one clean dataset.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: 'clamp(17px, 1.5vw, 21px)',
            color: 'rgba(200,223,240,0.85)',
            marginTop: '14px',
            maxWidth: '1000px',
            margin: '14px auto 0',
            lineHeight: 1.5,
          }}
        >
          The internship had one main goal, broken into three pieces of work.
        </motion.p>
      </div>

      {/* 3 goal cards in a row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '28px',
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10,
      }}>
        {GOALS.map((g, i) => {
          const Icon = g.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.18, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: 'rgba(11,35,64,0.55)',
                border: '1.5px solid rgba(143,184,217,0.28)',
                borderRadius: '16px',
                padding: '30px 28px',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '270px',
              }}
            >
              {/* Soft glow corner */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '170px',
                height: '170px',
                background: 'radial-gradient(circle, rgba(212,112,74,0.10) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Step number + icon */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
              }}>
                <span style={{
                  fontFamily: '"JetBrains Mono"',
                  fontSize: '14px',
                  letterSpacing: '0.16em',
                  color: 'rgba(232,145,110,0.95)',
                  fontWeight: 600,
                }}>
                  {g.n}
                </span>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(212,112,74,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={24} color="rgba(232,145,110,1)" />
                </div>
              </div>

              {/* Title */}
              <div style={{
                fontFamily: '"Playfair Display"',
                fontSize: 'clamp(22px, 1.9vw, 27px)',
                fontWeight: 600,
                color: '#F4EFE4',
                lineHeight: 1.2,
                marginBottom: '14px',
              }}>
                {g.title}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: '"DM Sans"',
                fontSize: 'clamp(15px, 1.25vw, 17px)',
                color: 'rgba(200,223,240,0.85)',
                lineHeight: 1.55,
                flex: 1,
              }}>
                {g.text}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
