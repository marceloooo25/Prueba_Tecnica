// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const links = ['What We Do', 'Who We Are', 'Company Portfolio', 'Tora Labs', 'Contact Us']
  const [active, setActive] = useState('')

  // Secciones con fondo claro
  const lightSections = ['who-we-are', 'company-portfolio', 'contact-us']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3
      links.forEach(text => {
        const id = text.toLowerCase().replace(/\s+/g, '-')
        const section = document.getElementById(id)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [links])

  // ¿Es sección clara?
  const isLight = lightSections.includes(active)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isLight
          ? 'rgba(254, 250, 244, 0.85)'  // crema semitransparente
          : 'rgba(8, 21, 14, 0.75)',      // verde oscuro semitransparente
        backdropFilter: 'saturate(180%) blur(10px)', // suaviza el fondo
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 100,
        transition: 'background-color 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1.5rem',
          padding: '0 2rem',
        }}
      >
        {links.map(text => {
          const id = text.toLowerCase().replace(/\s+/g, '-')
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              style={{
                color: isLight ? '#1F3429' : '#FFFFFF',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0',
                fontWeight: isActive ? 600 : 400,
                padding: '0.5rem 0',
                transition: 'color 0.2s ease, font-weight 0.2s ease'
              }}
            >
              {text}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
