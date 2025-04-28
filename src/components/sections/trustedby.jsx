// src/components/sections/TrustedBy.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Carga todos los JPG de /src/assets/images/Logos como URLs
const logoModules = import.meta.glob('../../assets/images/Logos/*.jpg', {
  eager: true,
  as: 'url',
});
const logos = Object.values(logoModules);

// Variants comunes para la animación
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedLogo({ src, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-20px', once: false });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt=""
      style={{
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
      }}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    />
  );
}

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      style={{
        background: '#FFFFFF',
        padding: '6rem 1rem',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <span
          style={{
            display: 'block',
            color: '#F5A31F',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            marginBottom: '1rem',
          }}
        >
          TRUSTED BY
        </span>
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
            fontWeight: 400,
            color: '#1F3429',
            margin: '0 auto 3rem',
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          Leading Brands and Industry Experts
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
            rowGap: '2rem', 
            justifyContent: 'center',
          }}
        >
          {logos.map((src, idx) => (
            <AnimatedLogo key={idx} src={src} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
