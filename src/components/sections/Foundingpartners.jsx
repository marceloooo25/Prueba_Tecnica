// src/components/sections/FoundingPartners.jsx
import React from 'react'
import { motion } from 'framer-motion'

// Assets
import hexagonOutline from '../../assets/images/icons/Polygon5.png'
import linkedinIcon   from '../../assets/images/icons/Group46.png'

const partners = [
  {
    name: 'Gian Carlo Juarez',
    role: 'Founding & General Partner',
    description:
      'Founder, advisor, and executive with over 20 years of experience in technology and operations. Skilled in building and scaling B2B2C marketplace companies across diverse industries, with a strong track record in driving growth and innovation.',
    linkedin: '#'
  },
  {
    name: 'Juan Rodríguez',
    role: 'Founding & General Partner',
    description:
      'Professional with over 20 years of experience as an entrepreneur, advisor, board member, investor, and executive. Former founder and CEO of a technology company. Demonstrated ability to leverage innovative technologies in real-world contexts across consumer, business, and government sectors.',
    linkedin: '#'
  }
]

function PartnerCard({ partner, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        position: 'relative',
        background: '#FFFFFF',
        border: '1px solid #1F3429',
        borderRadius: 8,
        padding: '3rem 2rem 2.5rem',
        boxSizing: 'border-box',
        overflow: 'visible'
      }}
    >
      {/* Hexágono outline */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          width: 130,
          height: 130,
          transform: 'translateX(-50%)',
          zIndex: 1
        }}
      >
        <img
          src={hexagonOutline}
          alt="hexagon"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Nombre y rol */}
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <h3
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#1F3429',
            margin: '0 0 0.25rem'
          }}
        >
          {partner.name}
        </h3>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#1F3429',
            margin: 0
          }}
        >
          {partner.role}
        </p>
      </div>

      {/* Descripción */}
      <p
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.95rem',
          lineHeight: 1.5,
          color: '#1F3429',
          margin: '1.5rem 0 3rem',
          textAlign: 'left'
        }}
      >
        {partner.description}
      </p>

      {/* LinkedIn + botón */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href={partner.linkedin} style={{ display: 'inline-block' }}>
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            style={{ width: 32, height: 32 }}
          />
        </a>
        <a
          href="#"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#F5A31F',
            border: '2px solid #F5A31F',
            borderRadius: 9999,
            padding: '0.5rem 1.25rem',
            textDecoration: 'none',
            alignSelf: 'flex-end'
          }}
        >
          Read More
        </a>
      </div>
    </motion.div>
  )
}

export default function FoundingPartners() {
  return (
    <section
      id="founding-partners"
      style={{
        background: 'linear-gradient(90deg, #FFFB57 -200%, #F5A31F 100%)',
        padding: '6rem 1rem 8rem',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#1F3429',
            marginBottom: '2.5rem'
          }}
        >
          Founding Partners
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {partners.map((p, i) => (
            <PartnerCard key={p.name} partner={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
