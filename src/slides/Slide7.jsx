import { motion } from 'framer-motion'
import { Map, MapPin, Shield, TrendingUp } from 'lucide-react'
import Birds from '../components/Birds'

// Florida outline (path data lifted from the public-domain Wikimedia US states map).
const FLORIDA_PATH = "m 751.7,445.1 -4,-.7 -1.7,-.9 -2.2,1.4 v 2.5 l 1.4,2.1 -.5,4.3 -2.1,.6 -1,-1.1 -.6,-3.2 -50.1,3.3 -3.3,-6 -48.8,5.1 -.5,2.9 2.5,2.8 1.7,.7 .9,1.2 -.4,7.3 -1.1,.6 .5,.4 1,-.3 .7,-.8 10.5,-2.7 9.2,-.5 8.1,1.9 8.5,5 2.4,.8 2.2,2 -.1,2.7 h 2.4 l 1.9,-1 2.5,.1 2,-.8 2.9,-2 3.1,-2.9 1.1,-.4 .6,.5 h 1.4 l .5,-.8 -.5,-1.2 -.6,-.6 .2,-.8 2,-1.1 5,-.4 .8,1 1,.1 2.3,1 3,1.8 1.2,1.7 1.1,1.2 2.8,1.4 v 2.4 l 2.8,1.9 1,.1 1.6,1.4 .7,1.6 1,.2 .8,2.1 .7,.6 1,-1.1 2.9,.1 .5,1.4 1.1,.9 v 1.3 l 2.9,2.2 .2,9.6 -1.8,5.8 1,1.2 -.2,3.4 -.8,1.4 .7,1.2 2.3,2.3 .3,1.5 .8,1 -.4,-1.9 1.3,-.6 .8,-3.6 -3,-1.2 .1,-.6 2.6,-.4 .9,2.6 1.1,.6 .1,-2 1.1,.3 .6,.8 -.1,.7 -2.9,4.2 -.2,1.1 -1.7,1.9 v 1.1 l 3.7,3.8 5.3,7.9 1.8,2.1 v 1.8 l 2.8,4.6 2.3,.6 .7,-1.2 -2.1,.3 -3,-4.5 .2,-1.4 1.5,-.8 v -1.5 l -.6,-1.3 .9,-.9 .4,.9 .7,.5 v 4 l -1.2,-.6 -.8,.9 1.4,1.6 1,2.6 1.2,-.6 2.3,1.2 2.1,2.2 1.6,5.1 3.1,4.8 .8,-1.3 2.8,-.5 3.2,1.3 .3,1.7 3.3,3.8 .1,1.1 2.2,2.7 -.7,.5 v 2.7 l 2.7,1.4 h 1.5 l 2.7,-1.8 1.5,.3 1.1,.4 2.3,-1.7 .2,-.7 1.2,.3 2.4,-1.7 1.3,-2.3 -.7,-3.2 -.2,-1.3 1.1,-4 .6,-.2 .6,1.6 .8,-1.8 -.8,-7.2 -.4,-10.5 -1,-6.8 -.7,-1.7 -6.6,-11.1 -5.2,-9.1 -2.2,-3.3 -1.3,-3.6 -.2,-3.4 .9,-.3 v -.9 l -1.1,-2.2 -4,-4 -7.6,-9.7 -5.7,-10.4 -4.3,-10.7 -.6,-3.7 -1.2,-1 -.5,-3.8 z m 9.2,134.5 1.7,-.1 -.7,-1 z m 7.3,-1.1 v -.7 l 1.6,-.2 3.7,-3.3 1.5,-.6 2.4,-.9 .3,1.3 1.7,.8 -2.6,1.2 h -2.4 l -3.9,2.5 z m 17.2,-7.6 -3,1.4 -1,1.3 1.1,.1 z m 3.8,-2.9 -1.1,.3 -1.4,2 1.1,-.2 1.5,-1.6 z m 8.3,-15.7 -1.7,5.6 -.8,1 -1,2.6 -1.2,1.6 -.7,1.7 -1.9,2.2 v .9 l 2.7,-2.8 2.4,-3.5 .6,-2 2.1,-4.9 z"

// Piping Plover wintering hotspots in Florida. Coordinates were derived by
// sampling the Florida SVG path itself (so each dot lies on the actual coastline)
// then offsetting 2 units toward the state's centroid (730, 510) so the dots sit
// just inside the outline. Path is the simplified Wikimedia outline which doesn't
// model the NE Atlantic coast in detail, so dots there are intentionally omitted.
const SIGHTING_DOTS = [
  // Panhandle Gulf coast (St. Joseph Bay through St. Marks)
  { cx: 645.1, cy: 462.4, r: 3.4 },
  { cx: 652.4, cy: 466.6, r: 2.8 },
  { cx: 668.7, cy: 466.0, r: 2.4 },
  { cx: 683.8, cy: 472.9, r: 2.4 },
  { cx: 696.2, cy: 475.5, r: 2.4 },

  // Big Bend / Cedar Key
  { cx: 726.1, cy: 480.1, r: 2.6 },
  { cx: 732.1, cy: 484.5, r: 2.4 },

  // Tampa Bay
  { cx: 736.2, cy: 506.0, r: 3.4 },
  { cx: 739.1, cy: 514.2, r: 3.0 },
  { cx: 740.7, cy: 508.4, r: 2.6 },
  { cx: 741.4, cy: 514.1, r: 2.4 },

  // Sarasota / Charlotte Harbor / Sanibel
  { cx: 747.4, cy: 526.8, r: 3.0 },
  { cx: 753.7, cy: 536.0, r: 2.6 },
  { cx: 752.9, cy: 533.0, r: 2.4 },

  // Marco / Naples / Ten Thousand Islands
  { cx: 763.2, cy: 546.0, r: 2.8 },
  { cx: 765.9, cy: 548.6, r: 2.4 },

  // Florida Keys (southern tip)
  { cx: 774.5, cy: 571.8, r: 3.0 },
  { cx: 767.7, cy: 576.8, r: 2.4 },
  { cx: 787.4, cy: 567.6, r: 2.4 },

  // S Atlantic (Miami / Biscayne Bay)
  { cx: 793.4, cy: 550.3, r: 2.8 },
  { cx: 790.6, cy: 563.5, r: 2.4 },

  // Central Atlantic (Palm Beach / Vero Beach / Indian River)
  { cx: 794.9, cy: 534.6, r: 3.0 },
  { cx: 793.9, cy: 524.9, r: 2.6 },
  { cx: 790.4, cy: 517.5, r: 2.4 },
]

// Subtle orientation labels for major regions — kept minimal so the picture leads.
const LABELS = [
  { x: 665, y: 448, text: 'Panhandle', anchor: 'middle' },
  { x: 720, y: 502, text: 'Tampa Bay', anchor: 'end' },
  { x: 797, y: 502, text: 'Atlantic Coast', anchor: 'end' },
  { x: 783, y: 590, text: 'Keys', anchor: 'middle' },
]

