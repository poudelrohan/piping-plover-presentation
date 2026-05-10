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
    num: '0',
    name: 'Extract PIPL',
    why: 'Pull only Piping Plover rows out of the multi-species sheets',
    file: '0_extract_pipl.py',
    icon: Filter,
    variant: 'special', // DB3 only
    note: 'DB3 only',
  },
  {
    num: '1',
    name: 'Add IDs',
    why: 'Give every row a unique ID and tag where it came from',
    file: '1_add_ids.py',
    icon: Hash,
    variant: 'normal',
  },
  {
    num: '2',
    name: 'Validate Geography',
    why: 'Confirm every coordinate falls inside Florida',
    file: '2_validate_geography.py',
    icon: MapPin,
    variant: 'normal',
  },
  {
    num: '3',
    name: 'Required Fields',
    why: 'Drop rows missing a date or a location',
    file: '3_check_required_fields.py',
    icon: ListChecks,
    variant: 'normal',
  },
  {
    num: '4',
    name: 'Standardize Columns',
    why: 'Rename and reorder columns to one shared schema',
    file: '4_select_columns.py',
    icon: Columns3,
    variant: 'normal',
  },
  {
    num: '5',
    name: 'Remove Duplicates',
    why: 'Find duplicates and log which row each one matched',
    file: '5_remove_duplicates.py',
    icon: Copy,
    variant: 'normal',
  },
  {
    num: '6',
    name: 'Final Report',
    why: 'Output a 3-sheet Excel: Clean, Removed, and Summary',
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
    desc: 'A library for working with tables of data. It reads, filters, joins, and rewrites every row.',
  },
  {
    name: 'openpyxl',
    icon: FileSpreadsheet,
    type: 'Python library',
    desc: 'Opens and writes the multi-sheet Excel files that the surveys live in.',
  },
  {
    name: 'Git',
    icon: GitBranch,
    type: 'Version control',
    desc: 'Tracks every change to the pipeline so nothing is ever lost.',
  },
  {
    name: 'GitHub',
    icon: Github,
    type: 'Code & file hosting',
    desc: 'Where the pipeline lives online, and where the cleaned files are shared with the mentors.',
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
    bg: 'rgba(22,61,106,0.5)',
    border: 'rgba(143,184,217,0.35)',
    accent: 'rgba(143,184,217,0.95)',
    iconBg: 'rgba(143,184,217,0.18)',
    arrow: 'rgba(143,184,217,0.7)',
  },
  final: {
    bg: 'rgba(70,170,120,0.18)',
    border: 'rgba(100,210,165,0.55)',
    accent: 'rgba(140,235,190,1)',
    iconBg: 'rgba(100,210,165,0.22)',
    arrow: 'rgba(100,210,165,0.7)',
  },
}

// Compact step node used in the circle arrangement
function CircleStepNode({ step, position }) {
  const c = variantColors[step.variant]
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 + parseInt(step.num) * 0.08, type: 'spring' }}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        width: '180px',
        background: c.bg,
        border: `1.5px solid ${c.border}`,
        borderRadius: '14px',
        padding: '14px 14px 12px',
        backdropFilter: 'blur(8px)',
        textAlign: 'center',
      }}
    >
      {/* DB3 only tag */}
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
          zIndex: 5,
        }}>
          {step.note}
        </div>
      )}

      {/* Step number + icon row */}
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
        fontSize: '16px',
        fontWeight: 600,
        color: '#F4EFE4',
        lineHeight: 1.2,
        marginBottom: '6px',
      }}>
        {step.name}
      </div>

      <div style={{
        fontFamily: '"DM Sans"',
        fontSize: '12.5px',
        color: 'rgba(200,223,240,0.85)',
        lineHeight: 1.4,
      }}>
        {step.why}
      </div>
    </motion.div>
  )
}

// Compute clock-face positions for 7 nodes around a circle.
// Step 0 is at top (12 o'clock), going clockwise around to step 6.
// Because 7 doesn't divide evenly, leave a "gap" between step 6 and step 0
// so the arrangement reads as a circle but NOT a closed loop.
function getCirclePosition(index, total, cx, cy, rx, ry) {
  // Use 8 slots, place steps in 7 of them, leave the top-right slot empty
  // to visually break the loop.
  const slots = total + 1 // 8 slots, but only 7 nodes
  const angleStep = (2 * Math.PI) / slots
  // Start at -90deg (top), step 0 occupies that slot
  const angle = -Math.PI / 2 + index * angleStep
  return {
    x: cx + rx * Math.cos(angle),
    y: cy + ry * Math.sin(angle),
  }
}

