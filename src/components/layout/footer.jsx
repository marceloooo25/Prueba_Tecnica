// src/components/layout/Footer.jsx
import React from 'react'
import { motion } from 'framer-motion'

// Assets (asegúrate de tener estos SVG en tu carpeta de íconos)
import envelopeIcon from '../../assets/images/icons/Group 52.png'
import linkedinIcon from '../../assets/images/icons/Group46.png'

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#000000',
        color: '#FFFFFF',
        padding: '3rem 1rem 2rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Línea divisoria */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <hr style={{
          border: 0,
          borderTop: '1px solid rgba(255,255,255,0.2)',
          marginBottom: '2rem'
        }} />
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {/* Texto a la izquierda */}
        <p style={{ margin: 0, fontSize: '1rem' }}>
          Edificio Design Center
        </p>

        {/* Contacto e iconos a la derecha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img
              src={envelopeIcon}
              alt="email"
              style={{ width: 62, height: 62 }}
            />
            <a
              href="mailto:contactus@gmail.com"
              style={{
                color: '#FFFFFF',
                fontSize: '1rem',
                textDecoration: 'underline',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              contactus@gmail.com
            </a>
          </div>
          <a href="#linkedin">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              style={{ width: 50, height: 50 }}
            />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
