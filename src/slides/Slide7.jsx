import { motion } from 'framer-motion'
import { Map, Compass, Satellite, Layers, ExternalLink } from 'lucide-react'
import Birds from '../components/Birds'

const TOOLS = [
  {
    icon: Compass,
    name: 'Bird Migration Explorer',
    org: 'Audubon · built on ArcGIS Online',
    desc: 'Interactive maps showing where birds travel across the year, including critical wintering and breeding sites.',
  },
  {
    icon: Layers,
    name: 'IPaC',
    org: 'Information for Planning and Consultation',
    desc: 'USFWS tool that flags how proposed projects might affect listed species and their habitats.',
  },
  {
    icon: Satellite,
    name: 'Migratory Bird Data Center',
    org: 'USFWS · GPS telemetry analysis',
    desc: 'Analyzes tracking data to inform conservation planning and population monitoring.',
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
      padding: '60px 80px 100px',
    }}>
      <Birds density="sparse" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px', zIndex: 10 }}>
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
          Feeding into the tools that <em style={{ color: 'rgba(217,188,130,0.95)', fontStyle: 'italic' }}>visualize bird data</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: '"DM Sans"',
            fontSize: 'clamp(17px, 1.5vw, 20px)',
            color: 'rgba(200,223,240,0.85)',
            marginTop: '14px',
            maxWidth: '1100px',
          }}
        >
          The U.S. Fish & Wildlife Service and partners use ArcGIS and other geospatial platforms to map and analyze bird tracking data. A clean, standardized dataset makes feeding into these tools possible.
        </motion.p>
      </div>

      {/* ArcGIS pill — the foundation tech */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '12px 24px',
          background: 'rgba(217,188,130,0.12)',
          border: '1.5px solid rgba(217,188,130,0.45)',
          borderRadius: '32px',
          marginBottom: '36px',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
        }}
      >
        <Map size={20} color="rgba(217,188,130,1)" />
        <span style={{
          fontFamily: '"DM Sans"',
          fontSize: '15px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(217,188,130,1)',
          fontWeight: 600,
        }}>
          Powered by ArcGIS
        </span>
      </motion.div>

      {/* 3 tool cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10,
      }}>
        {TOOLS.map((tool, i) => {
          const Icon = tool.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: 'rgba(11,35,64,0.6)',
                border: '1.5px solid rgba(143,184,217,0.28)',
                borderRadius: '16px',
                padding: '28px 30px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Subtle glow */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '160px',
                height: '160px',
                background: 'radial-gradient(circle, rgba(143,184,217,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Top: icon + external link mark */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '18px',
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(143,184,217,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={24} color="rgba(143,184,217,1)" />
                </div>
                <ExternalLink size={18} color="rgba(143,184,217,0.45)" />
              </div>

              {/* Tool name */}
              <div style={{
                fontFamily: '"Playfair Display"',
                fontSize: 'clamp(20px, 1.7vw, 24px)',
                fontWeight: 600,
                color: '#F4EFE4',
                lineHeight: 1.2,
                marginBottom: '6px',
              }}>
                {tool.name}
              </div>

              {/* Org */}
              <div style={{
                fontFamily: '"DM Sans"',
                fontSize: '12.5px',
                letterSpacing: '0.06em',
                color: 'rgba(217,188,130,0.85)',
                marginBottom: '16px',
                fontStyle: 'italic',
              }}>
                {tool.org}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: '"DM Sans"',
                fontSize: '15px',
                color: 'rgba(200,223,240,0.88)',
                lineHeight: 1.55,
                fontWeight: 400,
                flex: 1,
              }}>
                {tool.desc}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Closing line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '36px',
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
          fontSize: 'clamp(16px, 1.5vw, 19px)',
          color: 'rgba(217,188,130,0.95)',
          textAlign: 'center',
          maxWidth: '780px',
          lineHeight: 1.5,
        }}>
          Clean data is what makes any of this possible.
        </p>
        <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, rgba(217,188,130,0.5), transparent)' }} />
      </motion.div>
    </div>
  )
}
