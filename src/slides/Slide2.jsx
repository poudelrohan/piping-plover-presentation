import { motion } from 'framer-motion'
import { AlertTriangle, Waves, Home, BarChart3 } from 'lucide-react'
import Birds from '../components/Birds'
import piplPhoto from '../assets/piping-plover.jpg'
import pipMapSvg from '../assets/us-piping-plover-map.svg'

// Real US states map (derived from public-domain Wikimedia "Blank US Map (states only)")
// with Piping Plover breeding/wintering ranges and migration arrows baked in.
const MigrationMap = () => (
  <img
    src={pipMapSvg}
    alt="Piping Plover US migration map: breeding range in the northern US, wintering range along the Gulf and southern Atlantic coasts, focal site in Florida"
    style={{ width: '100%', height: 'auto', display: 'block' }}
  />
)

const FACTS = [
  {
    icon: Waves,
    label: 'Migration',
    text: 'They breed in the northern US, Canada, and the Great Lakes. They winter along the US Atlantic coast, Gulf coast, Caribbean, and Mexico. Florida is one of the most important wintering destinations.',
  },
  {
    icon: Home,
    label: 'Main Threats',
    text: 'Habitat loss from coastal development. Beach disturbance from foot traffic, vehicles, and dogs that flush birds from feeding and roosting sites.',
  },
  {
    icon: BarChart3,
    label: 'Why the Data Matters',
    text: 'Tracking population changes at wintering sites helps USFWS identify which beaches need protection and whether recovery efforts are working.',
  },
]

export default function Slide2() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #061525 0%, #0B2340 50%, #0E1E3A 100%)',
      display: 'flex',
      padding: '70px 80px 110px',
      gap: '90px',
    }}>
      <Birds density="sparse" />

      {/* LEFT COLUMN: Photo + map (slightly wider so left edge isn't empty) */}
      <div style={{
        flex: '0 0 44%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        zIndex: 10,
      }}>
        {/* Photo container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'relative',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1px solid rgba(217,188,130,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            aspectRatio: '4 / 3',
          }}
        >
          <img
            src={piplPhoto}
            alt="Piping Plover (Charadrius melodus)"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Photo overlay gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 60%, rgba(6,21,37,0.85) 100%)',
            pointerEvents: 'none',
          }} />
          {/* Threatened badge top-left */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'rgba(212,112,74,0.95)',
            backdropFilter: 'blur(6px)',
            borderRadius: '8px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            fontFamily: '"DM Sans"',
            fontSize: '13px',
            color: '#F4EFE4',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            <AlertTriangle size={15} />
            Federally Threatened
          </div>
          {/* Caption bottom */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '18px',
            right: '18px',
          }}>
            <div style={{
              fontFamily: '"Playfair Display"',
              fontSize: '20px',
              fontStyle: 'italic',
              color: 'rgba(217,188,130,1)',
              fontWeight: 500,
            }}>
              Charadrius melodus
            </div>
            <div style={{
              fontFamily: '"DM Sans"',
              fontSize: '12px',
              color: 'rgba(200,223,240,0.7)',
              marginTop: '4px',
              letterSpacing: '0.04em',
            }}>
              Photo: Wikimedia Commons (public domain)
            </div>
          </div>
        </motion.div>

        {/* Migration map */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            background: 'rgba(11,35,64,0.5)',
            border: '1px solid rgba(143,184,217,0.15)',
            borderRadius: '14px',
            padding: '14px 18px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{
            fontFamily: '"DM Sans"',
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(217,188,130,0.85)',
            marginBottom: '12px',
            fontWeight: 500,
          }}>
            US Migration Pattern
          </div>
          <MigrationMap />
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Text content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 10,
      }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: '14px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(232,145,110,0.95)',
            marginBottom: '20px',
            fontWeight: 500,
          }}
        >
          About the Species
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: '"Playfair Display"',
            fontSize: 'clamp(40px, 4.4vw, 60px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          A small shorebird with<br />
          <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>a long migration</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: 'clamp(18px, 1.7vw, 22px)',
            color: 'rgba(200,223,240,0.9)',
            lineHeight: 1.6,
            marginBottom: '36px',
            maxWidth: '720px',
          }}
        >
          The Piping Plover is a small, sand-colored shorebird that breeds across northern North America and migrates south every winter, including to Florida's beaches.
        </motion.p>

        {/* Fact cards stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '760px' }}>
          {FACTS.map((fact, i) => {
            const Icon = fact.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.15 }}
                style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                  padding: '18px 22px',
                  background: 'rgba(22,61,106,0.3)',
                  border: '1px solid rgba(143,184,217,0.18)',
                  borderRadius: '12px',
                  borderLeft: '4px solid rgba(212,112,74,0.6)',
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(212,112,74,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                }}>
                  <Icon size={20} color="rgba(232,145,110,1)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: '"DM Sans"',
                    fontSize: '13px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(232,145,110,1)',
                    marginBottom: '6px',
                    fontWeight: 600,
                  }}>
                    {fact.label}
                  </div>
                  <p style={{
                    fontFamily: '"DM Sans"',
                    fontSize: 'clamp(15px, 1.4vw, 18px)',
                    color: 'rgba(200,223,240,0.92)',
                    lineHeight: 1.55,
                    fontWeight: 400,
                  }}>
                    {fact.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
