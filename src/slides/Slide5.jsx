import { motion } from 'framer-motion'
import {
  Filter, Hash, MapPin, ListChecks, Columns3, Copy, FileCheck2,
  Code2, Database, FileSpreadsheet, GitBranch
} from 'lucide-react'
import Birds from '../components/Birds'

// GitHub mark (custom SVG since lucide-react doesn't ship one)
const Github = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  </svg>
)

const STEPS = [
  {
    num: '1',
    name: 'Extract PIPL',
    why: 'Pull only Piping Plover rows from multi-species sheets',
    file: '0_extract_pipl.py',
    icon: Filter,
    variant: 'special',
  },
  {
    num: '2',
    name: 'Add IDs',
    why: 'Give every row a unique ID and tag where it came from',
    file: '1_add_ids.py',
    icon: Hash,
    variant: 'normal',
  },
  {
    num: '3',
    name: 'Validate Geography',
    why: 'Confirm every coordinate falls inside Florida',
    file: '2_validate_geography.py',
    icon: MapPin,
    variant: 'normal',
  },
  {
    num: '4',
    name: 'Required Fields',
    why: 'Drop rows missing a date or a location',
    file: '3_check_required_fields.py',
    icon: ListChecks,
    variant: 'normal',
  },
  {
    num: '5',
    name: 'Standardize Columns',
    why: 'Rename and reorder to one shared schema',
    file: '4_select_columns.py',
    icon: Columns3,
    variant: 'normal',
  },
  {
    num: '6',
    name: 'Remove Duplicates',
    why: 'Find duplicates and log which row each one matched',
    file: '5_remove_duplicates.py',
    icon: Copy,
    variant: 'normal',
  },
  {
    num: '7',
    name: 'Final Report',
    why: 'Output a 3-sheet Excel: Clean, Removed, Summary',
    file: '6_create_final_report.py',
    icon: FileCheck2,
    variant: 'final',
  },
]

const TECH = [
  {
    name: 'Python',
    icon: Code2,
    type: 'Language',
    desc: 'The programming language the entire pipeline is written in.',
  },
  {
    name: 'pandas',
    icon: Database,
    type: 'Python library',
    desc: 'Reads, filters, joins, and rewrites every row in a table.',
  },
  {
    name: 'openpyxl',
    icon: FileSpreadsheet,
    type: 'Python library',
    desc: 'Opens and writes the multi-sheet Excel files the surveys live in.',
  },
  {
    name: 'Git',
    icon: GitBranch,
    type: 'Version control',
    desc: 'Tracks every change to the pipeline so nothing is lost.',
  },
  {
    name: 'GitHub',
    icon: Github,
    type: 'Code & file hosting',
    desc: 'Hosts the repo and shares the cleaned files with the mentors.',
  },
]

const variantColors = {
  special: {
    bg: 'rgba(212,112,74,0.18)',
    border: 'rgba(212,112,74,0.6)',
    accent: 'rgba(232,145,110,1)',
    iconBg: 'rgba(212,112,74,0.25)',
    arrow: 'rgba(212,112,74,0.7)',
  },
  normal: {
    bg: 'rgba(22,61,106,0.55)',
    border: 'rgba(143,184,217,0.4)',
    accent: 'rgba(143,184,217,0.95)',
    iconBg: 'rgba(143,184,217,0.18)',
    arrow: 'rgba(143,184,217,0.7)',
  },
  final: {
    bg: 'rgba(70,170,120,0.18)',
    border: 'rgba(100,210,165,0.6)',
    accent: 'rgba(140,235,190,1)',
    iconBg: 'rgba(100,210,165,0.22)',
    arrow: 'rgba(100,210,165,0.7)',
  },
}

