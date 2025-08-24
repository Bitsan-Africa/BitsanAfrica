'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Input from './ui/Input';
import Image from 'next/image';
const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const footerLinks = {
    Services: [
      { label: 'Accommodation', href: '#services' },
      { label: 'Hotels & Suites', href: '#services' },
      { label: 'WiFi Solutions', href: '#services' },
      { label: 'Real Estate', href: '#services' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'How it Works', href: '#how-it-works' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    Support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Stay Updated with Bitsan
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest news, exclusive deals, and updates on new listings delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white border-white text-neutral-900"
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  className="bg-white text-primary-500 hover:bg-neutral-100 whitespace-nowrap"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                  {!isSubscribed && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo2.png" alt="Bitsan" width={40} height={40} />
              <span className="font-heading font-bold text-2xl">Bitsan</span>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
              Your trusted platform for comfortable living solutions. From accommodation to connectivity,
              we make finding your perfect space simple and secure.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-300">
                <Mail size={16} />
                <a href="mailto:hello@bitsan.com" className="hover:text-primary-400 transition-colors duration-200">
                  hello@bitsan.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Phone size={16} />
                <a href="tel:+234-800-BITSAN" className="hover:text-primary-400 transition-colors duration-200">
                  +234-800-BITSAN
                </a>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin size={16} />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h4 className="font-heading font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 focus-ring rounded-md px-1 py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          className="border-t border-neutral-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-500 transition-all duration-200 focus-ring"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-neutral-400 text-sm text-center">
            © 2025 Bitsan. All rights reserved. Made with ❤️ for comfortable living.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;