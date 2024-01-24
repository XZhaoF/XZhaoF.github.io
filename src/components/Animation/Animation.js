import React, { useState, useEffect, useRef } from 'react'
import NET from '../../../node_modules/vanta/dist/vanta.net.min.js'
import './Animation.css'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Animation = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)


  useEffect(() => {
    const initializeAnimation = () => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400,
          minWidth: 400,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xe634c4,
          points: 20.00,
          maxDistance: 16.00,
          spacing: 18.00,
          showDots: false
        }))
      }
    }

    if (document.readyState === 'complete') {
      initializeAnimation();
    } else {
      window.addEventListener('load', initializeAnimation);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
        window.removeEventListener('load', initializeAnimation);
    }
  }, [vantaEffect])


  return <div ref={myRef} className="animation-bg">
  </div>

}

export default Animation