// Compact step node placed on the circle
function CircleStepNode({ step, position }) {
  const c = variantColors[step.variant]
  const Icon = step.icon

  // Outer wrapper handles centering (translate -50/-50). The motion.div inside
  // owns its own animated transform (scale) — keeping centering on the wrapper
  // prevents Framer Motion from overwriting the translate.
  return (
    <div style={{
      position: 'absolute',
      left: position.x,
      top: position.y,
      transform: 'translate(-50%, -50%)',
      zIndex: 5,
    }}>
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 + (parseInt(step.num) - 1) * 0.08, type: 'spring' }}
      style={{
        position: 'relative',
        width: '180px',
        height: '150px',
        background: c.bg,
        border: `1.5px solid ${c.border}`,
        borderRadius: '14px',
        padding: '14px 14px 12px',
        backdropFilter: 'blur(8px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {step.note && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(212,112,74,1)',
          borderRadius: '24px',
          padding: '3px 12px',
          fontFamily: '"DM Sans"',
          fontSize: '10px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#F4EFE4',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          zIndex: 6,
        }}>
          {step.note}
        </div>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
      }}>
        <span style={{
          fontFamily: '"JetBrains Mono"',
          fontSize: '13px',
          color: c.accent,
          fontWeight: 600,
        }}>
          .{step.num}
        </span>
        <div style={{
          width: '30px',
          height: '30px',
          borderRadius: '8px',
          background: c.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon size={16} color={c.accent} />
        </div>
      </div>

      <div style={{
        fontFamily: '"Playfair Display"',
        fontSize: '15.5px',
        fontWeight: 600,
        color: '#F4EFE4',
        lineHeight: 1.2,
        marginBottom: '5px',
      }}>
        {step.name}
      </div>

      <div style={{
        fontFamily: '"DM Sans"',
        fontSize: '11.5px',
        color: 'rgba(200,223,240,0.85)',
        lineHeight: 1.35,
      }}>
        {step.why}
      </div>
    </motion.div>
    </div>
  )
}

// Steps arranged in a => arrow shape with consistent spacing:
//  - Cards are 180px wide, placed 240px apart center-to-center (60px gap)
//  - Top row (1,2,3) and bottom row (5,6,7) share the SAME x-coordinates (vertical mirror)
//  - Step 4 is the TIP, on the right at the vertical midpoint
const ZIGZAG_POSITIONS = [
  { x: 130, y: 200 },  // Step 1: top-left
  { x: 370, y: 200 },  // Step 2
  { x: 610, y: 200 },  // Step 3: end of top row
  { x: 860, y: 380 },  // Step 4: TIP (diagonal SE of step 3)
  { x: 610, y: 560 },  // Step 5: directly below step 3 (diagonal SW from tip)
  { x: 370, y: 560 },  // Step 6: left of step 5
  { x: 130, y: 560 },  // Step 7: left of step 6 (bottom-left)
]

