import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { name: 'Strategic AI Experience Design', href: '/services/strategic-ai-experience-design' },
      { name: 'Intelligent Service Ecosystems', href: '/services/intelligent-service-ecosystems' },
      { name: 'Multimodal Conversational Experiences', href: '/services/multimodal-conversational-experiences' },
      { name: 'Anticipatory Experience Design', href: '/services/anticipatory-experience-design' },
      { name: 'Data Strategy & AI Governance', href: '/services/data-strategy-ai-governance' },
    ],
    industries: [
      { name: 'Fintech & Financial Services', href: '/industries/fintech-financial-services' },
      { name: 'Government & Public Services', href: '/industries/government-public-services' },
      { name: 'Energy & Utilities', href: '/industries/energy-utilities' },
      { name: 'Retail & E-Commerce', href: '/industries/retail-ecommerce' },
    ],
    about: [
      { name: 'Our Story', href: '/about#story' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Network Experts', href: '/about#network' },
      { name: 'Values', href: '/about#values' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="font-heading font-bold text-2xl text-white mb-4">INTELYZER</div>
            <p className="text-gray-300 mb-6">
              Bridging human insight and machine intelligence to design what's next.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Intelyzer. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Contact: info@intelyzer.com | +971 XX XXX XXXX
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
