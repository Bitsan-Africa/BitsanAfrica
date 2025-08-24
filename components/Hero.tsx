'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-neutral-100 pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight"
              variants={itemVariants}
            >
              Comfort, connectivity, and property —{' '}
              <span className="text-primary-500">all in one place</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-neutral-700 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              Find hostels, hotels, strong home internet, or the perfect property —
              curated and trusted for seamless living.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button variant="default" size="lg">
                Book now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Explore services
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-neutral-600"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Verified listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-500" />
                <span>Secure payments</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-bitsan-card">
              <Image
                src="/images/hero.png"
                alt="Modern comfortable living space with WiFi connectivity - representing Bitsan's accommodation and connectivity services"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with logo and text */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <img 
                      src="/images/logo2.png" 
                      alt="Bitsan" 
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="text-lg font-medium opacity-90">
                    Your comfort & connectivity hub
                  </p>
                </div>
              </div>
            </div>

            {/* Floating cards for visual interest */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-bitsan-sm border border-neutral-200"
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: -12 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-neutral-700">
                  1,200+ Happy customers
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-bitsan-sm border border-neutral-200"
              initial={{ scale: 0, rotate: 8 }}
              animate={{ scale: 1, rotate: 8 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-xs font-medium text-neutral-700">
                  Trusted platform
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;