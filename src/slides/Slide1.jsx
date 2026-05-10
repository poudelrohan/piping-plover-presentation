import { motion } from 'framer-motion'
import Birds from '../components/Birds'

const USFWSBadge = () => (
  <div style={{
    position: 'absolute',
    top: '32px',
    left: '36px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 20,
  }}>
    {/* Shield */}
    <div style={{
      width: '52px',
      height: '58px',
      background: 'rgba(217,188,130,0.12)',
      border: '1.5px solid rgba(217,188,130,0.3)',
      borderRadius: '4px 4px 26px 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
          stroke="rgba(217,188,130,0.6)" strokeWidth="1.5" fill="none"/>
        <path d="M9 12l2 2 4-4" stroke="rgba(217,188,130,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
    <div>
      <div style={{ fontFamily: '"DM Sans"', fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(217,188,130,0.7)', textTransform: 'uppercase' }}>United States</div>
      <div style={{ fontFamily: '"DM Sans"', fontSize: '12px', color: 'rgba(217,188,130,0.85)', marginTop: '2px', letterSpacing: '0.04em' }}>Fish &amp; Wildlife Service</div>
    </div>
  </div>
)

// Horizon gradient wave at the bottom
const HorizonWave = () => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 1 }}>
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" width="100%" height="100%">
      <defs>
        <linearGradient id="waveGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(22,61,106,0)" />
          <stop offset="100%" stopColor="rgba(22,61,106,0.35)" />
        </linearGradient>
      </defs>
      <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,30 1440,80 L1440,200 L0,200 Z"
        fill="url(#waveGrad1)" />
      <path d="M0,110 C360,60 720,160 1080,110 C1200,90 1320,130 1440,110 L1440,200 L0,200 Z"
        fill="rgba(11,35,64,0.4)" />
    </svg>
  </div>
)

export default function Slide1() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(170deg, #061525 0%, #0B2340 35%, #163D6A 65%, #1A4A78 80%, #0F2A50 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Atmospheric glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(212,112,74,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '30%',
        width: '500px',
        height: '200px',
        background: 'radial-gradient(ellipse, rgba(42,96,153,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <USFWSBadge />
      <Birds density="normal" />
      <HorizonWave />

      {/* Symposium label top-right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '36px',
          right: '36px',
          textAlign: 'right',
          zIndex: 20,
        }}
      >
        <div style={{
          fontFamily: '"DM Sans"',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(212,112,74,0.7)',
          marginBottom: '2px',
        }}>
          Spring 2026
        </div>
        <div style={{
          fontFamily: '"DM Sans"',
          fontSize: '11px',
          color: 'rgba(217,188,130,0.45)',
          letterSpacing: '0.04em',
        }}>
          USFWS Student Symposium
        </div>
      </motion.div>

      {/* Decorative horizontal rule */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,112,74,0.7), transparent)',
          marginBottom: '28px',
          zIndex: 10,
        }}
      />

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        style={{
          fontFamily: '"Playfair Display"',
          fontSize: 'clamp(30px, 4.2vw, 56px)',
          fontWeight: 600,
          color: '#F4EFE4',
          lineHeight: 1.15,
          maxWidth: '900px',
          textAlign: 'center',
          zIndex: 10,
          marginBottom: '22px',
          padding: '0 40px',
        }}
      >
        Piping Plover Observational Data:<br />
        <em style={{ fontStyle: 'italic', color: 'rgba(217,188,130,0.95)' }}>Compiling, Cleaning, and Preparing for Analysis</em>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{
          fontFamily: '"DM Sans"',
          fontSize: 'clamp(15px, 1.6vw, 18px)',
          fontWeight: 400,
          color: 'rgba(200,223,240,0.85)',
          maxWidth: '680px',
          textAlign: 'center',
          lineHeight: 1.6,
          zIndex: 10,
          marginBottom: '46px',
          padding: '0 40px',
          letterSpacing: '0.02em',
        }}
      >
        Turning four scattered survey files into one clean dataset
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        style={{
          width: '1px',
          height: '36px',
          background: 'linear-gradient(180deg, rgba(217,188,130,0.5), transparent)',
          marginBottom: '20px',
          zIndex: 10,
        }}
      />

      {/* Author */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          zIndex: 10,
          marginBottom: '24px',
        }}
      >
        <span style={{
          fontFamily: '"Playfair Display"',
          fontSize: '22px',
          color: 'rgba(217,188,130,0.95)',
          fontWeight: 500,
        }}>
          Rohan Poudel
        </span>
        <span style={{
          fontFamily: '"DM Sans"',
          fontSize: '13px',
          color: 'rgba(200,223,240,0.65)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}>
          Intern
        </span>
      </motion.div>

      {/* Mentors */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.75 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          zIndex: 10,
        }}
      >
        <span style={{
          fontFamily: '"DM Sans"',
          fontSize: '11px',
          color: 'rgba(200,223,240,0.55)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}>
          USFWS Mentors
        </span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontFamily: '"Playfair Display"',
          fontSize: '17px',
          color: 'rgba(200,223,240,0.85)',
        }}>
          <span>Caroline Walker</span>
          <span style={{ color: 'rgba(212,112,74,0.5)', fontSize: '10px' }}>◆</span>
          <span>Kevin Kalasz</span>
        </div>
      </motion.div>
    </div>
  )
}
