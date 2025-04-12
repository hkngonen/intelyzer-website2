import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceMatcher = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  
  const questions = [
    {
      id: 1,
      question: "What is your primary goal for implementing AI experiences?",
      options: [
        { value: "customer_experience", label: "Enhance customer experiences" },
        { value: "operational_efficiency", label: "Improve operational efficiency" },
        { value: "new_products", label: "Create new products or services" },
        { value: "business_transformation", label: "Transform business model" }
      ]
    },
    {
      id: 2,
      question: "Which stage are you at in your AI journey?",
      options: [
        { value: "exploring", label: "Exploring possibilities" },
        { value: "planning", label: "Planning implementation" },
        { value: "implementing", label: "Currently implementing" },
        { value: "optimizing", label: "Optimizing existing solutions" }
      ]
    },
    {
      id: 3,
      question: "What is your biggest challenge with AI implementation?",
      options: [
        { value: "strategy", label: "Defining the right strategy" },
        { value: "user_adoption", label: "Ensuring user adoption" },
        { value: "integration", label: "Integration with existing systems" },
        { value: "governance", label: "Data governance and ethics" },
        { value: "measurement", label: "Measuring ROI and impact" }
      ]
    },
    {
      id: 4,
      question: "Which industry sector do you operate in?",
      options: [
        { value: "fintech", label: "Fintech & Financial Services" },
        { value: "government", label: "Government & Public Services" },
        { value: "energy", label: "Energy & Utilities" },
        { value: "retail", label: "Retail & E-Commerce" },
        { value: "other", label: "Other" }
      ]
    },
    {
      id: 5,
      question: "What timeline are you considering for your project?",
      options: [
        { value: "immediate", label: "Immediate (1-3 months)" },
        { value: "short", label: "Short-term (3-6 months)" },
        { value: "medium", label: "Medium-term (6-12 months)" },
        { value: "long", label: "Long-term (12+ months)" }
      ]
    }
  ];
  
  const serviceRecommendations = {
    strategic: {
      title: "Strategic AI Experience Design",
      description: "Our comprehensive approach to aligning AI capabilities with business goals and user needs.",
      match: "High match based on your need for strategic direction and business transformation.",
      link: "/services/strategic-ai-experience-design"
    },
    intelligent: {
      title: "Intelligent Service Ecosystems",
      description: "Creating interconnected service systems that leverage AI to deliver seamless experiences.",
      match: "Recommended for your operational efficiency and integration challenges.",
      link: "/services/intelligent-service-ecosystems"
    },
    conversational: {
      title: "Multimodal Conversational Experiences",
      description: "Natural, context-aware interactions across voice, text, and visual interfaces.",
      match: "Ideal for your customer experience enhancement goals.",
      link: "/services/multimodal-conversational-experiences"
    },
    anticipatory: {
      title: "Anticipatory Experience Design",
      description: "Predictive interfaces that understand user needs before they're expressed.",
      match: "Strong fit for your business transformation and new product development goals.",
      link: "/services/anticipatory-experience-design"
    },
    data: {
      title: "Data Strategy & AI Governance",
      description: "Frameworks for ethical AI use, data management, and continuous improvement.",
      match: "Recommended based on your governance and measurement challenges.",
      link: "/services/data-strategy-ai-governance"
    }
  };
  
  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [step]: answer
    });
    
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      // Calculate results based on answers
      calculateResults();
    }
  };
  
  const calculateResults = () => {
    // This is a simplified recommendation algorithm
    // In a real implementation, this would be more sophisticated
    
    let recommendations = [];
    
    // Primary goal based recommendations
    if (answers[1] === "customer_experience") {
      recommendations.push("conversational", "anticipatory");
    } else if (answers[1] === "operational_efficiency") {
      recommendations.push("intelligent", "data");
    } else if (answers[1] === "new_products") {
      recommendations.push("strategic", "anticipatory");
    } else if (answers[1] === "business_transformation") {
      recommendations.push("strategic", "intelligent");
    }
    
    // Challenge based recommendations
    if (answers[3] === "strategy") {
      recommendations.push("strategic");
    } else if (answers[3] === "user_adoption") {
      recommendations.push("conversational");
    } else if (answers[3] === "integration") {
      recommendations.push("intelligent");
    } else if (answers[3] === "governance") {
      recommendations.push("data");
    } else if (answers[3] === "measurement") {
      recommendations.push("data", "strategic");
    }
    
    // Count occurrences to find top recommendations
    const counts = recommendations.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    
    // Sort by count
    const sortedRecommendations = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    
    // Take top 3 recommendations
    const topRecommendations = sortedRecommendations.slice(0, 3);
    
    // Create results object with full service details
    const resultServices = topRecommendations.map(key => serviceRecommendations[key]);
    
    setResults(resultServices);
  };
  
  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
    setResults(null);
  };
  
  const currentQuestion = questions.find(q => q.id === step);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Find the Right Services for Your Needs</h3>
      
      {!results ? (
        <>
          <div className="mb-8">
            <p className="text-center text-gray-600 mb-6">
              Answer a few questions to get personalized service recommendations.
            </p>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold mb-4">
                  {currentQuestion.question}
                </h4>
                
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      className="w-full text-left p-4 border border-gray-200 rounded-md hover:border-secondary hover:bg-light transition-colors duration-200"
                      onClick={() => handleAnswer(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-8">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-secondary h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${(step / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Question {step} of {questions.length}
            </p>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold mb-2">Your Recommended Services</h4>
            <p className="text-gray-600">
              Based on your answers, we recommend the following services:
            </p>
          </div>
          
          <div className="space-y-6 mb-8">
            {results.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 hover:border-secondary transition-colors duration-200"
              >
                <h5 className="text-lg font-bold mb-2">{service.title}</h5>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <p className="text-secondary font-medium mb-4">{service.match}</p>
                <a 
                  href={service.link}
                  className="text-secondary hover:text-accent font-medium flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="btn btn-secondary"
            >
              Start Over
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceMatcher;
