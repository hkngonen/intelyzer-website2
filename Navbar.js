import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Strategic AI Experience Design', href: '/services/strategic-ai-experience-design' },
      { name: 'Intelligent Service Ecosystems', href: '/services/intelligent-service-ecosystems' },
      { name: 'Multimodal Conversational Experiences', href: '/services/multimodal-conversational-experiences' },
      { name: 'Anticipatory Experience Design', href: '/services/anticipatory-experience-design' },
      { name: 'Data Strategy & AI Governance', href: '/services/data-strategy-ai-governance' },
    ]
  },
  { name: 'Approach', href: '/approach' },
  { 
    name: 'Industries', 
    href: '/industries',
    dropdown: [
      { name: 'Fintech & Financial Services', href: '/industries/fintech-financial-services' },
      { name: 'Government & Public Services', href: '/industries/government-public-services' },
      { name: 'Energy & Utilities', href: '/industries/energy-utilities' },
      { name: 'Retail & E-Commerce', href: '/industries/retail-ecommerce' },
    ]
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-10">
              {/* Replace with actual logo */}
              <div className="font-heading font-bold text-2xl">INTELYZER</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <button 
                      className="flex items-center font-medium hover:text-accent"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div 
                        className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link 
                            key={dropdownIndex} 
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm hover:bg-light hover:text-accent"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="font-medium hover:text-accent">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn btn-primary">
              Work with Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-primary"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t"
        >
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                {item.dropdown ? (
                  <div>
                    <button 
                      className="flex items-center justify-between w-full font-medium"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.name}
                      <svg 
                        className={`ml-1 w-4 h-4 transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link 
                            key={dropdownIndex} 
                            href={dropdownItem.href}
                            className="block py-1 text-sm hover:text-accent"
                            onClick={toggleMobileMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className="block font-medium hover:text-accent"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/contact" className="btn btn-primary w-full text-center" onClick={toggleMobileMenu}>
                Work with Us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
