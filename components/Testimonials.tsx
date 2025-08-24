'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Babatunde Olaoluwa",
      role: "University Student",
      content: "Bitsan made finding accommodation so easy! The hostel I booked was exactly as described, and the WiFi setup in my room was incredibly fast. Perfect for my studies.",
      rating: 5,
      avatar: "portrait young woman smiling student",
      location: "Lagos, Nigeria"
    },
    {
      name: "Michael Chen",
      role: "Digital Nomad",
      content: "As someone who travels frequently, having reliable internet is crucial. Bitsan's WiFi solutions are top-notch, and their hotel bookings always deliver quality stays.",
      rating: 5,
      avatar: "portrait young man professional",
      location: "Abuja, Nigeria"
    },
    {
      name: "Aminah Ibrahim",
      role: "Family Mother",
      content: "We found our dream home through Bitsan's real estate service. The team was professional, transparent, and helped us every step of the way. Highly recommend!",
      rating: 5,
      avatar: "portrait middle aged woman smiling",
      location: "Port Harcourt, Nigeria"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Bitsan for their living solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-bitsan-sm hover:shadow-bitsan-card transition-all duration-300 border border-neutral-200"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote icon */}
              <motion.div
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Quote className="text-primary-500" size={20} />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  <div className="text-xs text-neutral-500">{testimonial.location}</div>
                </div>
              </div>
              
              {/* TODO: Replace avatar placeholder with actual image */}
              {/* UNSPLASH QUERY: {testimonial.avatar} */}
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-neutral-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">1,200+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="font-medium">4.8/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">500+ Verified Listings</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;