import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CaseStudyCard = ({ title, client, description, image, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-[200px] w-full bg-gray-200">
        {/* This would be replaced with an actual case study image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="text-gray-500">{image}</div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-secondary font-medium mb-2">{client}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="inline-flex items-center text-secondary font-medium hover:text-accent">
          View Case Study
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      client: "Leading GCC Bank",
      description: "Redesigned the customer service experience with conversational AI, reducing wait times by 65% and improving satisfaction scores.",
      image: "Banking Case Study Image",
      link: "/case-studies/banking-customer-service"
    },
    {
      title: "Predictive Citizen Services Platform",
      client: "Government Agency",
      description: "Created an anticipatory service platform that proactively addresses citizen needs, increasing digital adoption by 47%.",
      image: "Government Case Study Image",
      link: "/case-studies/predictive-citizen-services"
    },
    {
      title: "Intelligent Retail Experience",
      client: "Regional Retailer",
      description: "Developed an omnichannel experience that uses AI to personalize shopping journeys, driving a 32% increase in average order value.",
      image: "Retail Case Study Image",
      link: "/case-studies/intelligent-retail-experience"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore how we've helped organizations create meaningful AI experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <CaseStudyCard {...caseStudy} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/case-studies" className="btn btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
