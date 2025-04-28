// src/components/sections/CompanyPortfolio.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tus imágenes del carrusel
import luka      from '../../assets/images/carrusel/luka.jpeg'
import payit     from '../../assets/images/carrusel/payit.jpeg'
import ri        from '../../assets/images/carrusel/ri.jpeg'
import roka      from '../../assets/images/carrusel/roka.jpeg'
import sostengo  from '../../assets/images/carrusel/sostengo.jpeg'
import toralabs  from '../../assets/images/carrusel/toralabs.jpeg'

const logos = [luka, payit, ri, roka, sostengo, toralabs]

// Variantes para el slide
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
}

export default function CompanyPortfolio() {
  // page = índice del primer logo que se muestra
  // direction = +1 ó -1 para la animación
  const [[page, direction], setPage] = useState([0, 0])
  const logosPerPage = 3
  const pageCount    = logos.length  // avanzamos de 1 en 1 hasta logos.length

  // Cambia de página (avanza o retrocede 1)
  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      const next = (prevPage + newDirection + pageCount) % pageCount
      return [next, newDirection]
    })
  }

  // Autoplay cada 10s
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [])

  // Construye el array de 3 logos desde `page`, con wrap-around
  const display = Array.from({ length: logosPerPage }, (_, i) =>
    logos[(page + i) % logos.length]
  )

  return (
    <section
      id="company-portfolio"
      style={{
        background: '#FEFAF4',
        padding: '6rem 1rem',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <span
          style={{
            display: 'block',
            color: '#F5A31F',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            marginBottom: '1rem'
          }}
        >
          COMPANY PORTFOLIO
        </span>
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
            fontWeight: 400,
            color: '#1F3429',
            margin: '0 auto 3rem',
            lineHeight: 1.3,
            maxWidth: 800
          }}
        >
          We Build Tech and Data Companies with Top Founders
        </h2>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Flecha anterior */}
          <button
            onClick={() => paginate(-1)}
            style={{
              background: 'transparent',
              border: '1px solid #1F3429',
              borderRadius: '50%',
              width: 40,
              height: 40,
              cursor: 'pointer',
              fontSize: '1.25rem',
              marginRight: 10,
              color: '#1F3429'
            }}
          >
            ‹
          </button>

          {/* Contenedor receptáculo */}
          <div
            style={{
              overflow: 'hidden',
              width: logosPerPage * 220, // 3 × (ancho imagen + gap)
              height: 120
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  gap: 20
                }}
              >
                {display.map((src, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 200,
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flecha siguiente */}
          <button
            onClick={() => paginate(1)}
            style={{
              background: 'transparent',
              border: '1px solid #1F3429',
              borderRadius: '50%',
              width: 40,
              height: 40,
              cursor: 'pointer',
              fontSize: '1.25rem',
              marginLeft: 10,
              color: '#1F3429'
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
