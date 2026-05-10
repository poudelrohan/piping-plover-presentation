import { motion } from 'framer-motion'
import { TrendingUp, MapPinned, Calendar, Layers3, ArrowUpRight } from 'lucide-react'
import Birds from '../components/Birds'

const QUESTIONS = [
  {
    icon: TrendingUp,
    category: 'Population Trends',
    question: 'Are Piping Plover populations growing or declining at specific Florida wintering sites?',
    payoff: 'Multi-year counts, finally on a shared scale.',
  },
  {
    icon: MapPinned,
    category: 'Site Fidelity',
    question: 'Which sites consistently host the same banded individuals year after year?',
    payoff: 'Identify high-priority beaches that need ongoing protection.',
  },
  {
    icon: Layers3,
    category: 'Detection & Coverage',
    question: 'How do observed counts compare across surveys at the same site and time?',
    payoff: 'Understand which programs catch what, and what they miss.',
  },
  {
    icon: Calendar,
    category: 'Seasonal Patterns',
    question: 'When do wintering numbers peak, and how does that vary year to year?',
    payoff: 'Time conservation actions to when the birds are present.',
  },
]

export default function Slide7() {
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
      <div style={{ textAlign: 'center', marginBottom: '44px', zIndex: 10 }}>
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
          Where This Leads
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
          Now the real biology questions <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>can be asked</em>
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
          }}
        >
          A clean, unified dataset opens up questions that used to take weeks of manual work.
        </motion.p>
      </div>

      {/* Question cards 2x2 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        width: '100%',
        maxWidth: '1300px',
        zIndex: 10,
      }}>
        {QUESTIONS.map((q, i) => {
          const Icon = q.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: 'rgba(11,35,64,0.6)',
                border: '1.5px solid rgba(143,184,217,0.25)',
                borderRadius: '16px',
                padding: '30px 34px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle glow */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '160px',
                height: '160px',
                background: 'radial-gradient(circle, rgba(217,188,130,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Top: icon + category */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '11px',
                    background: 'rgba(217,188,130,0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={22} color="rgba(217,188,130,1)" />
                  </div>
                  <span style={{
                    fontFamily: '"DM Sans"',
                    fontSize: '14px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(217,188,130,1)',
                    fontWeight: 600,
                  }}>
                    {q.category}
                  </span>
                </div>
                <ArrowUpRight size={20} color="rgba(143,184,217,0.55)" />
              </div>

              {/* Question */}
              <div style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: 'clamp(20px, 1.8vw, 24px)',
                fontWeight: 500,
                color: '#F4EFE4',
                lineHeight: 1.4,
                marginBottom: '18px',
                letterSpacing: '-0.005em',
              }}>
                {q.question}
              </div>

              {/* Payoff */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px dashed rgba(143,184,217,0.28)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <span style={{
                  fontFamily: '"DM Sans"',
                  fontSize: '18px',
                  color: 'rgba(212,112,74,1)',
                  flexShrink: 0,
                  fontWeight: 600,
                }}>
                  →
                </span>
                <span style={{
                  fontFamily: '"DM Sans"',
                  fontSize: '16px',
                  color: 'rgba(200,223,240,0.92)',
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}>
                  {q.payoff}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Closing line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        style={{
          marginTop: '44px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          zIndex: 10,
        }}
      >
        <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, transparent, rgba(217,188,130,0.5))' }} />
        <p style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontWeight: 500,
          fontSize: 'clamp(18px, 1.7vw, 22px)',
          color: 'rgba(217,188,130,1)',
          textAlign: 'center',
          maxWidth: '800px',
          lineHeight: 1.5,
          letterSpacing: '0.01em',
        }}>
          Clean data is the foundation. Now the real biology questions can be asked, and answered.
        </p>
        <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, rgba(217,188,130,0.5), transparent)' }} />
      </motion.div>
    </div>
  )
}
