'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href?: string;
  delay?: number;
  gradient?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  linkText,
  href = "#",
  delay = 0,
  gradient = "from-primary-500 to-primary-600"
}) => {
  return (
    <motion.div
      className="group card hover:shadow-bitsan-card transition-all duration-300"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex flex-col gap-4 h-full">
        <motion.div 
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={24} />
        </motion.div>
        
        <div className="flex-1">
          <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        <motion.a
          href={href}
          className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-400 transition-colors duration-200 focus-ring rounded-md p-1 -m-1"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {linkText}
          <ArrowRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;