export default function Slide5() {
  const positions = ZIGZAG_POSITIONS

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(155deg, #061525 0%, #0B2340 55%, #0D1E38 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px 60px 100px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px', zIndex: 10 }}>
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
          The Process
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: '"Playfair Display"',
            fontSize: 'clamp(36px, 3.8vw, 50px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.15,
          }}
        >
          What Data Cleaning <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>Looks Like</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: 'clamp(15px, 1.3vw, 18px)',
            color: 'rgba(200,223,240,0.85)',
            marginTop: '10px',
            maxWidth: '900px',
            margin: '10px auto 0',
          }}
        >
          Doing this manually for every Excel file would take weeks. Seven chained steps, each one its own Python script.
        </motion.p>
      </div>

      {/* Two-column main area: tech stack on the LEFT, circle on the RIGHT */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        gap: '40px',
        width: '100%',
        maxWidth: '1500px',
        flex: 1,
        zIndex: 10,
        alignItems: 'center',
      }}>
        {/* LEFT: vertical tech stack */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div style={{
            fontFamily: '"DM Sans"',
            fontSize: '12px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(217,188,130,0.85)',
            fontWeight: 600,
            marginBottom: '6px',
            paddingLeft: '4px',
          }}>
            Built With
          </div>

          {TECH.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.08 }}
                style={{
                  background: 'rgba(11,35,64,0.55)',
                  border: '1.5px solid rgba(143,184,217,0.28)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '9px',
                  background: 'rgba(217,188,130,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} color="rgba(217,188,130,1)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                    marginBottom: '2px',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontFamily: '"JetBrains Mono"',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#F4EFE4',
                    }}>
                      {tech.name}
                    </span>
                    <span style={{
                      fontFamily: '"DM Sans"',
                      fontSize: '10px',
                      color: 'rgba(217,188,130,0.7)',
                      letterSpacing: '0.06em',
                    }}>
                      {tech.type}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans"',
                    fontSize: '11.5px',
                    color: 'rgba(200,223,240,0.78)',
                    lineHeight: 1.4,
                  }}>
                    {tech.desc}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* RIGHT: circle of 7 steps. Fixed aspect-ratio container so SVG and
            absolutely-positioned nodes share the exact same coordinate frame. */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1080px',
          aspectRatio: '1080 / 760',
          margin: '0 auto',
        }}>
          <svg
            viewBox="0 0 1080 760"
            preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            <defs>
              <marker id="step-arrow-blue" viewBox="0 0 10 10" refX="6" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(143,184,217,0.85)" />
              </marker>
              <marker id="step-arrow-coral" viewBox="0 0 10 10" refX="6" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(212,112,74,0.85)" />
              </marker>
              <marker id="step-arrow-green" viewBox="0 0 10 10" refX="6" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(100,210,165,0.85)" />
              </marker>
            </defs>

            {/* Straight-ish arrows from step i to step i+1.
                NO arrow from step 6 back to step 0 — the path stays open. */}
            {STEPS.map((step, i) => {
              if (i === STEPS.length - 1) return null
              const p1 = positions[i]
              const p2 = positions[i + 1]

              // Trim each end so the arrow stops at the edge of the node card
              const NODE_HALF_W = 95   // half card width (180px + small gap)
              const NODE_HALF_H = 80   // half card height (150px + small gap)
              const dx = p2.x - p1.x
              const dy = p2.y - p1.y
              const len = Math.hypot(dx, dy)
              const ux = dx / len
              const uy = dy / len
              // Approximate trim: pick the smaller of (half-w / |ux|, half-h / |uy|)
              const trim = Math.min(
                Math.abs(ux) > 0.001 ? NODE_HALF_W / Math.abs(ux) : Infinity,
                Math.abs(uy) > 0.001 ? NODE_HALF_H / Math.abs(uy) : Infinity
              )
              const sx = p1.x + ux * trim
              const sy = p1.y + uy * trim
              const ex = p2.x - ux * trim
              const ey = p2.y - uy * trim

              const fromVariant = step.variant
              const toVariant = STEPS[i + 1].variant
              const arrowMark =
                fromVariant === 'special' ? 'coral' :
                toVariant === 'final' ? 'green' :
                'blue'
              const strokeColor =
                fromVariant === 'special' ? 'rgba(212,112,74,0.75)' :
                toVariant === 'final' ? 'rgba(100,210,165,0.75)' :
                'rgba(143,184,217,0.7)'
              const dashArray = fromVariant === 'special' ? '5 4' : '0'

              return (
                <motion.line
                  key={i}
                  x1={sx}
                  y1={sy}
                  x2={ex}
                  y2={ey}
                  stroke={strokeColor}
                  strokeWidth="1.8"
                  markerEnd={`url(#step-arrow-${arrowMark})`}
                  strokeDasharray={dashArray}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 + i * 0.12 }}
                />
              )
            })}

            {/* START label near step 0 */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <rect
                x={positions[0].x - 36}
                y={positions[0].y - 110}
                width="72"
                height="24"
                rx="12"
                fill="rgba(217,188,130,0.14)"
                stroke="rgba(217,188,130,0.5)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text
                x={positions[0].x}
                y={positions[0].y - 93}
                textAnchor="middle"
                fill="rgba(217,188,130,1)"
                style={{ fontFamily: '"JetBrains Mono"', fontSize: '12px', letterSpacing: '0.16em', fontWeight: 600 }}
              >
                START
              </text>
            </motion.g>

            {/* END label below step 7 (the last node, now bottom-left), mirroring START which sits above step 1 */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <rect
                x={positions[STEPS.length - 1].x - 30}
                y={positions[STEPS.length - 1].y + 86}
                width="60"
                height="24"
                rx="12"
                fill="rgba(100,210,165,0.16)"
                stroke="rgba(100,210,165,0.55)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text
                x={positions[STEPS.length - 1].x}
                y={positions[STEPS.length - 1].y + 103}
                textAnchor="middle"
                fill="rgba(140,235,190,1)"
                style={{ fontFamily: '"JetBrains Mono"', fontSize: '12px', letterSpacing: '0.16em', fontWeight: 600 }}
              >
                END
              </text>
            </motion.g>
          </svg>

          {/* Step nodes positioned by percentage of the same 940x720 frame */}
          {STEPS.map((step, i) => {
            const p = positions[i]
            return (
              <CircleStepNode
                key={i}
                step={step}
                position={{
                  x: `${(p.x / 1080) * 100}%`,
                  y: `${(p.y / 760) * 100}%`,
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
