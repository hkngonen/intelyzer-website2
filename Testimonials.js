import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name, position, company, logo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 relative">
      <div className="text-5xl text-secondary/20 absolute top-4 left-4">"</div>
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          {logo && (
            <div className="mr-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
                {logo}
              </div>
            </div>
          )}
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm text-gray-600">{position}, {company}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Intelyzer's network-based approach allowed us to access senior expertise across multiple disciplines, delivering a solution that exceeded our expectations.",
      name: "Sarah Al-Mansouri",
      position: "Chief Digital Officer",
      company: "GCC Financial Group",
      logo: "Logo"
    },
    {
      quote: "The team's deep understanding of both AI capabilities and human needs helped us create an experience that truly resonates with our citizens.",
      name: "Mohammed Al-Farsi",
      position: "Director of Innovation",
      company: "Ministry of Digital Transformation",
      logo: "Logo"
    },
    {
      quote: "Working with Intelyzer transformed our approach to customer experience. Their anticipatory design methodology has given us a competitive edge.",
      name: "Layla Qasim",
      position: "Head of Customer Experience",
      company: "Gulf Retail Holdings",
      logo: "Logo"
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
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Hear from organizations we've helped to create meaningful AI experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
