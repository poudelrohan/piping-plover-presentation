import { motion } from 'framer-motion'
import { Globe, Map, Layers, Tag, FileSpreadsheet } from 'lucide-react'
import Birds from '../components/Birds'

// 4 sources, structure for the graph
const SOURCES = [
  {
    id: 'ebird',
    name: 'eBird',
    type: 'Citizen Science',
    icon: Globe,
    color: 'rgba(143,184,217,0.85)',
    bg: 'rgba(42,96,153,0.35)',
    border: 'rgba(143,184,217,0.4)',
    files: 1,
    sheets: 1,
    structure: 'simple', // single child
    childLabel: '1 file · 1 sheet',
  },
  {
    id: 'nonbreeding',
    name: 'Non-breeding Survey',
    type: 'Field Survey',
    icon: Map,
    color: 'rgba(143,184,217,0.85)',
    bg: 'rgba(42,96,153,0.3)',
    border: 'rgba(143,184,217,0.35)',
    files: 1,
    sheets: 1,
    structure: 'simple',
    childLabel: '1 file · 2011 – 2023',
  },
  {
    id: 'winter',
    name: 'Winter Bird Survey',
    type: 'Multi-species Count',
    icon: Layers,
    color: 'rgba(232,145,110,0.95)',
    bg: 'rgba(212,112,74,0.18)',
    border: 'rgba(212,112,74,0.55)',
    files: 12,
    sheets: 3,
    structure: 'complex',
    years: ['‘13', '‘14', '‘15', '‘16', '‘17', '‘18', '‘19', '‘20', '‘21', '‘22', '‘23', '‘24'],
    sheetLabels: ['DS1', 'DS2', 'DS3'],
  },
  {
    id: 'banded',
    name: 'Banded Bird Resights',
    type: 'Individual Tracking',
    icon: Tag,
    color: 'rgba(143,184,217,0.85)',
    bg: 'rgba(42,96,153,0.3)',
    border: 'rgba(143,184,217,0.35)',
    files: 1,
    sheets: 1,
    structure: 'simple',
    childLabel: '1 file · 1 sheet',
  },
]

// Curved SVG path between two points
const curve = (x1, y1, x2, y2) => {
  const cy = (y1 + y2) / 2
  return `M ${x1} ${y1} C ${x1} ${cy}, ${x2} ${cy}, ${x2} ${y2}`
}

