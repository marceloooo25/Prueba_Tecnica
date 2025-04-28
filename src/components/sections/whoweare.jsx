// src/components/sections/WhoWeAre.jsx
import React from 'react'
import { motion } from 'framer-motion'

import deepTechIcon from '../../assets/images/icons/Vector.svg'
import reachIcon     from '../../assets/images/icons/Vector1.svg'
import dataIcon      from '../../assets/images/icons/Vector2.svg'
import teamsIcon     from '../../assets/images/icons/Vector3.svg'
import foundersIcon  from '../../assets/images/icons/Group44.svg'
import rectangleImg  from '../../assets/images/icons/Rectangle14.png'
import polygonImg    from '../../assets/images/icons/Polygon5.png'

const items = [
  { title: 'Deep Tech Expertise',    desc: 'Experts in Hardware, Software, Data, and AI',                     icon: deepTechIcon },
  { title: 'Reach and Scale',         desc: '5M+ Users, 500K Daily Transactions in B2C, B2B & B2G Verticals in 6 Countries', icon: reachIcon },
  { title: 'Large-Scale Data',        desc: '100Billion+ Data Events and Petabytes Processed in the Cloud',   icon: dataIcon },
  { title: 'Global Teams',            desc: '+1000 employees in distributed teams',                         icon: teamsIcon },
  { title: 'Proven Founders in Tech', desc: '2 Exits, 3 Cash-Generating Companies, 1 Unicorn, and $150M+ of Capital Raised', icon: foundersIcon },
]

function Card({ item, idx }) {
  return (
    <motion.div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 340,
        height: 80,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      {/* Ícono + polígono fuera del rectángulo */}
      <div style={{
        position: 'absolute',
        top: 5,
        left: -37,
        width: 70,
        height: 74,
        zIndex: 2,
      }}>
        <img
          src={polygonImg}
          alt="decorative polygon"
          style={{ width: '100%', height: '100%' }}
        />
        <img
          src={item.icon}
          alt={item.title}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 24,
            height: 24,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Rectángulo de fondo */}
      <img
        src={rectangleImg}
        alt="card background"
        style={{
          width: '100%',
          height: '110%',
          objectFit: 'cover',
          borderRadius: 8,
        }}
      />

      {/* Texto de la tarjeta */}
      <div style={{
        position: 'absolute',
        top: 12,
        left: 56,
        right: 12,
        bottom: 12,
        textAlign: 'left',
        color: '#FFFFFF',
        fontFamily: 'Poppins, sans-serif',
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, lineHeight: 1.2 }}>
          {item.title}
        </h3>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.4, margin: '0.25rem 0 0' }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhoWeAre() {
  const firstRow  = items.slice(0, 3)
  const secondRow = items.slice(3)

  return (
    <section
      id="who-we-are"
      style={{
        background: '#FEFAF4',
        padding: '6rem 1rem',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          display: 'block',
          color: '#F5A31F',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>
          WHO WE ARE
        </span>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '2rem',
          fontWeight: 400,
          color: '#1F3429',
          margin: '0 auto 3rem',
          lineHeight: 1.3,
          maxWidth: 900
        }}>
          Founders, Advisors, and Investors with a Unique Track Record in LATAM and the US
        </h2>

        {/* Primera fila: 3 columnas, gap aumentado */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem',
          justifyItems: 'center'
        }}>
          {firstRow.map((item, idx) => (
            <Card key={item.title} item={item} idx={idx} />
          ))}
        </div>

        {/* Segunda fila: 2 cards centrados, gap aumentado */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '3rem'
        }}>
          {secondRow.map((item, idx) => (
            <Card key={item.title} item={item} idx={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
