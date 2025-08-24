'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hotel, Wifi, Home, Building } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: Hotel,
      title: "Accommodation",
      description: "Hostels and student-friendly rooms with verified hosts.",
      linkText: "Explore",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Building,
      title: "Hotels & Suites",
      description: "Book hotels and suites for short stays and travel.",
      linkText: "Book",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Wifi,
      title: "WiFi Solutions",
      description: "Fast home internet setup and network hardware.",
      linkText: "Get connected",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Listings for families and property purchasing guidance.",
      linkText: "Browse",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Everything you need for comfortable living
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            From accommodation to connectivity, we've got all your essential needs covered in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;