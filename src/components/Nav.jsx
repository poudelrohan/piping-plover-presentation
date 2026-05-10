import { ChevronLeft, ChevronRight } from 'lucide-react'

const kbdStyle = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '10px',
  background: 'rgba(217,188,130,0.12)',
  border: '1px solid rgba(217,188,130,0.3)',
  borderRadius: '4px',
  padding: '2px 6px',
  color: 'rgba(217,188,130,0.85)',
  letterSpacing: '0',
  lineHeight: 1,
}

export default function Nav({ current, total, onPrev, onNext }) {
  return (
    <>
      {/* Slide counter — bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '36px',
          zIndex: 50,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '12px',
          letterSpacing: '0.08em',
          color: 'rgba(217,188,130,0.55)',
          userSelect: 'none',
        }}
      >
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Keyboard shortcuts (A/D navigate, F fullscreen) work but the hint is hidden by request */}

      {/* Dot progress — bottom center */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i === current ? '24px' : '7px',
              height: '7px',
              borderRadius: '4px',
              background: i === current
                ? 'rgba(212,112,74,0.9)'
                : 'rgba(217,188,130,0.3)',
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        ))}
      </div>

      {/* Prev button */}
      {current > 0 && (
        <button
          onClick={onPrev}
          style={{
            position: 'absolute',
            left: '28px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 50,
            background: 'rgba(10,30,60,0.5)',
            border: '1px solid rgba(217,188,130,0.2)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'rgba(217,188,130,0.7)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(212,112,74,0.25)'
            e.currentTarget.style.borderColor = 'rgba(212,112,74,0.5)'
            e.currentTarget.style.color = 'rgba(232,145,110,1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(10,30,60,0.5)'
            e.currentTarget.style.borderColor = 'rgba(217,188,130,0.2)'
            e.currentTarget.style.color = 'rgba(217,188,130,0.7)'
          }}
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next button */}
      {current < total - 1 && (
        <button
          onClick={onNext}
          style={{
            position: 'absolute',
            right: '28px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 50,
            background: 'rgba(10,30,60,0.5)',
            border: '1px solid rgba(217,188,130,0.2)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'rgba(217,188,130,0.7)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(212,112,74,0.25)'
            e.currentTarget.style.borderColor = 'rgba(212,112,74,0.5)'
            e.currentTarget.style.color = 'rgba(232,145,110,1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(10,30,60,0.5)'
            e.currentTarget.style.borderColor = 'rgba(217,188,130,0.2)'
            e.currentTarget.style.color = 'rgba(217,188,130,0.7)'
          }}
        >
          <ChevronRight size={22} />
        </button>
      )}
    </>
  )
}
