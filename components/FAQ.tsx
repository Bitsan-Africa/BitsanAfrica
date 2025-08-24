'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      className="border border-neutral-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <button
        className="w-full p-6 text-left bg-white hover:bg-neutral-50 focus:bg-neutral-50 focus-ring transition-colors duration-200 flex items-center justify-between"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-heading font-semibold text-neutral-900 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={20} className="text-primary-500 flex-shrink-0" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div 
              id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
              className="p-6 pt-0 text-neutral-700 leading-relaxed"
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How does Bitsan verify its listings?",
      answer: "We have a rigorous verification process that includes identity checks for all hosts, property inspections, and regular quality assessments. Every listing is personally reviewed by our team before going live."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, bank transfers, and mobile money payments. All payments are processed securely through our encrypted payment system with fraud protection."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel your booking according to the cancellation policy of each listing. Most of our accommodations offer flexible cancellation up to 24-48 hours before check-in. Full details are provided during booking."
    },
    {
      question: "Do you offer customer support?",
      answer: "Absolutely! Our customer support team is available 24/7 through phone, email, and live chat. We're here to help with bookings, technical issues, or any questions about our services."
    },
    {
      question: "How quickly can WiFi be installed?",
      answer: "WiFi installation typically takes 2-5 business days depending on your location and the type of connection. Our technicians will contact you within 24 hours of booking to schedule the installation."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! All costs are clearly displayed during booking. The price you see includes all applicable taxes and service fees. We believe in transparent pricing."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, booking process, and policies.
          </p>
        </motion.div>

        <div className="space-y-4" role="region" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-neutral-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@bitsan.com"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-400 transition-colors duration-200 focus-ring rounded-md px-2 py-1"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;