export default function Slide3() {
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
      justifyContent: 'center',
      padding: '60px 80px 100px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
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
          The Data
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: '"Playfair Display"',
            fontSize: 'clamp(40px, 4.2vw, 56px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.15,
          }}
        >
          4 Sources, <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>Different Shapes</em>
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
          }}
        >
          Most are single Excel files. One source spans 12 years, with 3 sheets in each year's file.
        </motion.p>
      </div>

      {/* Graph container */}
      <div style={{
        width: '100%',
        maxWidth: '1500px',
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Root node */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <div style={{
            background: 'rgba(217,188,130,0.15)',
            border: '1.5px solid rgba(217,188,130,0.5)',
            borderRadius: '32px',
            padding: '13px 30px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: '"DM Sans"',
            fontSize: '16px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(217,188,130,1)',
            fontWeight: 500,
          }}>
            <FileSpreadsheet size={20} />
            Raw Survey Data
          </div>
        </motion.div>

        {/* SVG connectors from root → 4 sources. Use 8-unit grid:
            each source card is 2 units wide centered on x = 1, 3, 5, 7 (out of 8).
            Root pill is centered at x = 4. */}
        <svg
          style={{
            position: 'absolute',
            top: '40px',
            left: 0,
            width: '100%',
            height: '70px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          preserveAspectRatio="none"
          viewBox="0 0 800 70"
        >
          {[100, 300, 500, 700].map((x, i) => (
            <motion.path
              key={i}
              d={curve(400, 0, x, 70)}
              stroke="rgba(217,188,130,0.45)"
              strokeWidth="1.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 + i * 0.05 }}
            />
          ))}
        </svg>

        {/* Spacer to account for root → sources connector */}
        <div style={{ height: '70px' }} />

        {/* 4 source nodes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          position: 'relative',
          zIndex: 5,
        }}>
          {SOURCES.map((src, i) => {
            const Icon = src.icon
            return (
              <motion.div
                key={src.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.7 + i * 0.1 }}
                style={{
                  background: src.bg,
                  border: `1.5px solid ${src.border}`,
                  borderRadius: '16px',
                  padding: '28px 22px 26px',
                  backdropFilter: 'blur(8px)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  background: src.bg.replace(/[\d.]+\)/, '0.2)'),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px',
                }}>
                  <Icon size={32} color={src.color} />
                </div>
                <div style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: 'clamp(22px, 1.9vw, 30px)',
                  fontWeight: 600,
                  color: '#F4EFE4',
                  lineHeight: 1.2,
                }}>
                  {src.name}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Connector area between sources and structure level */}
        <div style={{ position: 'relative', height: '60px' }}>
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
            preserveAspectRatio="none"
            viewBox="0 0 800 60"
          >
            {/* Lines from each simple source down to its single child label */}
            {[100, 300, 700].map((x, i) => (
              <motion.line
                key={i}
                x1={x}
                y1={0}
                x2={x}
                y2={60}
                stroke="rgba(143,184,217,0.4)"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 + i * 0.05 }}
              />
            ))}
            {/* DB3 (winter) — fan out to 12 years.
              Source cards centered at viewBox x = 100, 300, 500, 700.
              WBS is the 3rd source, centered at 500.
              Year chips below span ~140 units centered around 500. */}
            {Array.from({ length: 12 }).map((_, idx) => {
              // Year grid: 6 columns × 2 rows, centered around x=500
              const col = idx % 6
              const xEnd = 433 + col * 26
              return (
                <motion.path
                  key={idx}
                  d={curve(500, 0, xEnd, 60)}
                  stroke="rgba(212,112,74,0.45)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + idx * 0.03 }}
                />
              )
            })}
          </svg>
        </div>

        {/* Structure level: child nodes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '14px',
          position: 'relative',
          zIndex: 5,
        }}>
          {SOURCES.map((src, i) => {
            if (src.structure === 'simple') {
              return (
                <motion.div
                  key={src.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.15 + i * 0.05 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{
                    background: 'rgba(11,35,64,0.55)',
                    border: '1px solid rgba(143,184,217,0.3)',
                    borderRadius: '10px',
                    padding: '14px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '17px',
                    color: 'rgba(200,223,240,0.95)',
                  }}>
                    <FileSpreadsheet size={18} color="rgba(143,184,217,0.85)" />
                    {src.childLabel}
                  </div>
                </motion.div>
              )
            }
            // Complex: Winter Bird Survey — show year chips
            return (
              <motion.div
                key={src.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.15 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '6px',
                  width: '100%',
                  maxWidth: '340px',
                }}>
                  {src.years.map((yr, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 + idx * 0.04 }}
                      style={{
                        background: 'rgba(212,112,74,0.2)',
                        border: '1px solid rgba(212,112,74,0.55)',
                        borderRadius: '8px',
                        padding: '10px 0',
                        textAlign: 'center',
                        fontFamily: '"JetBrains Mono"',
                        fontSize: '17px',
                        color: 'rgba(245,180,150,1)',
                        fontWeight: 500,
                      }}
                    >
                      {yr}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  style={{
                    fontFamily: '"DM Sans"',
                    fontSize: '17px',
                    color: 'rgba(232,145,110,1)',
                    letterSpacing: '0.04em',
                    textAlign: 'center',
                    fontWeight: 500,
                  }}
                >
                  12 yearly files
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom annotation: WBS sheets per year */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div style={{
            background: 'rgba(212,112,74,0.12)',
            border: '1px dashed rgba(212,112,74,0.55)',
            borderRadius: '12px',
            padding: '16px 26px',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
          }}>
            <span style={{
              fontFamily: '"DM Sans"',
              fontSize: '19px',
              color: 'rgba(245,180,150,1)',
              letterSpacing: '0.01em',
              fontWeight: 500,
            }}>
              Each Winter Bird Survey file contains 3 internal sheets:
            </span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['DS1 · Flock data', 'DS2 · Observer summary', 'DS3 · Banded resights'].map((s, i) => (
                <span key={i} style={{
                  background: 'rgba(212,112,74,0.25)',
                  border: '1px solid rgba(212,112,74,0.55)',
                  borderRadius: '7px',
                  padding: '8px 14px',
                  fontFamily: '"JetBrains Mono"',
                  fontSize: '15px',
                  color: 'rgba(250,200,170,1)',
                  fontWeight: 500,
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Total count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{
            marginTop: '20px',
            textAlign: 'center',
            fontFamily: '"DM Sans"',
            fontSize: '20px',
            color: 'rgba(200,223,240,0.88)',
            letterSpacing: '0.01em',
            zIndex: 10,
          }}
        >
          Total: <strong style={{ color: 'rgba(217,188,130,1)', fontWeight: 600 }}>15 raw Excel files</strong> · <strong style={{ color: 'rgba(217,188,130,1)', fontWeight: 600 }}>~39 sheets</strong> · most exported from forms, the Winter Bird Survey is hand-entered
        </motion.div>
      </div>
    </div>
  )
}
