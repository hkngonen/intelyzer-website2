import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import NetworkApproach from '../components/sections/NetworkApproach';
import Industries from '../components/sections/Industries';
import CaseStudies from '../components/sections/CaseStudies';
import Testimonials from '../components/sections/Testimonials';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <NetworkApproach />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <ContactSection />
    </>
  );
}
