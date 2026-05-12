import bcuLogo from '../assets/bculogo.png'
import usfwsLogo from '../assets/USFWSlogo.png'
import celLogo from '../assets/CELlogo.jpg'

const pillStyle = {
  background: 'rgba(244, 239, 228, 0.94)',
  borderRadius: '8px',
  padding: '4px 9px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 10px rgba(0,0,0,0.28)',
}

const imgStyle = {
  height: '30px',
  width: 'auto',
  display: 'block',
}

export default function FooterLogos() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '22px',
        right: '26px',
        display: 'flex',
        gap: '10px',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <div style={pillStyle}>
        <img src={bcuLogo} alt="Bethune-Cookman University" style={imgStyle} />
      </div>
      <div style={pillStyle}>
        <img src={usfwsLogo} alt="U.S. Fish & Wildlife Service" style={imgStyle} />
      </div>
      <div style={pillStyle}>
        <img src={celLogo} alt="Center for Collaborative Experiential Learning" style={imgStyle} />
      </div>
    </div>
  )
}
