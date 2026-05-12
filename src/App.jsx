import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav'
import FooterLogos from './components/FooterLogos'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import SlideObjectives from './slides/SlideObjectives'
import Slide3 from './slides/Slide3'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import SlideResults from './slides/SlideResults'
import Slide7 from './slides/Slide7'
import SlideNext from './slides/SlideNext'
import SlideAcknowledgements from './slides/SlideAcknowledgements'
import Slide8 from './slides/Slide8'

const SLIDES = [
  Slide1,                 // 1: Title
  Slide2,                 // 2: About PIPL
  SlideObjectives,        // 3: Project Objectives
  Slide3,                 // 4: Data Sources
  Slide5,                 // 5: Pipeline (methodology)
  Slide6,                 // 6: Workflow
  SlideResults,           // 7: Results
  Slide7,                 // 8: ArcGIS / Where data goes
  SlideNext,              // 9: What's Next + Reflections
  SlideAcknowledgements,  // 10: Acknowledgements (NEW)
  Slide8,                 // 11: Questions
]

// Slide direction for animation
let direction = 1

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.3 },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
    transition: {
      x: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25 },
    },
  }),
}

export default function App() {
  const [current, setCurrent] = useState(() => {
    const m = typeof window !== 'undefined' && window.location.search.match(/[?&]s=(\d+)/)
    return m ? Math.max(0, Math.min(SLIDES.length - 1, parseInt(m[1], 10) - 1)) : 0
  })
  const [dir, setDir] = useState(1)

  const goNext = useCallback(() => {
    if (current < SLIDES.length - 1) {
      setDir(1)
      setCurrent(c => c + 1)
    }
  }, [current])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDir(-1)
      setCurrent(c => c - 1)
    }
  }, [current])

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {})
    } else {
      document.exitFullscreen?.().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      // Ignore when user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      const k = e.key.toLowerCase()
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || k === 'd') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || k === 'a') {
        e.preventDefault()
        goPrev()
      } else if (k === 'f') {
        e.preventDefault()
        toggleFullscreen()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, toggleFullscreen])

  const SlideComponent = SLIDES[current]

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: '#061525',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="grain"
    >
      {/* Aspect-locked stage. Locked at 16:9 so layout stays consistent
          on ultrawide (3440x1440) and standard displays alike. */}
      <div
        style={{
          width: 'min(100vw, calc(100vh * 16 / 9))',
          height: 'min(100vh, calc(100vw * 9 / 16))',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>

        <Nav
          current={current}
          total={SLIDES.length}
          onNext={goNext}
          onPrev={goPrev}
        />

        <FooterLogos />
      </div>
    </div>
  )
}
