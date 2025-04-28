// src/components/sections/ContactUs.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactUsSimple() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto desde web: ${form.name}`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    )
    window.location.href = `mailto:tu@correo.com?subject=${subject}&body=${body}`
  }

  return (
    <motion.section
      id="contact-us"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#020503',
        padding: '6rem 1rem',
        color: '#FFF',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          display: 'block',
          color: '#F5A31F',
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '22px',
          marginBottom: '1rem'
        }}>
          CONTACT US
        </span>
        <h2 style={{
          fontFamily: 'Poppins',
          fontSize: '36px',
          fontWeight: 400,
          color: '#FFF',
          margin: '0 auto 2rem',
          lineHeight: 1.3,
          maxWidth: 600
        }}>
          Tech and Talent – Unleashed
        </h2>

        <form onSubmit={handleSubmit} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div>
            <label style={{ display:'block', marginBottom:4, color:'#FFF', textAlign:'left' }}>
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={{
                width:'100%', padding:'0.75rem', borderRadius:4, border:'none', fontSize:'1rem'
              }}
            />
          </div>
          <div>
            <label style={{ display:'block', marginBottom:4, color:'#FFF', textAlign:'left' }}>
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              style={{
                width:'100%', padding:'0.75rem', borderRadius:4, border:'none', fontSize:'1rem'
              }}
            />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display:'block', marginBottom:4, color:'#FFF', textAlign:'left' }}>
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              style={{
                width:'100%', padding:'0.75rem', borderRadius:4, border:'none', fontSize:'1rem'
              }}
            />
          </div>
        </form>

        <button
          onClick={handleSubmit}
          style={{
            background:'#F5A31F',
            color:'#FFF',
            padding:'0.75rem 2rem',
            border:'none',
            borderRadius:9999,
            cursor:'pointer',
            fontFamily:'Poppins, sans-serif',
            fontWeight:600,
            fontSize:'1rem'
          }}
        >
          Send Message
        </button>
      </div>
    </motion.section>
  )
}
