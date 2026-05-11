import { motion } from 'framer-motion'
import { Map } from 'lucide-react'
import Birds from '../components/Birds'

// Florida outline (path data lifted from the public-domain Wikimedia US states map).
const FLORIDA_PATH = "m 751.7,445.1 -4,-.7 -1.7,-.9 -2.2,1.4 v 2.5 l 1.4,2.1 -.5,4.3 -2.1,.6 -1,-1.1 -.6,-3.2 -50.1,3.3 -3.3,-6 -48.8,5.1 -.5,2.9 2.5,2.8 1.7,.7 .9,1.2 -.4,7.3 -1.1,.6 .5,.4 1,-.3 .7,-.8 10.5,-2.7 9.2,-.5 8.1,1.9 8.5,5 2.4,.8 2.2,2 -.1,2.7 h 2.4 l 1.9,-1 2.5,.1 2,-.8 2.9,-2 3.1,-2.9 1.1,-.4 .6,.5 h 1.4 l .5,-.8 -.5,-1.2 -.6,-.6 .2,-.8 2,-1.1 5,-.4 .8,1 1,.1 2.3,1 3,1.8 1.2,1.7 1.1,1.2 2.8,1.4 v 2.4 l 2.8,1.9 1,.1 1.6,1.4 .7,1.6 1,.2 .8,2.1 .7,.6 1,-1.1 2.9,.1 .5,1.4 1.1,.9 v 1.3 l 2.9,2.2 .2,9.6 -1.8,5.8 1,1.2 -.2,3.4 -.8,1.4 .7,1.2 2.3,2.3 .3,1.5 .8,1 -.4,-1.9 1.3,-.6 .8,-3.6 -3,-1.2 .1,-.6 2.6,-.4 .9,2.6 1.1,.6 .1,-2 1.1,.3 .6,.8 -.1,.7 -2.9,4.2 -.2,1.1 -1.7,1.9 v 1.1 l 3.7,3.8 5.3,7.9 1.8,2.1 v 1.8 l 2.8,4.6 2.3,.6 .7,-1.2 -2.1,.3 -3,-4.5 .2,-1.4 1.5,-.8 v -1.5 l -.6,-1.3 .9,-.9 .4,.9 .7,.5 v 4 l -1.2,-.6 -.8,.9 1.4,1.6 1,2.6 1.2,-.6 2.3,1.2 2.1,2.2 1.6,5.1 3.1,4.8 .8,-1.3 2.8,-.5 3.2,1.3 .3,1.7 3.3,3.8 .1,1.1 2.2,2.7 -.7,.5 v 2.7 l 2.7,1.4 h 1.5 l 2.7,-1.8 1.5,.3 1.1,.4 2.3,-1.7 .2,-.7 1.2,.3 2.4,-1.7 1.3,-2.3 -.7,-3.2 -.2,-1.3 1.1,-4 .6,-.2 .6,1.6 .8,-1.8 -.8,-7.2 -.4,-10.5 -1,-6.8 -.7,-1.7 -6.6,-11.1 -5.2,-9.1 -2.2,-3.3 -1.3,-3.6 -.2,-3.4 .9,-.3 v -.9 l -1.1,-2.2 -4,-4 -7.6,-9.7 -5.7,-10.4 -4.3,-10.7 -.6,-3.7 -1.2,-1 -.5,-3.8 z m 9.2,134.5 1.7,-.1 -.7,-1 z m 7.3,-1.1 v -.7 l 1.6,-.2 3.7,-3.3 1.5,-.6 2.4,-.9 .3,1.3 1.7,.8 -2.6,1.2 h -2.4 l -3.9,2.5 z m 17.2,-7.6 -3,1.4 -1,1.3 1.1,.1 z m 3.8,-2.9 -1.1,.3 -1.4,2 1.1,-.2 1.5,-1.6 z m 8.3,-15.7 -1.7,5.6 -.8,1 -1,2.6 -1.2,1.6 -.7,1.7 -1.9,2.2 v .9 l 2.7,-2.8 2.4,-3.5 .6,-2 2.1,-4.9 z"

// Piping Plover wintering hotspots in Florida, hand-placed along the coast.
// Coordinates land inside the Florida path's bbox (x=638-798, y=444-580).
// r = dot radius (larger = denser cluster).
const SIGHTING_DOTS = [
  // Panhandle (St. Joseph Bay / Apalachicola / St. Vincent Island)
  { cx: 655, cy: 454, r: 4.2 },
  { cx: 663, cy: 456, r: 3 },
  { cx: 648, cy: 456, r: 2.5 },
  { cx: 672, cy: 458, r: 2.2 },
  { cx: 681, cy: 460, r: 2 },

  // Big Bend / Cedar Key
  { cx: 708, cy: 474, r: 2.6 },
  { cx: 714, cy: 484, r: 2.2 },

  // Tampa Bay (big hotspot)
  { cx: 737, cy: 502, r: 4 },
  { cx: 742, cy: 508, r: 3.4 },
  { cx: 733, cy: 511, r: 2.7 },
  { cx: 745, cy: 498, r: 2.5 },

  // Sarasota / Charlotte Harbor / Sanibel
  { cx: 748, cy: 521, r: 3 },
  { cx: 751, cy: 530, r: 3.4 },
  { cx: 755, cy: 540, r: 2.7 },

  // Marco / Naples
  { cx: 760, cy: 552, r: 3 },
  { cx: 766, cy: 560, r: 2.6 },

  // Florida Keys (southern tip)
  { cx: 775, cy: 574, r: 2.4 },
  { cx: 783, cy: 573, r: 2.8 },
  { cx: 790, cy: 568, r: 2.2 },

  // S Atlantic (Biscayne Bay / Miami / Palm Beach)
  { cx: 795, cy: 552, r: 2.5 },
  { cx: 794, cy: 543, r: 2.2 },
  { cx: 793, cy: 532, r: 2.2 },

  // Central Atlantic (Indian River, Cape Canaveral, Vero Beach)
  { cx: 793, cy: 518, r: 2.8 },
  { cx: 795, cy: 506, r: 3.5 },
  { cx: 794, cy: 493, r: 3 },

  // NE Atlantic (Daytona / Flagler / Amelia Island / Jacksonville)
  { cx: 791, cy: 478, r: 2.6 },
  { cx: 788, cy: 466, r: 3.4 },
  { cx: 786, cy: 458, r: 2.4 },
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

      {/* The Florida visualization — center stage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          flex: 1,
          minHeight: 0,
          width: '100%',
          maxWidth: '900px',
          padding: '18px 24px 14px',
          background: 'rgba(11,35,64,0.45)',
          border: '1px solid rgba(143,184,217,0.22)',
          borderRadius: '16px',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Tiny "powered by" bar above the map */}
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
    </div>
  )
}
