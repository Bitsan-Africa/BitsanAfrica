'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ListingCard from './ListingCard';
import { Button } from './ui/button';

const FeaturedListings: React.FC = () => {
  const listings = [
    {
      title: "Modern Student Hostel",
      location: "City Center, Lagos",
      price: "₦45,000",
      rating: 4.8,
      reviews: 127,
      capacity: 4,
      imageQuery: "/images/hostel.png",
      features: ["WiFi included", "24/7 security", "Study areas", "Kitchen access"],
      type: "accommodation" as const,
    },
    {
      title: "Luxury Suite Downtown",
      location: "Victoria Island, Lagos",
      price: "₦120,000",
      rating: 4.9,
      reviews: 89,
      capacity: 2,
      imageQuery: "/images/hotel.png",
      features: ["Ocean view", "Room service", "Gym access", "WiFi"],
      type: "hotel" as const,
    },
    {
      title: "High-Speed Home Internet",
      location: "Ikeja, Lagos",
      price: "₦15,000",
      rating: 4.7,
      reviews: 234,
      capacity: 1,
      imageQuery: "/images/wifi.png",
      features: ["100Mbps speed", "24/7 support", "Free installation", "Router included"],
      type: "wifi" as const,
    },
    {
      title: "Family Duplex",
      location: "Lekki, Lagos",
      price: "₦350,000",
      rating: 4.6,
      reviews: 45,
      capacity: 6,
      imageQuery: "/images/duplex.png",
      features: ["3 bedrooms", "Private parking", "Garden", "Security"],
      type: "property" as const,
    },
  ];

  return (
    <section id="listings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Featured Listings
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover our handpicked selection of accommodation, hotels, connectivity, and property solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {listings.map((listing, index) => (
            <ListingCard
              key={listing.title}
              {...listing}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="secondary" size="lg">
            View all listings
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListings;