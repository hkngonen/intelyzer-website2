import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudyExplorer = () => {
  const [activeFilters, setActiveFilters] = useState({
    industry: 'all',
    service: 'all'
  });
  
  // Case study data - in a real implementation, this would come from an API or CMS
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      client: "Leading GCC Bank",
      description: "Redesigned the customer service experience with conversational AI, reducing wait times by 65% and improving satisfaction scores.",
      image: "Banking Case Study Image",
      industry: "fintech",
      services: ["conversational", "strategic"],
      link: "/case-studies/banking-customer-service"
    },
    {
      id: 2,
      title: "Predictive Citizen Services Platform",
      client: "Government Agency",
      description: "Created an anticipatory service platform that proactively addresses citizen needs, increasing digital adoption by 47%.",
      image: "Government Case Study Image",
      industry: "government",
      services: ["anticipatory", "intelligent"],
      link: "/case-studies/predictive-citizen-services"
    },
    {
      id: 3,
      title: "Intelligent Retail Experience",
      client: "Regional Retailer",
      description: "Developed an omnichannel experience that uses AI to personalize shopping journeys, driving a 32% increase in average order value.",
      image: "Retail Case Study Image",
      industry: "retail",
      services: ["intelligent", "anticipatory"],
      link: "/case-studies/intelligent-retail-experience"
    },
    {
      id: 4,
      title: "Energy Management AI Assistant",
      client: "Utility Provider",
      description: "Built a conversational AI assistant that helps customers optimize energy usage, resulting in 15% average reduction in consumption.",
      image: "Energy Case Study Image",
      industry: "energy",
      services: ["conversational", "data"],
      link: "/case-studies/energy-management-assistant"
    },
    {
      id: 5,
      title: "Financial Advisory Experience",
      client: "Investment Firm",
      description: "Created an AI-powered advisory platform that provides personalized investment recommendations, increasing client engagement by 40%.",
      image: "Finance Case Study Image",
      industry: "fintech",
      services: ["anticipatory", "data"],
      link: "/case-studies/financial-advisory-experience"
    },
    {
      id: 6,
      title: "Smart City Service Ecosystem",
      client: "Municipal Authority",
      description: "Designed an integrated service ecosystem connecting multiple city services through a unified AI experience layer.",
      image: "Smart City Case Study Image",
      industry: "government",
      services: ["intelligent", "strategic"],
      link: "/case-studies/smart-city-service-ecosystem"
    }
  ];
  
  const industryFilters = [
    { id: 'all', label: 'All Industries' },
    { id: 'fintech', label: 'Fintech & Financial Services' },
    { id: 'government', label: 'Government & Public Services' },
    { id: 'energy', label: 'Energy & Utilities' },
    { id: 'retail', label: 'Retail & E-Commerce' }
  ];
  
  const serviceFilters = [
    { id: 'all', label: 'All Services' },
    { id: 'strategic', label: 'Strategic AI Experience Design' },
    { id: 'intelligent', label: 'Intelligent Service Ecosystems' },
    { id: 'conversational', label: 'Multimodal Conversational Experiences' },
    { id: 'anticipatory', label: 'Anticipatory Experience Design' },
    { id: 'data', label: 'Data Strategy & AI Governance' }
  ];
  
  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const industryMatch = activeFilters.industry === 'all' || caseStudy.industry === activeFilters.industry;
    const serviceMatch = activeFilters.service === 'all' || caseStudy.services.includes(activeFilters.service);
    return industryMatch && serviceMatch;
  });
  
  const handleFilterChange = (filterType, value) => {
    setActiveFilters({
      ...activeFilters,
      [filterType]: value
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Explore Our Work</h3>
      
      <p className="text-center text-gray-600 mb-8">
        Filter and browse our case studies to see how we've helped organizations like yours.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="font-semibold mb-3">Filter by Industry:</h4>
          <div className="flex flex-wrap gap-2">
            {industryFilters.map(filter => (
              <button
                key={filter.id}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                  activeFilters.industry === filter.id 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => handleFilterChange('industry', filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Filter by Service:</h4>
          <div className="flex flex-wrap gap-2">
            {serviceFilters.map(filter => (
              <button
                key={filter.id}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                  activeFilters.service === filter.id 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => handleFilterChange('service', filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCaseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative h-[160px] w-full bg-gray-200">
                {/* This would be replaced with an actual case study image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="text-gray-500">{caseStudy.image}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-secondary font-medium mb-2">{caseStudy.client}</div>
                <h3 className="text-lg font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{caseStudy.description}</p>
                <a 
                  href={caseStudy.link}
                  className="inline-flex items-center text-secondary font-medium hover:text-accent"
                >
                  View Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredCaseStudies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No case studies match your current filters.</p>
          <button
            className="mt-4 btn btn-secondary"
            onClick={() => setActiveFilters({ industry: 'all', service: 'all' })}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CaseStudyExplorer;