const FloridaMap = () => (
  <svg viewBox="630 440 180 165" style={{ width: 'auto', height: '100%', maxWidth: '100%', display: 'block' }}>
    <defs>
      <radialGradient id="dot-glow">
        <stop offset="0%" stopColor="rgba(232,145,110,0.95)" />
        <stop offset="60%" stopColor="rgba(232,145,110,0.55)" />
        <stop offset="100%" stopColor="rgba(232,145,110,0)" />
      </radialGradient>
      <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="0.6" />
      </filter>
    </defs>

    {/* Faint background "ocean" tint behind Florida to suggest a map canvas */}
    <rect x="630" y="440" width="180" height="165" fill="rgba(11,35,64,0.55)" rx="4" />

    {/* Florida outline */}
    <motion.path
      d={FLORIDA_PATH}
      fill="rgba(143,184,217,0.18)"
      stroke="rgba(173,206,232,0.7)"
      strokeWidth="0.8"
      strokeLinejoin="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />

    {/* Soft glow halos behind each dot */}
    {SIGHTING_DOTS.map((d, i) => (
      <motion.circle
        key={`halo-${i}`}
        cx={d.cx}
        cy={d.cy}
        r={d.r * 2.2}
        fill="url(#dot-glow)"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 + i * 0.025 }}
      />
    ))}

    {/* Sighting dots */}
    {SIGHTING_DOTS.map((d, i) => (
      <motion.circle
        key={`dot-${i}`}
        cx={d.cx}
        cy={d.cy}
        r={d.r}
        fill="rgba(255,180,140,1)"
        stroke="rgba(255,210,180,0.9)"
        strokeWidth="0.4"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.7 + i * 0.025, type: 'spring' }}
      />
    ))}

    {/* Minimal labels */}
    {LABELS.map((l, i) => (
      <motion.text
        key={i}
        x={l.x}
        y={l.y}
        textAnchor={l.anchor}
        fill="rgba(232,180,140,0.9)"
        style={{ fontFamily: '"DM Sans"', fontSize: '4.5px', letterSpacing: '0.06em', fontWeight: 500 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
      >
        {l.text}
      </motion.text>
    ))}

    {/* Tiny legend in the corner */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8 }}
    >
      <circle cx="640" cy="599" r="2.2" fill="rgba(255,180,140,1)" />
      <text x="645" y="601" fill="rgba(200,223,240,0.85)"
        style={{ fontFamily: '"DM Sans"', fontSize: '4.5px', letterSpacing: '0.04em' }}>
        Piping Plover sightings
      </text>
    </motion.g>
  </svg>
)

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
      padding: '64px 80px 110px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px', zIndex: 10, maxWidth: '1200px' }}>
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
          Where The Clean Data Goes
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
          Once cleaned, the data goes into <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>ArcGIS</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: 'clamp(18px, 1.6vw, 22px)',
            color: 'rgba(200,223,240,0.85)',
            marginTop: '14px',
          }}
        >
          And we can see something like this.
        </motion.p>
      </div>

      {/* Two-column layout: visualization left, "why it matters" right */}
      <div style={{
        flex: 1,
        minHeight: 0,
        width: '100%',
        maxWidth: '1400px',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: '36px',
        alignItems: 'stretch',
        zIndex: 10,
      }}>
        {/* LEFT: Florida visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            padding: '18px 24px 14px',
            background: 'rgba(11,35,64,0.45)',
            border: '1px solid rgba(143,184,217,0.22)',
            borderRadius: '16px',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px',
            flexShrink: 0,
          }}>
            <Map size={15} color="rgba(217,188,130,0.85)" />
            <span style={{
              fontFamily: '"DM Sans"',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(217,188,130,0.75)',
              fontWeight: 600,
            }}>
              ArcGIS · Florida · Piping Plover Sightings
            </span>
          </div>

          <div style={{
            flex: 1,
            minHeight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <FloridaMap />
          </div>
        </motion.div>

        {/* RIGHT: Why it matters */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '22px',
          }}
        >
          <div>
            <div style={{
              fontFamily: '"DM Sans"',
              fontSize: '13px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(232,145,110,0.95)',
              fontWeight: 500,
              marginBottom: '12px',
            }}>
              Why it matters
            </div>
            <div style={{
              fontFamily: '"Playfair Display"',
              fontSize: 'clamp(24px, 2.2vw, 32px)',
              fontWeight: 600,
              color: '#F4EFE4',
              lineHeight: 1.25,
            }}>
              A map like this helps us <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>protect the birds.</em>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                icon: MapPin,
                title: 'See where the birds go',
                text: 'The clusters show which beaches Piping Plovers use most each winter.',
              },
              {
                icon: Shield,
                title: 'Protect those beaches',
                text: 'USFWS and partners can focus rules and stewardship where the birds actually are.',
              },
              {
                icon: TrendingUp,
                title: 'Track how counts change',
                text: 'Comparing the same beaches year to year shows if the population is recovering.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    padding: '14px 18px',
                    background: 'rgba(22,61,106,0.35)',
                    border: '1px solid rgba(143,184,217,0.22)',
                    borderRadius: '12px',
                    borderLeft: '4px solid rgba(212,112,74,0.65)',
                  }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(212,112,74,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={18} color="rgba(232,145,110,1)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: '"Playfair Display"',
                      fontSize: 'clamp(17px, 1.5vw, 20px)',
                      fontWeight: 600,
                      color: '#F4EFE4',
                      marginBottom: '4px',
                      lineHeight: 1.2,
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontFamily: '"DM Sans"',
                      fontSize: 'clamp(13px, 1.15vw, 15px)',
                      color: 'rgba(200,223,240,0.85)',
                      lineHeight: 1.45,
                    }}>
                      {item.text}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
