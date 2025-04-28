// src/components/sections/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      // Animación de entrada
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      // Animación de salida
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',       // cubrir 100% ancho ventana
        minHeight: '100vh',   // cubrir alto completo
        textAlign: 'center',
        color: '#FFFFFF',
        background: 'radial-gradient(circle at center, #08150E 0%, #020503 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Polígonos de fondo */}
      <img
        src="/background/Polygon7.png"
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '33%',
          opacity: 0.3,
          pointerEvents: 'none'
        }}
      />
      <img
        src="/background/Polygon8.png"
        alt=""
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '25%',
          opacity: 0.3,
          pointerEvents: 'none'
        }}
      />

      {/* Subtítulo pequeño */}
      <span style={{
        marginBottom: '1rem',
        color: '#F5A31F',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'Poppins, sans-serif'
      }}>
        What We Do
      </span>

      {/* Título grande */}
      <h1 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '62px',
        lineHeight: '81px',
        margin: '0 0 1.5rem'
      }}>
        We Build and Scale<br/>
        Tech and Data Enabled Companies
      </h1>

      {/* Descripción */}
      <p style={{
        maxWidth: '906px',
        margin: '0 0 2.5rem',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '28px',
        fontWeight: 300,
        lineHeight: 1.5
      }}>
        We are a Studio Founded by Serial Entrepreneurs partnering<br/>
        with Top-Talent Founders
      </p>

      {/* Botón CTA */}
      <button style={{
        padding: '0.75rem 2rem',
        backgroundColor: '#F5A31F',
        color: '#1F3429',
        border: 'none',
        borderRadius: '9999px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        cursor: 'pointer'
      }}>
        Contact
      </button>
    </motion.section>
  )
}
