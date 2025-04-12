import React from 'react';
import { motion } from 'framer-motion';
import ServiceMatcher from '../components/features/ServiceMatcher';
import NetworkExpertiseVisualizer from '../components/features/NetworkExpertiseVisualizer';
import CaseStudyExplorer from '../components/features/CaseStudyExplorer';
import AIExperienceDemo from '../components/features/AIExperienceDemo';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive AI experience design services delivered by our network of senior specialists.
            </motion.p>
          </div>
          
          <ServiceMatcher />
        </div>
      </section>
      
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
              Our Service Pillars
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Five core service areas that work together to create meaningful AI experiences.
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {/* Strategic AI Experience Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Strategic AI Experience Design</h3>
                <p className="text-gray-600 mb-4">
                  We help organizations develop comprehensive AI strategies that align with business goals and user needs. Our approach ensures that AI implementations deliver meaningful value rather than just implementing technology for its own sake.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Experience Opportunity Assessment
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Experience Vision & Roadmap Development
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Business Case & Value Modeling
                  </li>
                </ul>
                <a href="/services/strategic-ai-experience-design" className="btn btn-secondary">
                  Learn More
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[300px] w-full rounded-lg bg-light overflow-hidden">
                  {/* This would be replaced with an actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="font-bold text-xl mb-4">Strategic AI Experience Design</div>
                      <div className="text-gray-500">Visualization would go here</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Intelligent Service Ecosystems */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative order-1 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Intelligent Service Ecosystems</h3>
                <p className="text-gray-600 mb-4">
                  We design interconnected service systems that leverage AI to deliver seamless experiences across multiple touchpoints. Our approach ensures that AI implementations work together cohesively rather than as isolated solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Service Ecosystem Mapping
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Intelligent Service Orchestration
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cross-Channel Experience Design
                  </li>
                </ul>
                <a href="/services/intelligent-service-ecosystems" className="btn btn-secondary">
                  Learn More
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative h-[300px] w-full rounded-lg bg-light overflow-hidden">
                  {/* This would be replaced with an actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="font-bold text-xl mb-4">Intelligent Service Ecosystems</div>
                      <div className="text-gray-500">Visualization would go here</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Additional service pillars would follow the same pattern */}
          </div>
        </div>
      </section>
      
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
              Experience Our Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Try our interactive demo to see how we approach AI experience design.
            </motion.p>
          </div>
          
          <AIExperienceDemo />
        </div>
      </section>
      
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
              Our Network Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Explore the breadth and depth of expertise available in our collective.
            </motion.p>
          </div>
          
          <NetworkExpertiseVisualizer />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
