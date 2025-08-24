'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Wifi } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

interface ListingCardProps {
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  capacity: number;
  imageQuery: string;
  features: string[];
  type: 'accommodation' | 'hotel' | 'wifi' | 'property';
  delay?: number;
}

const ListingCard: React.FC<ListingCardProps> = ({
  title,
  location,
  price,
  rating,
  reviews,
  capacity,
  imageQuery,
  features,
  type,
  delay = 0
}) => {
  const typeColors = {
    accommodation: 'bg-blue-100 text-blue-700',
    hotel: 'bg-green-100 text-green-700',
    wifi: 'bg-purple-100 text-purple-700',
    property: 'bg-orange-100 text-orange-700'
  };

  const typeLabels = {
    accommodation: 'Hostel',
    hotel: 'Hotel',
    wifi: 'WiFi',
    property: 'Property'
  };

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-bitsan-sm hover:shadow-bitsan-card transition-all duration-300 group border border-neutral-200"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
        {/* TODO: Replace with actual image - UNSPLASH QUERY: {imageQuery} */}
       <Image src={imageQuery} alt={title} fill className="object-cover" />

        {/* Type badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium ${typeColors[type]}`}>
          {typeLabels[type]}
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md flex items-center gap-1">
          <Star size={12} className="text-yellow-500 fill-current" />
          <span className="text-xs font-medium text-neutral-700">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-heading font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-neutral-600 mb-3">
          <MapPin size={14} />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{capacity} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <span>({reviews} reviews)</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-md text-xs"
            >
              {feature}
            </span>
          ))}
          {features.length > 2 && (
            <span className="text-xs text-neutral-500">
              +{features.length - 2} more
            </span>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-neutral-900">{price}</span>
            <span className="text-sm text-neutral-500 ml-1">/month</span>
          </div>
          <Button variant="default" size="sm">
            Book now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;