import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AIExperienceDemo = () => {
  const [step, setStep] = useState(1);
  const [challenge, setChallenge] = useState('');
  const [userType, setUserType] = useState('');
  const [goal, setGoal] = useState('');
  const [solution, setSolution] = useState(null);
  const demoRef = useRef(null);
  
  const totalSteps = 4;
  
  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      generateSolution();
    }
  };
  
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const generateSolution = () => {
    // In a real implementation, this would call an API or use more sophisticated logic
    // This is a simplified demo version
    
    const solutionTypes = [
      {
        type: 'Conversational AI',
        description: 'A natural language interface that understands context and user intent.',
        benefits: [
          'Reduces friction in user interactions',
          'Available 24/7 across multiple channels',
          'Learns and improves from each interaction'
        ],
        image: 'Conversational AI Visualization'
      },
      {
        type: 'Predictive Dashboard',
        description: 'An intelligent interface that anticipates user needs and surfaces relevant information.',
        benefits: [
          'Proactively addresses user needs',
          'Reduces cognitive load through smart prioritization',
          'Adapts to changing user patterns over time'
        ],
        image: 'Predictive Dashboard Visualization'
      },
      {
        type: 'Intelligent Service Ecosystem',
        description: 'An interconnected system of services that work together seamlessly.',
        benefits: [
          'Creates cohesive end-to-end experiences',
          'Eliminates silos between different touchpoints',
          'Optimizes resources through intelligent routing'
        ],
        image: 'Service Ecosystem Visualization'
      }
    ];
    
    // Simple logic to select a solution type based on inputs
    let solutionIndex = 0;
    
    if (challenge.toLowerCase().includes('communication') || 
        challenge.toLowerCase().includes('support') ||
        userType.toLowerCase().includes('customer')) {
      solutionIndex = 0; // Conversational AI
    } else if (challenge.toLowerCase().includes('decision') || 
               challenge.toLowerCase().includes('insight') ||
               goal.toLowerCase().includes('predict')) {
      solutionIndex = 1; // Predictive Dashboard
    } else {
      solutionIndex = 2; // Intelligent Service Ecosystem
    }
    
    setSolution(solutionTypes[solutionIndex]);
    
    // Scroll to results if needed
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const resetDemo = () => {
    setStep(1);
    setChallenge('');
    setUserType('');
    setGoal('');
    setSolution(null);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8" ref={demoRef}>
      <h3 className="text-2xl font-bold mb-6 text-center">Experience Intelyzer's Approach</h3>
      
      <p className="text-center text-gray-600 mb-8">
        Try our interactive demo to see how we approach AI experience design.
      </p>
      
      {!solution ? (
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold mb-4">Step 1: Define the Challenge</h4>
                <p className="text-gray-600 mb-4">
                  What business challenge are you trying to solve with AI?
                </p>
                <textarea
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  rows="3"
                  placeholder="e.g., Our customer support team is overwhelmed with repetitive queries..."
                ></textarea>
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold mb-4">Step 2: Identify Key Users</h4>
                <p className="text-gray-600 mb-4">
                  Who are the primary users that will interact with this AI experience?
                </p>
                <textarea
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  rows="3"
                  placeholder="e.g., Retail customers aged 25-45 who prefer digital channels..."
                ></textarea>
              </motion.div>
            )}
            
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold mb-4">Step 3: Define Success</h4>
                <p className="text-gray-600 mb-4">
                  What outcomes would make this AI experience successful?
                </p>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  rows="3"
                  placeholder="e.g., Reduce support ticket volume by 30% while maintaining customer satisfaction..."
                ></textarea>
              </motion.div>
            )}
            
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold mb-4">Step 4: Review & Generate</h4>
                <p className="text-gray-600 mb-4">
                  Review your inputs and generate an AI experience concept.
                </p>
                <div className="bg-light p-4 rounded-md mb-4">
                  <div className="mb-3">
                    <span className="font-semibold">Challenge:</span>
                    <p>{challenge || "Not specified"}</p>
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold">Users:</span>
                    <p>{userType || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Success Criteria:</span>
                    <p>{goal || "Not specified"}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className={`px-6 py-2 rounded-md ${step === 1 ? 'invisible' : ''}`}
            >
              Back
            </button>
            
            <div className="flex items-center">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full mx-1 ${
                    index + 1 === step ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
            
            <button
              onClick={handleNextStep}
              className="btn btn-primary"
              disabled={
                (step === 1 && !challenge) ||
                (step === 2 && !userType) ||
                (step === 3 && !goal)
              }
            >
              {step === totalSteps ? 'Generate Concept' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold mb-2">Your AI Experience Concept</h4>
            <p className="text-gray-600">
              Based on your inputs, we recommend the following approach:
            </p>
          </div>
          
          <div className="bg-light rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h5 className="text-2xl font-bold mb-4 text-secondary">{solution.type}</h5>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                
                <h6 className="font-semibold mb-2">Key Benefits:</h6>
                <ul className="space-y-2 mb-6">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full md:w-1/2 bg-white rounded-lg p-4 border border-gray-200">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-500">{solution.image}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h6 className="font-semibold mb-3">How We Would Approach This:</h6>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Conduct in-depth research with your {userType || "users"} to understand their needs and pain points.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Map the current experience journey and identify opportunities for AI enhancement.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Design a {solution.type.toLowerCase()} prototype and test with real users.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Develop an implementation roadmap with clear metrics tied to your success criteria.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Assemble the right team from our network to deliver the solution.</span>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              This is a simplified version of our actual process. Contact us to learn more about our comprehensive approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetDemo}
                className="btn btn-secondary"
              >
                Try Another Concept
              </button>
              <a href="/contact" className="btn btn-primary">
                Discuss Your Project
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AIExperienceDemo;
