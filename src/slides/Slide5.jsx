import { motion } from 'framer-motion'
import {
  Filter, Hash, MapPin, ListChecks, Columns3, Copy, FileCheck2,
  Code2, Database, FileSpreadsheet, GitBranch
} from 'lucide-react'
import Birds from '../components/Birds'

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
  { name: 'Python', icon: Code2, desc: 'The language the whole pipeline is written in' },
  { name: 'pandas', icon: Database, desc: 'Reads, filters, joins, and rewrites the data tables' },
  { name: 'openpyxl', icon: FileSpreadsheet, desc: 'Opens and writes the multi-sheet Excel files' },
  { name: 'Git', icon: GitBranch, desc: 'Tracks every change so nothing is ever lost' },
]

const variantColors = {
  special: {
    bg: 'rgba(212,112,74,0.15)',
    border: 'rgba(212,112,74,0.55)',
    accent: 'rgba(232,145,110,0.95)',
    iconBg: 'rgba(212,112,74,0.2)',
  },
  normal: {
    bg: 'rgba(22,61,106,0.45)',
    border: 'rgba(143,184,217,0.25)',
    accent: 'rgba(143,184,217,0.85)',
    iconBg: 'rgba(143,184,217,0.15)',
  },
  final: {
    bg: 'rgba(70,170,120,0.15)',
    border: 'rgba(100,210,165,0.5)',
    accent: 'rgba(130,225,180,0.95)',
    iconBg: 'rgba(100,210,165,0.18)',
  },
}

// A linked-list style node — left side has the data, right side has the "next" pointer
function StepNode({ step, isLast }) {
  const c = variantColors[step.variant]
  const Icon = step.icon

  return (
    <div style={{ display: 'flex', alignItems: 'stretch', flex: '0 0 auto' }}>
      {/* Node card (data half + pointer half) */}
      <div style={{
        display: 'flex',
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: '10px',
        overflow: 'hidden',
        backdropFilter: 'blur(8px)',
        position: 'relative',
        width: '170px',
      }}>
        {/* Special "DB3 only" tag */}
        {step.note && (
          <div style={{
            position: 'absolute',
            top: '-9px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(212,112,74,0.95)',
            borderRadius: '20px',
            padding: '1px 8px',
            fontFamily: '"DM Sans"',
            fontSize: '8px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#F4EFE4',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            zIndex: 5,
          }}>
            {step.note}
          </div>
        )}

        {/* Data section */}
        <div style={{
          flex: 1,
          padding: '12px 10px 10px 12px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '180px',
        }}>
          {/* Header: number + icon */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}>
            <div style={{
              fontFamily: '"JetBrains Mono"',
              fontSize: '12.5px',
              color: c.accent,
              opacity: 0.85,
              fontWeight: 500,
            }}>
              .{step.num}
            </div>
            <div style={{
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              background: c.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon size={14} color={c.accent} />
            </div>
          </div>

          {/* Step name */}
          <div style={{
            fontFamily: '"Playfair Display"',
            fontSize: '15px',
            fontWeight: 600,
            color: '#F4EFE4',
            marginBottom: '7px',
            lineHeight: 1.2,
          }}>
            {step.name}
          </div>

          {/* Why */}
          <p style={{
            fontFamily: '"DM Sans"',
            fontSize: '12px',
            fontWeight: 400,
            color: 'rgba(200,223,240,0.85)',
            lineHeight: 1.45,
            flex: 1,
          }}>
            {step.why}
          </p>

          {/* Filename at bottom */}
          <div style={{
            marginTop: '10px',
            paddingTop: '7px',
            borderTop: `1px dashed ${c.border}`,
            fontFamily: '"JetBrains Mono"',
            fontSize: '10px',
            color: c.accent,
            opacity: 0.85,
            wordBreak: 'break-all',
          }}>
            {step.file}
          </div>
        </div>

        {/* Pointer section (the "next" half of the linked list node) */}
        <div style={{
          width: '14px',
          background: c.iconBg,
          borderLeft: `1px dashed ${c.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"JetBrains Mono"',
          fontSize: '8px',
          color: c.accent,
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          letterSpacing: '0.08em',
          opacity: 0.55,
        }}>
          {isLast ? 'NULL' : 'NEXT'}
        </div>
      </div>

      {/* Arrow to next node */}
      {!isLast && (
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          padding: '0 4px',
        }}>
          <svg width="22" height="14" viewBox="0 0 22 14">
            <line x1="0" y1="7" x2="18" y2="7" stroke="rgba(143,184,217,0.45)" strokeWidth="1.2" />
            <path d="M 14,3 L 20,7 L 14,11" fill="none" stroke="rgba(143,184,217,0.7)" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default function Slide5() {
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
      padding: '40px 40px 80px',
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
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(212,112,74,0.7)',
            marginBottom: '8px',
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
            fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.2,
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
            fontSize: '15px',
            color: 'rgba(200,223,240,0.7)',
            marginTop: '8px',
            maxWidth: '780px',
          }}
        >
          Doing this manually for every Excel file would take weeks. The pipeline does it in seconds. Seven chained steps, each one its own Python script.
        </motion.p>
      </div>

      {/* Linked list */}
      <div style={{ marginBottom: '28px', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            paddingTop: '14px',
          }}
        >
          {/* HEAD pointer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '6px',
          }}>
            <div style={{
              fontFamily: '"JetBrains Mono"',
              fontSize: '9.5px',
              letterSpacing: '0.14em',
              color: 'rgba(217,188,130,0.7)',
              border: '1px dashed rgba(217,188,130,0.35)',
              borderRadius: '4px',
              padding: '4px 8px',
              marginRight: '6px',
            }}>
              HEAD
            </div>
            <svg width="20" height="14" viewBox="0 0 20 14">
              <line x1="0" y1="7" x2="16" y2="7" stroke="rgba(217,188,130,0.5)" strokeWidth="1.2" />
              <path d="M 12,3 L 18,7 L 12,11" fill="none" stroke="rgba(217,188,130,0.7)" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5 + i * 0.08 }}
            >
              <StepNode step={step} isLast={i === STEPS.length - 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tech stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        style={{
          width: '100%',
          maxWidth: '1100px',
          zIndex: 10,
        }}
      >
        <div style={{
          textAlign: 'center',
          fontFamily: '"DM Sans"',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(217,188,130,0.7)',
          marginBottom: '14px',
        }}>
          Built With
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}>
          {TECH.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.45 + i * 0.1 }}
                style={{
                  background: 'rgba(11,35,64,0.55)',
                  border: '1px solid rgba(143,184,217,0.18)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(217,188,130,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} color="rgba(217,188,130,0.85)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: '"JetBrains Mono"',
                    fontSize: '14.5px',
                    fontWeight: 500,
                    color: '#F4EFE4',
                    marginBottom: '2px',
                  }}>
                    {tech.name}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans"',
                    fontSize: '12px',
                    color: 'rgba(200,223,240,0.78)',
                    lineHeight: 1.4,
                  }}>
                    {tech.desc}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
