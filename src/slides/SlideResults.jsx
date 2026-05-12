import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Database } from 'lucide-react'
import Birds from '../components/Birds'

const DATABASES = [
  {
    name: 'Database 1',
    source: 'eBird observations',
    bigNumber: '25,392',
    caption: 'clean rows',
    status: 'done',
  },
  {
    name: 'Database 2',
    source: 'Non-breeding survey · 2011–2023',
    bigNumber: '5,937',
    caption: 'clean rows',
    status: 'done',
  },
  {
    name: 'Database 3',
    source: 'Winter Bird Survey · 2013–2024',
    bigNumber: '4 / 12',
    caption: 'years cleaned',
    status: 'wip',
  },
  {
    name: 'Database 4',
    source: 'Banded bird resights',
    bigNumber: '192',
    caption: 'clean rows',
    status: 'done',
  },
]

const statusBadge = {
  done: { icon: CheckCircle2, color: 'rgba(140,235,190,1)', bg: 'rgba(100,210,165,0.18)', label: 'Done' },
  wip:  { icon: Loader2,      color: 'rgba(232,145,110,1)', bg: 'rgba(212,112,74,0.22)',  label: 'In progress' },
}

export default function SlideResults() {
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
      padding: '60px 80px 110px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '34px', zIndex: 10, maxWidth: '1200px' }}>
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
          Results
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
          What we have <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>so far.</em>
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
          Three of the four sources are fully cleaned. Database 3 is still in progress, one year at a time.
        </motion.p>
      </div>

      {/* 4 database stat cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10,
      }}>
        {DATABASES.map((db, i) => {
          const s = statusBadge[db.status]
          const StatusIcon = s.icon
          const isWip = db.status === 'wip'
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 + i * 0.13, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: 'rgba(11,35,64,0.55)',
                border: `1.5px solid ${isWip ? 'rgba(212,112,74,0.45)' : 'rgba(143,184,217,0.3)'}`,
                borderRadius: '16px',
                padding: '24px 22px 26px',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '300px',
                borderLeft: `4px solid ${isWip ? 'rgba(212,112,74,0.7)' : 'rgba(100,210,165,0.55)'}`,
              }}
            >
              {/* Top row: db icon + status badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '18px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(143,184,217,0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Database size={18} color="rgba(143,184,217,1)" />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  background: s.bg,
                  borderRadius: '14px',
                }}>
                  <StatusIcon size={13} color={s.color} />
                  <span style={{
                    fontFamily: '"DM Sans"',
                    fontSize: '11px',
                    letterSpacing: '0.10em',
                    textTransform: 'uppercase',
                    color: s.color,
                    fontWeight: 600,
                  }}>
                    {s.label}
                  </span>
                </div>
              </div>

              {/* Database name */}
              <div style={{
                fontFamily: '"Playfair Display"',
                fontSize: 'clamp(18px, 1.5vw, 21px)',
                fontWeight: 600,
                color: '#F4EFE4',
                lineHeight: 1.2,
                marginBottom: '3px',
              }}>
                {db.name}
              </div>

              {/* Source */}
              <div style={{
                fontFamily: '"DM Sans"',
                fontSize: '12.5px',
                color: 'rgba(200,223,240,0.7)',
                marginBottom: '18px',
                lineHeight: 1.3,
              }}>
                {db.source}
              </div>

              {/* Big number */}
              <div style={{
                fontFamily: '"Playfair Display"',
                fontSize: 'clamp(40px, 4vw, 56px)',
                fontWeight: 600,
                color: isWip ? 'rgba(232,145,110,1)' : 'rgba(217,188,130,1)',
                lineHeight: 1,
                marginTop: 'auto',
                marginBottom: '6px',
                letterSpacing: '-0.01em',
              }}>
                {db.bigNumber}
              </div>

              {/* Caption */}
              <div style={{
                fontFamily: '"DM Sans"',
                fontSize: 'clamp(13px, 1.05vw, 15px)',
                color: 'rgba(200,223,240,0.78)',
                letterSpacing: '0.04em',
              }}>
                {db.caption}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
