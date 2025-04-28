// src/components/sections/WhatWeDo.jsx
import React from 'react'
import { motion } from 'framer-motion'
import buildsIcon   from '../../assets/images/icons/Union.png'
import softwareIcon from '../../assets/images/icons/Union1.png'
import fundingIcon  from '../../assets/images/icons/Vectors.png'

export default function WhatWeDo() {
  return (
    <motion.section
      id="what-we-do"
      // Estado inicial (fuera de vista)
      initial={{ opacity: 0, y: 30 }}
      // Estado animado (en vista)
      animate={{ opacity: 1, y: 0 }}
      // Estado al salir (cuando navegues fuera)
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      style={{
        /* Mismo fondo oscuro radial que el Hero */
        background: 'radial-gradient(circle at center, #08150E 0%, #020503 100%)',
        width: '100vw',
        padding: '6rem 1rem',
        boxSizing: 'border-box',
        /* Línea sutil verde abajo */
        borderBottom: '1px solid rgba(31, 52, 41, 0.5)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}
      >
        {[
          {
            icon: buildsIcon,
            title: 'Builds',
            text: 'Build and Scale Tech and Data-Enabled Companies with Top-Talent Founders and Teams'
          },
          {
            icon: softwareIcon,
            title: 'Software and AI',
            text: 'Develop Software, AI, and Data Capabilities into Portfolio Companies'
          },
          {
            icon: fundingIcon,
            title: 'Funding',
            text: 'Support Portfolio Companies in obtaining Capital to Scale'
          }
        ].map(({ icon, title, text }) => (
          <div
            key={title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={icon}
              alt={title}
              style={{
                width: '30px',
                height: '33.3px',
                marginBottom: '1rem',
                opacity: 0.8
              }}
            />
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                color: '#F5A31F'
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                color: '#FFFFFF',
                maxWidth: '16rem',
                lineHeight: 1.5
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
