'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import FeaturedListings from '@/components/FeaturedListings';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <HowItWorks />
        <FeaturedListings />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}