export default function Slide5() {
  const cx = 580
  const cy = 320
  const rx = 480
  const ry = 240

  const positions = STEPS.map((_, i) => getCirclePosition(i, STEPS.length, cx, cy, rx, ry))

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
      padding: '50px 50px 100px',
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

      {/* Steps arranged in a circle (with a gap between step 6 and step 0 so it isn't a closed loop) */}
      <div style={{
        position: 'relative',
        width: '1160px',
        height: '600px',
        zIndex: 10,
      }}>
        {/* Background ring */}
        <svg viewBox="0 0 1160 600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <marker id="step-arrow" viewBox="0 0 10 10" refX="6" refY="5"
              markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="rgba(143,184,217,0.7)" />
            </marker>
          </defs>

          {/* Arc connectors between consecutive steps (linear, not closing back) */}
          {STEPS.map((step, i) => {
            if (i === STEPS.length - 1) return null
            const p1 = positions[i]
            const p2 = positions[i + 1]
            // Use the arc through the ring centerline by dropping a curve toward the center
            const mx = (p1.x + p2.x) / 2
            const my = (p1.y + p2.y) / 2
            // Pull control point toward center to create an inward arc
            const centerPullX = mx + (cx - mx) * 0.35
            const centerPullY = my + (cy - my) * 0.35
            const isFromSpecial = step.variant === 'special'
            return (
              <motion.path
                key={i}
                d={`M ${p1.x} ${p1.y} Q ${centerPullX} ${centerPullY}, ${p2.x} ${p2.y}`}
                stroke={isFromSpecial ? 'rgba(212,112,74,0.6)' : 'rgba(143,184,217,0.5)'}
                strokeWidth="1.5"
                fill="none"
                markerEnd="url(#step-arrow)"
                strokeDasharray={isFromSpecial ? '5 4' : '0'}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.12 }}
              />
            )
          })}

          {/* HEAD label at step 0 */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <rect
              x={positions[0].x - 32}
              y={positions[0].y - 100}
              width="64"
              height="22"
              rx="11"
              fill="rgba(217,188,130,0.12)"
              stroke="rgba(217,188,130,0.45)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={positions[0].x}
              y={positions[0].y - 84}
              textAnchor="middle"
              fill="rgba(217,188,130,0.95)"
              style={{ fontFamily: '"JetBrains Mono"', fontSize: '11px', letterSpacing: '0.16em', fontWeight: 600 }}
            >
              START
            </text>
          </motion.g>

          {/* END label at step 6 */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <rect
              x={positions[STEPS.length - 1].x - 28}
              y={positions[STEPS.length - 1].y - 100}
              width="56"
              height="22"
              rx="11"
              fill="rgba(100,210,165,0.14)"
              stroke="rgba(100,210,165,0.5)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={positions[STEPS.length - 1].x}
              y={positions[STEPS.length - 1].y - 84}
              textAnchor="middle"
              fill="rgba(140,235,190,1)"
              style={{ fontFamily: '"JetBrains Mono"', fontSize: '11px', letterSpacing: '0.16em', fontWeight: 600 }}
            >
              END
            </text>
          </motion.g>
        </svg>

        {/* Step nodes */}
        {STEPS.map((step, i) => (
          <CircleStepNode key={i} step={step} position={positions[i]} />
        ))}

        {/* Center label: tech stack lives here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{
            position: 'absolute',
            left: cx,
            top: cy,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            width: '460px',
          }}
        >
          <div style={{
            fontFamily: '"DM Sans"',
            fontSize: '12px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(217,188,130,0.85)',
            fontWeight: 600,
            marginBottom: '2px',
          }}>
            Built With
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            width: '100%',
          }}>
            {TECH.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                  style={{
                    background: 'rgba(11,35,64,0.7)',
                    border: '1.5px solid rgba(143,184,217,0.3)',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    textAlign: 'center',
                  }}
                  title={tech.desc}
                >
                  <Icon size={20} color="rgba(217,188,130,1)" />
                  <div style={{
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#F4EFE4',
                    lineHeight: 1.1,
                  }}>
                    {tech.name}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans"',
                    fontSize: '9.5px',
                    letterSpacing: '0.06em',
                    color: 'rgba(217,188,130,0.7)',
                    lineHeight: 1.15,
                  }}>
                    {tech.type}
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div style={{
            fontFamily: '"DM Sans"',
            fontSize: '11px',
            color: 'rgba(200,223,240,0.6)',
            textAlign: 'center',
            lineHeight: 1.45,
            maxWidth: '440px',
            marginTop: '2px',
          }}>
            <strong style={{ color: 'rgba(217,188,130,0.9)' }}>pandas</strong> and <strong style={{ color: 'rgba(217,188,130,0.9)' }}>openpyxl</strong> are Python libraries. <strong style={{ color: 'rgba(217,188,130,0.9)' }}>Git</strong> tracks changes locally; <strong style={{ color: 'rgba(217,188,130,0.9)' }}>GitHub</strong> hosts the repo and shares clean files with the mentors.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
