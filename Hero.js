import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Bridging Human Insight and Machine Intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Designing meaningful, AI-augmented experiences that drive customer value and operational excellence in the GCC region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary">
                Work With Us
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 overflow-hidden">
              {/* This would be replaced with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-bold text-3xl mb-4">AI Experience Design</div>
                  <div className="text-lg">Visualization would go here</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
