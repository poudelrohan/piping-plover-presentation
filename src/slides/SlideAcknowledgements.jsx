import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import Birds from '../components/Birds'
import bcuLogo from '../assets/bculogo.png'
import usfwsLogo from '../assets/USFWSlogo.png'
import celLogo from '../assets/CELlogo.jpg'

// Logo pill identical to the footer style, but bigger.
const logoPill = (size = 64) => ({
  background: 'rgba(244, 239, 228, 0.94)',
  borderRadius: '12px',
  padding: '6px 10px',
  height: `${size}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 3px 14px rgba(0,0,0,0.32)',
})

const imgInPill = (h) => ({
  height: `${h}px`,
  width: 'auto',
  display: 'block',
})

export default function SlideAcknowledgements() {
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
      <div style={{ textAlign: 'center', marginBottom: '44px', zIndex: 10, maxWidth: '1200px' }}>
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
          Acknowledgements
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: '"Playfair Display"',
            fontSize: 'clamp(40px, 4.2vw, 60px)',
            fontWeight: 600,
            color: '#F4EFE4',
            lineHeight: 1.15,
          }}
        >
          With gratitude <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>to —</em>
        </motion.h2>
      </div>

      {/* 3 acknowledgement cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '28px',
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10,
      }}>
        {/* USFWS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: 'rgba(11,35,64,0.55)',
            border: '1.5px solid rgba(143,184,217,0.28)',
            borderRadius: '16px',
            padding: '34px 28px 32px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px',
            minHeight: '320px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={logoPill(78)}>
              <img src={usfwsLogo} alt="U.S. Fish & Wildlife Service" style={imgInPill(64)} />
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: '"Playfair Display"',
              fontSize: 'clamp(20px, 1.7vw, 24px)',
              fontWeight: 600,
              color: '#F4EFE4',
              lineHeight: 1.25,
              marginBottom: '10px',
            }}>
              U.S. Fish &amp; Wildlife Service
            </div>
            <p style={{
              fontFamily: '"DM Sans"',
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              color: 'rgba(200,223,240,0.85)',
              lineHeight: 1.55,
            }}>
              For the opportunity to work on real conservation data.
            </p>
          </div>
        </motion.div>

        {/* BCU + CEL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            background: 'rgba(11,35,64,0.55)',
            border: '1.5px solid rgba(143,184,217,0.28)',
            borderRadius: '16px',
            padding: '34px 28px 32px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px',
            minHeight: '320px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={logoPill(78)}>
              <img src={bcuLogo} alt="Bethune-Cookman University" style={imgInPill(64)} />
            </div>
            <div style={logoPill(78)}>
              <img src={celLogo} alt="Center for Collaborative & Experiential Learning" style={imgInPill(64)} />
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: '"Playfair Display"',
              fontSize: 'clamp(20px, 1.7vw, 24px)',
              fontWeight: 600,
              color: '#F4EFE4',
              lineHeight: 1.25,
              marginBottom: '4px',
            }}>
              Bethune-Cookman University
            </div>
            <div style={{
              fontFamily: '"DM Sans"',
              fontSize: '13px',
              fontStyle: 'italic',
              color: 'rgba(217,188,130,0.9)',
              marginBottom: '10px',
            }}>
              Center for Collaborative &amp; Experiential Learning
            </div>
            <p style={{
              fontFamily: '"DM Sans"',
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              color: 'rgba(200,223,240,0.85)',
              lineHeight: 1.55,
            }}>
              For making this internship possible.
            </p>
          </div>
        </motion.div>

        {/* Mentors */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            background: 'rgba(212,112,74,0.13)',
            border: '1.5px solid rgba(212,112,74,0.45)',
            borderRadius: '16px',
            padding: '34px 28px 32px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px',
            minHeight: '320px',
          }}
        >
          <div style={{
            width: '78px',
            height: '78px',
            borderRadius: '50%',
            background: 'rgba(212,112,74,0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Users size={36} color="rgba(232,145,110,1)" />
          </div>
          <div>
            <div style={{
              fontFamily: '"DM Sans"',
              fontSize: '12px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(232,145,110,0.95)',
              fontWeight: 600,
              marginBottom: '8px',
            }}>
              USFWS Mentors
            </div>
            <div style={{
              fontFamily: '"Playfair Display"',
              fontSize: 'clamp(22px, 1.8vw, 26px)',
              fontWeight: 600,
              color: '#F4EFE4',
              lineHeight: 1.25,
              marginBottom: '10px',
            }}>
              Caroline Walker<br />Kevin Kalasz
            </div>
            <p style={{
              fontFamily: '"DM Sans"',
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              color: 'rgba(200,223,240,0.85)',
              lineHeight: 1.55,
            }}>
              For the guidance, the questions, and every weekly meeting.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
