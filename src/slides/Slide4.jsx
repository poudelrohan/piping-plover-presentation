import { motion } from 'framer-motion'
import { Globe, Map, Layers, Tag, CheckCircle2, FileSpreadsheet, Sparkles } from 'lucide-react'
import Birds from '../components/Birds'

const SOURCES = [
  { id: 'ebird', name: 'eBird', icon: Globe, status: 'done', count: '25,392 rows' },
  { id: 'nonbreeding', name: 'Non-breeding Survey', icon: Map, status: 'done', count: '5,937 rows' },
  { id: 'winter', name: 'Winter Bird Survey', icon: Layers, status: 'progress', count: 'in progress · 2013–2024' },
  { id: 'banded', name: 'Banded Bird Resights', icon: Tag, status: 'done', count: '192 rows' },
]

const COLORS = {
  done: {
    bg: 'rgba(70,170,120,0.15)',
    border: 'rgba(100,210,165,0.5)',
    text: 'rgba(130,225,180,0.95)',
    iconBg: 'rgba(100,210,165,0.18)',
    arrow: 'rgba(100,210,165,0.55)',
  },
  progress: {
    bg: 'rgba(212,112,74,0.15)',
    border: 'rgba(212,112,74,0.55)',
    text: 'rgba(232,145,110,0.95)',
    iconBg: 'rgba(212,112,74,0.18)',
    arrow: 'rgba(212,112,74,0.6)',
  },
}

