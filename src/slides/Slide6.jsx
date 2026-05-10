import { motion } from 'framer-motion'
import { Users, ClipboardList, Code2, FileCheck2, Repeat, Eye, Compass } from 'lucide-react'
import Birds from '../components/Birds'

// Microsoft Teams logo (simplified inline SVG)
const TeamsIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="6" width="13" height="13" rx="2" fill="rgba(115,140,210,0.85)" />
    <text x="8.5" y="16" textAnchor="middle" fill="#fff"
      style={{ fontFamily: 'sans-serif', fontSize: '10px', fontWeight: 700 }}>T</text>
    <circle cx="18.5" cy="9" r="3.2" fill="rgba(115,140,210,0.85)" />
    <ellipse cx="18.5" cy="16" rx="3.5" ry="2.6" fill="rgba(115,140,210,0.85)" />
  </svg>
)

const CYCLE_STEPS = [
  {
    id: 'meeting',
    icon: Users,
    label: 'Weekly Meeting',
    subtitle: 'Teams call · Caroline + Kevin',
    color: 'rgba(232,145,110,0.95)',
    bg: 'rgba(212,112,74,0.18)',
    border: 'rgba(212,112,74,0.55)',
    angle: 270, // top
    isMain: true,
  },
  {
    id: 'plan',
    icon: ClipboardList,
    label: 'Write the Plan',
    subtitle: 'Map columns, note quirks',
    color: 'rgba(143,184,217,0.85)',
    bg: 'rgba(22,61,106,0.45)',
    border: 'rgba(143,184,217,0.35)',
    angle: 0, // right
  },
  {
    id: 'code',
    icon: Code2,
    label: 'Build & Run',
    subtitle: '7-step Python pipeline',
    color: 'rgba(143,184,217,0.85)',
    bg: 'rgba(22,61,106,0.45)',
    border: 'rgba(143,184,217,0.35)',
    angle: 90, // bottom
  },
  {
    id: 'output',
    icon: FileCheck2,
    label: 'Clean Output',
    subtitle: 'Bring to next meeting',
    color: 'rgba(130,225,180,0.95)',
    bg: 'rgba(70,170,120,0.15)',
    border: 'rgba(100,210,165,0.5)',
    angle: 180, // left
  },
]

const RADIUS = 135
const CENTER = 200

function CycleNode({ step }) {
  const Icon = step.icon
  const angleRad = (step.angle * Math.PI) / 180
  const x = CENTER + RADIUS * Math.cos(angleRad)
  const y = CENTER + RADIUS * Math.sin(angleRad)
  const size = step.isMain ? 125 : 105

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 + (step.angle / 90) * 0.15, type: 'spring' }}
      style={{
        position: 'absolute',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        background: step.bg,
        border: `${step.isMain ? 1.5 : 1}px solid ${step.border}`,
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        padding: '6px',
        boxShadow: step.isMain ? `0 0 30px ${step.border}` : 'none',
        zIndex: 10,
      }}
    >
      <Icon size={step.isMain ? 22 : 19} color={step.color} />
      <div style={{
        fontFamily: '"Playfair Display"',
        fontSize: step.isMain ? '14px' : '12.5px',
        fontWeight: 600,
        color: '#F4EFE4',
        marginTop: '4px',
        lineHeight: 1.15,
      }}>
        {step.label}
      </div>
      <div style={{
        fontFamily: '"DM Sans"',
        fontSize: '10px',
        color: 'rgba(200,223,240,0.88)',
        marginTop: '3px',
        lineHeight: 1.25,
        padding: '0 6px',
      }}>
        {step.subtitle}
      </div>
    </motion.div>
  )
}

