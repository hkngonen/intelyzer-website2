import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const IndustryCard = ({ title, description, image, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-lg shadow-md group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 z-10"></div>
      <div className="relative h-[300px] w-full bg-gray-200">
        {/* This would be replaced with an actual industry image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="text-gray-500">{image}</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <Link href={link} className="inline-flex items-center text-white font-medium hover:text-accent">
          Explore
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "Fintech & Financial Services",
      description: "AI-powered experiences that enhance customer trust and operational efficiency.",
      image: "Fintech Image",
      link: "/industries/fintech-financial-services"
    },
    {
      title: "Government & Public Services",
      description: "Citizen-centric digital experiences that improve service delivery and engagement.",
      image: "Government Image",
      link: "/industries/government-public-services"
    },
    {
      title: "Energy & Utilities",
      description: "Smart solutions that optimize operations and enhance customer experiences.",
      image: "Energy Image",
      link: "/industries/energy-utilities"
    },
    {
      title: "Retail & E-Commerce",
      description: "Personalized shopping experiences that drive conversion and loyalty.",
      image: "Retail Image",
      link: "/industries/retail-ecommerce"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Industry Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Specialized AI experience design solutions for key industries in the GCC region.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <IndustryCard {...industry} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
