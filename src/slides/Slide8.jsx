import { motion } from 'framer-motion'
import { MessageCircleQuestion } from 'lucide-react'
import Birds from '../components/Birds'

// Sunset-tinted horizon wave for the closing slide
const HorizonWave = () => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', zIndex: 1, pointerEvents: 'none' }}>
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none" width="100%" height="100%">
      <defs>
        <linearGradient id="sunset-wave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(212,112,74,0)" />
          <stop offset="60%" stopColor="rgba(212,112,74,0.15)" />
          <stop offset="100%" stopColor="rgba(11,35,64,0.5)" />
        </linearGradient>
      </defs>
      <path d="M0,90 C240,150 480,30 720,90 C960,150 1200,40 1440,90 L1440,220 L0,220 Z"
        fill="url(#sunset-wave)" />
      <path d="M0,130 C360,80 720,180 1080,130 C1200,110 1320,150 1440,130 L1440,220 L0,220 Z"
        fill="rgba(11,35,64,0.5)" />
    </svg>
  </div>
)

export default function Slide8() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(170deg, #0B2340 0%, #163D6A 30%, #2B4A6E 55%, #6B4A4A 80%, #3A2030 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Sunset glow */}
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(232,145,110,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '20%',
        width: '500px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(217,188,130,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <Birds density="normal" />
      <HorizonWave />

      {/* Decorative ornament */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          width: '160px',
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent, rgba(217,188,130,0.85), transparent)',
          marginBottom: '52px',
          zIndex: 10,
        }}
      />

      {/* THANK YOU headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.5 }}
        style={{
          fontFamily: '"Playfair Display"',
          fontSize: 'clamp(80px, 11vw, 160px)',
          fontWeight: 500,
          color: '#F4EFE4',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          zIndex: 10,
          marginBottom: '72px',
        }}
      >
        Thank <em style={{ color: 'rgba(232,145,110,0.95)', fontStyle: 'italic' }}>you</em>
      </motion.h1>

      {/* Q&A prompt */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0, type: 'spring' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          padding: '20px 40px',
          background: 'rgba(217,188,130,0.13)',
          border: '2px solid rgba(217,188,130,0.5)',
          borderRadius: '56px',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
        }}
      >
        <MessageCircleQuestion size={28} color="rgba(217,188,130,1)" />
        <span style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(24px, 2.2vw, 30px)',
          color: 'rgba(217,188,130,1)',
          letterSpacing: '0.01em',
        }}>
          Questions or Comments?
        </span>
      </motion.div>
    </div>
  )
}
