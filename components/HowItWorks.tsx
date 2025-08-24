'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Check, Home } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Search & Discover",
      description: "Browse our curated listings for accommodation, WiFi, or property solutions that match your needs.",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: Check,
      title: "Book & Confirm",
      description: "Secure your choice with our verified booking system and get instant confirmation.",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      icon: Home,
      title: "Move In & Enjoy",
      description: "Experience seamless living with our trusted network of hosts and service providers.",
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            How Bitsan Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Getting started is simple. Follow these three steps to find your perfect living solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-neutral-300 transform -translate-y-1/2 z-0"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-neutral-300 transform -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 text-center shadow-bitsan-sm border border-neutral-200 hover:shadow-bitsan-card transition-shadow duration-300">
                <motion.div
                  className={`w-20 h-20 ${step.bg} rounded-full flex items-center justify-center mx-auto mb-6 ${step.color}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon size={32} />
                </motion.div>
                
                <div className="mb-4 text-primary-500 font-bold text-lg">
                  Step {index + 1}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;