export default function Slide6() {
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
      padding: '50px 80px 90px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px', zIndex: 10 }}>
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
            marginBottom: '12px',
            fontWeight: 500,
          }}
        >
          The Workflow
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
          A weekly cycle <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>of meet, plan, build, repeat</em>
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
          Every file was different. Every week we reviewed the last one and planned the next.
        </motion.p>
      </div>

      {/* Main content: cycle in middle, meeting card below */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        zIndex: 10,
        width: '100%',
      }}>
        {/* Cycle diagram (centered horizontally) */}
        <div style={{
          position: 'relative',
          width: '400px',
          height: '400px',
          flexShrink: 0,
        }}>
          {/* Background circle */}
          <svg viewBox="0 0 400 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <marker id="cycle-arrow" viewBox="0 0 10 10" refX="6" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(217,188,130,0.65)" />
              </marker>
            </defs>
            {/* Outer dashed orbit ring */}
            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none"
              stroke="rgba(217,188,130,0.18)" strokeWidth="1" strokeDasharray="3 4" />

            {/* 4 directional arrows on the orbit indicating the flow */}
            {[0, 90, 180, 270].map(angle => {
              const startA = ((angle - 35) * Math.PI) / 180
              const endA = ((angle + 35) * Math.PI) / 180
              const x1 = CENTER + RADIUS * Math.cos(startA)
              const y1 = CENTER + RADIUS * Math.sin(startA)
              const x2 = CENTER + RADIUS * Math.cos(endA)
              const y2 = CENTER + RADIUS * Math.sin(endA)
              return (
                <motion.path
                  key={angle}
                  d={`M ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 0 1 ${x2} ${y2}`}
                  fill="none"
                  stroke="rgba(217,188,130,0.45)"
                  strokeWidth="1.4"
                  markerEnd="url(#cycle-arrow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.2 + angle / 360 * 0.3 }}
                />
              )
            })}

            {/* Inner repeat circle — sized to comfortably hold the icon + label */}
            <circle cx={CENTER} cy={CENTER} r="44" fill="rgba(217,188,130,0.1)"
              stroke="rgba(217,188,130,0.4)" strokeWidth="1.2" strokeDasharray="2.5 2.5" />
          </svg>

          {/* Center "Repeat" indicator */}
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              zIndex: 5,
            }}
          >
            <Repeat size={22} color="rgba(217,188,130,1)" />
            <span style={{
              fontFamily: '"DM Sans"',
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(217,188,130,0.95)',
              fontWeight: 600,
            }}>
              every week
            </span>
          </motion.div>

          {/* Cycle nodes */}
          {CYCLE_STEPS.map(step => <CycleNode key={step.id} step={step} />)}
        </div>

        {/* BELOW: Meeting two-part structure */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '1100px' }}>
          {/* Meeting card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              background: 'rgba(212,112,74,0.12)',
              border: '1.5px solid rgba(212,112,74,0.5)',
              borderRadius: '16px',
              padding: '26px 30px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '20px',
            }}>
              <TeamsIcon size={26} />
              <span style={{
                fontFamily: '"Playfair Display"',
                fontSize: '23px',
                fontWeight: 600,
                color: '#F4EFE4',
              }}>
                Inside the weekly meeting
              </span>
              <span style={{
                marginLeft: 'auto',
                fontFamily: '"DM Sans"',
                fontSize: '12px',
                color: 'rgba(217,188,130,0.85)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                Two parts
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {[
                {
                  icon: Eye,
                  num: 'Part 1',
                  title: 'Review last week',
                  text: 'Walk through the clean output from the previous file. Catch anything that needs adjusting, like a wrong column kept, a date format issue, or a missing edge case.',
                },
                {
                  icon: Compass,
                  num: 'Part 2',
                  title: 'Plan the next file',
                  text: 'Open the next Excel file together. Identify which columns matter, what to remove, and what is unique about this year or source.',
                },
              ].map((part, i) => {
                const Icon = part.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{
                      flexShrink: 0,
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(212,112,74,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon size={19} color="rgba(232,145,110,1)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '10px',
                        marginBottom: '5px',
                      }}>
                        <span style={{
                          fontFamily: '"JetBrains Mono"',
                          fontSize: '12px',
                          color: 'rgba(232,145,110,1)',
                          letterSpacing: '0.06em',
                          fontWeight: 600,
                        }}>
                          {part.num}
                        </span>
                        <span style={{
                          fontFamily: '"Playfair Display"',
                          fontSize: '19px',
                          fontWeight: 600,
                          color: '#F4EFE4',
                        }}>
                          {part.title}
                        </span>
                      </div>
                      <p style={{
                        fontFamily: '"DM Sans"',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'rgba(200,223,240,0.92)',
                        lineHeight: 1.55,
                      }}>
                        {part.text}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
