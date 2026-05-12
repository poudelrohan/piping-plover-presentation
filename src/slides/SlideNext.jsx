import { motion } from 'framer-motion'
import { Calendar, Layers, Code2, Heart } from 'lucide-react'
import Birds from '../components/Birds'

const NEXT_STEPS = [
  {
    icon: Calendar,
    title: 'Finish Database 3',
    text: 'Run the pipeline for the remaining Winter Bird Survey years, 2017 through 2024.',
  },
  {
    icon: Layers,
    title: 'Combine all four databases',
    text: 'Merge every cleaned source into one master Florida dataset for analysis.',
  },
]

const REFLECTIONS = [
  {
    icon: Code2,
    title: 'New skills',
    text: 'Got fluent with Python and pandas, and learned what working with messy real-world data actually feels like.',
  },
  {
    icon: Heart,
    title: 'Why it stuck with me',
    text: 'The most rewarding part: knowing this work goes toward protecting a federally threatened species.',
    highlight: true,
  },
]

function Section({ eyebrow, title, items, accent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div>
        <div style={{
          fontFamily: '"DM Sans"',
          fontSize: '12px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(232,145,110,0.92)',
          fontWeight: 500,
          marginBottom: '8px',
        }}>
          {eyebrow}
        </div>
        <div style={{
          fontFamily: '"Playfair Display"',
          fontSize: 'clamp(28px, 2.4vw, 36px)',
          fontWeight: 600,
          color: '#F4EFE4',
          lineHeight: 1.2,
        }}>
          {title}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {items.map((item, i) => {
          const Icon = item.icon
          const isHighlight = item.highlight
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.13 }}
              style={{
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                padding: '24px 26px',
                background: isHighlight ? 'rgba(212,112,74,0.13)' : 'rgba(22,61,106,0.35)',
                border: `1px solid ${isHighlight ? 'rgba(212,112,74,0.5)' : 'rgba(143,184,217,0.25)'}`,
                borderLeft: `4px solid ${accent}`,
                borderRadius: '14px',
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: isHighlight ? 'rgba(212,112,74,0.22)' : 'rgba(143,184,217,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={24} color={accent} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: 'clamp(20px, 1.7vw, 26px)',
                  fontWeight: 600,
                  color: '#F4EFE4',
                  marginBottom: '7px',
                  lineHeight: 1.2,
                }}>
                  {item.title}
                </div>
                <p style={{
                  fontFamily: '"DM Sans"',
                  fontSize: 'clamp(15px, 1.3vw, 18px)',
                  color: 'rgba(200,223,240,0.88)',
                  lineHeight: 1.55,
                }}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function SlideNext() {
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
      padding: '64px 80px 110px',
      gap: '46px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '1200px' }}>
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
          Looking Ahead
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
          Where this <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>goes next.</em>
        </motion.h2>
      </div>

      {/* Two-column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '44px',
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10,
      }}>
        <Section
          eyebrow="What's next"
          title="The work continues."
          items={NEXT_STEPS}
          accent="rgba(143,184,217,0.85)"
        />
        <Section
          eyebrow="Reflections"
          title="What this taught me."
          items={REFLECTIONS}
          accent="rgba(232,145,110,1)"
        />
      </div>
    </div>
  )
}
