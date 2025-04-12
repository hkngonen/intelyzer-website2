import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NetworkExpertiseVisualizer = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [experts, setExperts] = useState([]);
  
  // Expert data - in a real implementation, this would come from an API or CMS
  const expertData = [
    { id: 1, name: 'UX Design', count: 8, category: 'design', color: '#006D77' },
    { id: 2, name: 'Service Design', count: 6, category: 'design', color: '#2a9d8f' },
    { id: 3, name: 'Conversation Design', count: 5, category: 'design', color: '#3a9d8f' },
    { id: 4, name: 'Visual Design', count: 7, category: 'design', color: '#4a9d8f' },
    { id: 5, name: 'Frontend Development', count: 9, category: 'development', color: '#FF6B6B' },
    { id: 6, name: 'Backend Development', count: 7, category: 'development', color: '#e76f51' },
    { id: 7, name: 'AI Engineering', count: 6, category: 'development', color: '#f4a261' },
    { id: 8, name: 'Data Science', count: 5, category: 'development', color: '#e9c46a' },
    { id: 9, name: 'Business Strategy', count: 4, category: 'strategy', color: '#264653' },
    { id: 10, name: 'AI Strategy', count: 6, category: 'strategy', color: '#364653' },
    { id: 11, name: 'Digital Transformation', count: 5, category: 'strategy', color: '#464653' },
    { id: 12, name: 'Change Management', count: 3, category: 'strategy', color: '#564653' },
    { id: 13, name: 'Fintech', count: 7, category: 'industry', color: '#8338ec' },
    { id: 14, name: 'Government', count: 5, category: 'industry', color: '#7209b7' },
    { id: 15, name: 'Energy', count: 4, category: 'industry', color: '#560bad' },
    { id: 16, name: 'Retail', count: 6, category: 'industry', color: '#3a0ca3' },
  ];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setExperts(expertData);
    } else {
      setExperts(expertData.filter(expert => expert.category === activeFilter));
    }
  }, [activeFilter]);
  
  const filters = [
    { id: 'all', label: 'All Expertise' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'industry', label: 'Industry' },
  ];
  
  // Calculate the size of each bubble based on the count
  const getSize = (count) => {
    const baseSize = 60;
    const scale = 10;
    return baseSize + (count * scale);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Explore Our Network Expertise</h3>
      
      <p className="text-center text-gray-600 mb-8">
        Discover the breadth and depth of expertise available in our collective.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`px-4 py-2 rounded-full transition-colors duration-200 ${
              activeFilter === filter.id 
                ? 'bg-secondary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="relative h-[500px] border border-gray-100 rounded-lg p-4 overflow-hidden">
        <motion.div
          layout
          className="relative w-full h-full"
        >
          {experts.map((expert) => (
            <motion.div
              key={expert.id}
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: Math.random() * 600,
                y: Math.random() * 400,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute rounded-full flex items-center justify-center text-white text-center cursor-pointer"
              style={{ 
                backgroundColor: expert.color,
                width: getSize(expert.count),
                height: getSize(expert.count),
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="p-2">
                <div className="font-bold text-sm">{expert.name}</div>
                <div className="text-xs">{expert.count} experts</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-6 text-center text-gray-600">
        <p>Our network includes {expertData.length} expertise areas with {expertData.reduce((sum, expert) => sum + expert.count, 0)} specialists.</p>
        <p className="mt-2 text-sm">Hover over bubbles to see details. Filter by category to explore specific areas.</p>
      </div>
    </div>
  );
};

export default NetworkExpertiseVisualizer;
