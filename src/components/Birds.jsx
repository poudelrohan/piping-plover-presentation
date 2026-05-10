import { motion } from 'framer-motion'

// Single Piping Plover-style flying bird silhouette
const BirdSVG = ({ size = 1, color = 'rgba(200,220,240,0.55)' }) => (
  <svg
    width={60 * size}
    height={28 * size}
    viewBox="0 0 60 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left wing */}
    <path
      d="M30 14 Q18 4 4 8 Q12 10 18 14"
      stroke={color}
      strokeWidth={1.8 * size}
      strokeLinecap="round"
      fill="none"
    />
    {/* Right wing */}
    <path
      d="M30 14 Q42 4 56 8 Q48 10 42 14"
      stroke={color}
      strokeWidth={1.8 * size}
      strokeLinecap="round"
      fill="none"
    />
    {/* Body */}
    <path
      d="M18 14 Q24 16 30 14 Q36 16 42 14"
      stroke={color}
      strokeWidth={1.8 * size}
      strokeLinecap="round"
      fill="none"
    />
    {/* Tail */}
    <path
      d="M30 14 Q28 20 26 24 M30 14 Q32 20 34 24"
      stroke={color}
      strokeWidth={1.2 * size}
      strokeLinecap="round"
      fill="none"
    />
    {/* Head */}
    <circle cx={17} cy={13} r={2.2 * size} fill={color} />
    {/* Beak */}
    <path
      d="M15 13 L10 12.5"
      stroke={color}
      strokeWidth={1.2 * size}
      strokeLinecap="round"
    />
  </svg>
)

// Bird flock configuration
const BIRDS = [
  { id: 1, y: '12%',  delay: 0,    duration: 22, size: 0.9, color: 'rgba(200,225,245,0.5)',  direction: 1 },
  { id: 2, y: '18%',  delay: 3,    duration: 26, size: 0.65, color: 'rgba(200,225,245,0.35)', direction: 1 },
  { id: 3, y: '8%',   delay: 7,    duration: 19, size: 1.1, color: 'rgba(212,112,74,0.35)',   direction: 1 },
  { id: 4, y: '25%',  delay: 11,   duration: 30, size: 0.55, color: 'rgba(200,225,245,0.25)', direction: 1 },
  { id: 5, y: '15%',  delay: 15,   duration: 24, size: 0.8, color: 'rgba(200,225,245,0.4)',   direction: 1 },
  { id: 6, y: '6%',   delay: 20,   duration: 20, size: 0.7, color: 'rgba(212,112,74,0.25)',   direction: 1 },
  { id: 7, y: '22%',  delay: 25,   duration: 28, size: 1.0, color: 'rgba(200,225,245,0.45)',  direction: 1 },
  { id: 8, y: '10%',  delay: 31,   duration: 23, size: 0.6, color: 'rgba(200,225,245,0.3)',   direction: 1 },
]

function FloatingBird({ bird }) {
  const startX = bird.direction === 1 ? '-120px' : 'calc(100vw + 120px)'
  const endX   = bird.direction === 1 ? 'calc(100vw + 120px)' : '-120px'

  return (
    <motion.div
      key={bird.id}
      style={{
        position: 'absolute',
        top: bird.y,
        left: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
      // Start off-screen so birds aren't stuck visible at left edge during delay
      initial={{ x: startX, y: 0 }}
      animate={{
        x: [startX, endX],
        y: ['0px', '-12px', '6px', '-8px', '0px'],
      }}
      transition={{
        x: {
          duration: bird.duration,
          delay: bird.delay,
          repeat: Infinity,
          ease: 'linear',
        },
        y: {
          duration: bird.duration / 4,
          delay: bird.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <motion.div
        animate={{ scaleY: [1, 0.7, 1, 0.85, 1] }}
        transition={{
          duration: 1.2,
          delay: bird.delay % 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <BirdSVG size={bird.size} color={bird.color} />
      </motion.div>
    </motion.div>
  )
}

export default function Birds({ density = 'normal' }) {
  const birds = density === 'sparse' ? BIRDS.slice(0, 4) : BIRDS
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 5 }}>
      {birds.map(bird => <FloatingBird key={bird.id} bird={bird} />)}
    </div>
  )
}