export default function Slide4() {
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
      padding: '70px 80px 110px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '52px', zIndex: 10 }}>
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
          Progress
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: '"Playfair Display"',
            fontSize: 'clamp(40px, 4.2vw, 56px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.15,
          }}
        >
          From four sources <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>to one clean dataset</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: 'clamp(17px, 1.5vw, 20px)',
            color: 'rgba(200,223,240,0.85)',
            marginTop: '12px',
            maxWidth: '900px',
            margin: '12px auto 0',
          }}
        >
          Three of the four sources are fully cleaned. The Winter Bird Survey is the long one and is still in progress.
        </motion.p>
      </div>

      {/* Main funnel: sources on left, master file on right */}
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '1500px',
        display: 'grid',
        gridTemplateColumns: '1fr 280px 1fr',
        alignItems: 'center',
        gap: '30px',
        zIndex: 10,
      }}>
        {/* LEFT: 4 source pills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {SOURCES.map((src, i) => {
            const Icon = src.icon
            const c = COLORS[src.status]
            return (
              <motion.div
                key={src.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.12 }}
                style={{
                  background: c.bg,
                  border: `1.5px solid ${c.border}`,
                  borderRadius: '14px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: c.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={24} color={c.text} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: '"Playfair Display"',
                    fontSize: 'clamp(20px, 1.7vw, 24px)',
                    fontWeight: 600,
                    color: '#F4EFE4',
                    marginBottom: '5px',
                    lineHeight: 1.2,
                  }}>
                    {src.name}
                  </div>
                  <div style={{
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '15px',
                    color: 'rgba(200,223,240,0.9)',
                  }}>
                    {src.count}
                  </div>
                </div>
                {src.status === 'done' ? (
                  <CheckCircle2 size={26} color={c.text} />
                ) : (
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: c.text,
                    animation: 'pulse-dot 1.8s ease-in-out infinite',
                    flexShrink: 0,
                  }} />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* MIDDLE: convergence arrows */}
        <div style={{ position: 'relative', height: '100%', minHeight: '320px' }}>
          <svg
            viewBox="0 0 220 320"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            <defs>
              <marker id="merge-arrow-done" viewBox="0 0 10 10" refX="9" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(100,210,165,0.7)" />
              </marker>
              <marker id="merge-arrow-progress" viewBox="0 0 10 10" refX="9" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(212,112,74,0.7)" />
              </marker>
            </defs>

            {/* 4 arrows from left source positions to center master file.
                Source pills are stacked vertically with gap of 14px; their centers are
                roughly at y = 35, 110, 200, 285 in viewBox coordinates.
                Master file's icon center sits at viewBox right edge ~y = 160. */}
            {[
              { y: 35, color: 'done' },
              { y: 110, color: 'done' },
              { y: 200, color: 'progress' },
              { y: 285, color: 'done' },
            ].map((line, i) => (
              <motion.path
                key={i}
                d={`M 0 ${line.y} C 110 ${line.y}, 110 160, 218 160`}
                stroke={line.color === 'done' ? 'rgba(100,210,165,0.65)' : 'rgba(212,112,74,0.75)'}
                strokeWidth="1.6"
                fill="none"
                markerEnd={`url(#merge-arrow-${line.color})`}
                strokeDasharray={line.color === 'progress' ? '5 4' : '0'}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.7 + i * 0.15 }}
              />
            ))}
          </svg>

          {/* Center label "merge" — true center horizontally and vertically */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: '"Playfair Display"',
              fontStyle: 'italic',
              fontSize: '18px',
              color: 'rgba(217,188,130,0.95)',
              background: 'rgba(11,35,64,0.95)',
              padding: '7px 18px',
              borderRadius: '24px',
              border: '1.5px solid rgba(217,188,130,0.5)',
              whiteSpace: 'nowrap',
              fontWeight: 500,
            }}
          >
            merge
          </motion.div>
        </div>

        {/* RIGHT: Master Excel file */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.5, type: 'spring' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Glow behind */}
          <div style={{
            position: 'absolute',
            inset: '-30px',
            background: 'radial-gradient(circle, rgba(217,188,130,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Sparkle accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
            style={{
              position: 'absolute',
              top: '-18px',
              right: '-12px',
              color: 'rgba(217,188,130,0.85)',
            }}
          >
            <Sparkles size={18} />
          </motion.div>

          {/* The master file card */}
          <div style={{
            background: 'linear-gradient(160deg, rgba(217,188,130,0.18) 0%, rgba(217,188,130,0.06) 100%)',
            border: '2px solid rgba(217,188,130,0.6)',
            borderRadius: '18px',
            padding: '30px 32px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 5,
            minWidth: '320px',
          }}>
            {/* File header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '18px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(217,188,130,0.3)',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                background: 'rgba(217,188,130,0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <FileSpreadsheet size={26} color="rgba(217,188,130,1)" />
              </div>
              <div>
                <div style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#F4EFE4',
                  lineHeight: 1.1,
                }}>
                  Master Dataset
                </div>
                <div style={{
                  fontFamily: '"JetBrains Mono"',
                  fontSize: '14px',
                  color: 'rgba(217,188,130,1)',
                  marginTop: '4px',
                }}>
                  pipl_master.xlsx
                </div>
              </div>
            </div>

            {/* Sheet rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Clean_Data', detail: 'all observations' },
                { label: 'Removed_Rows', detail: 'with reasons' },
                { label: 'Summary_Report', detail: 'statistics' },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '9px 14px',
                    background: 'rgba(11,35,64,0.5)',
                    borderRadius: '7px',
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '14px',
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'rgba(100,210,165,0.95)',
                  }} />
                  <span style={{ color: 'rgba(217,188,130,1)' }}>{row.label}</span>
                  <span style={{ color: 'rgba(200,223,240,0.7)', fontSize: '13px', marginLeft: 'auto' }}>{row.detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              style={{
                marginTop: '18px',
                padding: '12px 16px',
                background: 'rgba(100,210,165,0.16)',
                border: '1.5px solid rgba(100,210,165,0.45)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: '"DM Sans"',
                fontSize: '15px',
                color: 'rgba(160,240,200,1)',
                fontWeight: 500,
              }}>
              <div style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: 'rgba(130,225,180,1)',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              31,521+ clean rows so far
            </motion.div>
          </div>

          {/* Caption below */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            style={{
              marginTop: '24px',
              textAlign: 'center',
              fontFamily: '"Playfair Display"',
              fontStyle: 'italic',
              fontSize: '19px',
              color: 'rgba(217,188,130,0.95)',
              maxWidth: '340px',
              lineHeight: 1.4,
            }}
          >
            One unified dataset. Every row traces back to its source.
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
