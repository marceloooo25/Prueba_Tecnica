import React from 'react'
import './styles/global.css';
import 'normalize.css';
import Hero             from './components/sections/hero'
import WhatWeDo         from './components/sections/whatwedo'
import CompanyPortfolio from './components/sections/companyporfolio'
import Navbar           from './components/layout/navbar'
import WhoWeAre from './components/sections/whoweare'
import FoundingPartners from './components/sections/Foundingpartners';
import TrustedBy        from './components/sections/trustedby'
import ContactUsSimple from './components/sections/contactus';
import Footer from './components/layout/footer';


export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <WhatWeDo />
      <WhoWeAre/>
      <FoundingPartners/>
      <TrustedBy/>
      <CompanyPortfolio />
      <ContactUsSimple/>
      <Footer/>
    </>
  )
}