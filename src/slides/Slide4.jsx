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
      padding: '50px 60px 80px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(212,112,74,0.7)',
            marginBottom: '10px',
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
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.2,
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
            fontSize: '15px',
            color: 'rgba(200,223,240,0.7)',
            marginTop: '8px',
          }}
        >
          Three of the four sources are fully cleaned. The Winter Bird Survey is the long one and is still in progress.
        </motion.p>
      </div>

      {/* Main funnel: sources on left, master file on right */}
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        display: 'grid',
        gridTemplateColumns: '1fr 220px 1fr',
        alignItems: 'center',
        gap: '20px',
        zIndex: 10,
      }}>
        {/* LEFT: 4 source pills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
                  border: `1px solid ${c.border}`,
                  borderRadius: '12px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: c.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} color={c.text} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: '"Playfair Display"',
                    fontSize: 'clamp(16px, 1.5vw, 19px)',
                    fontWeight: 600,
                    color: '#F4EFE4',
                    marginBottom: '3px',
                    lineHeight: 1.2,
                  }}>
                    {src.name}
                  </div>
                  <div style={{
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '12.5px',
                    color: 'rgba(200,223,240,0.8)',
                  }}>
                    {src.count}
                  </div>
                </div>
                {src.status === 'done' ? (
                  <CheckCircle2 size={20} color={c.text} />
                ) : (
                  <div style={{
                    width: '12px',
                    height: '12px',
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
              fontSize: '14px',
              color: 'rgba(217,188,130,0.75)',
              background: 'rgba(11,35,64,0.92)',
              padding: '5px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(217,188,130,0.35)',
              whiteSpace: 'nowrap',
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
            border: '1.5px solid rgba(217,188,130,0.55)',
            borderRadius: '16px',
            padding: '24px 26px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 5,
            minWidth: '240px',
          }}>
            {/* File header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(217,188,130,0.25)',
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(217,188,130,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <FileSpreadsheet size={20} color="rgba(217,188,130,0.95)" />
              </div>
              <div>
                <div style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: '19px',
                  fontWeight: 600,
                  color: '#F4EFE4',
                  lineHeight: 1.1,
                }}>
                  Master Dataset
                </div>
                <div style={{
                  fontFamily: '"JetBrains Mono"',
                  fontSize: '11.5px',
                  color: 'rgba(217,188,130,0.85)',
                  marginTop: '3px',
                }}>
                  pipl_master.xlsx
                </div>
              </div>
            </div>

            {/* Sheet rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                    gap: '8px',
                    padding: '6px 11px',
                    background: 'rgba(11,35,64,0.4)',
                    borderRadius: '5px',
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '11.5px',
                  }}
                >
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'rgba(100,210,165,0.95)',
                  }} />
                  <span style={{ color: 'rgba(217,188,130,1)' }}>{row.label}</span>
                  <span style={{ color: 'rgba(200,223,240,0.6)', fontSize: '10.5px', marginLeft: 'auto' }}>{row.detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              style={{
                marginTop: '14px',
                padding: '9px 13px',
                background: 'rgba(100,210,165,0.14)',
                border: '1px solid rgba(100,210,165,0.4)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: '"DM Sans"',
                fontSize: '12.5px',
                color: 'rgba(150,235,195,1)',
              }}>
              <div style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'rgba(130,225,180,0.95)',
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
              marginTop: '18px',
              textAlign: 'center',
              fontFamily: '"Playfair Display"',
              fontStyle: 'italic',
              fontSize: '15px',
              color: 'rgba(217,188,130,0.85)',
              maxWidth: '260px',
              lineHeight: 1.5,
            }}
          >
            One unified dataset. Every row traces back to its source.
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
