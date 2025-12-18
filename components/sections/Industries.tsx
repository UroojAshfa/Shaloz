'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import {
  ShoppingCart,
  Flower,
  UtensilsCrossed,
  Store,
  Sofa,
  Wrench,
  Package,
  ShoppingBag,
  FileText,
  Hammer,
} from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Offer same-day delivery to your customers without building your own delivery i...',
  },
  {
    icon: Flower,
    title: 'Florists & Gift Shops',
    description:
      'Deliver fresh flowers and gifts same-day within your local market with real-tima...',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Kitchens',
    description:
      'Own your delivery channel instead of paying high fees to third-party delivery apps...',
  },
  {
    icon: Store,
    title: 'Local Retailers',
    description:
      'Delight local customers with same-day delivery to your neighborhood. Stand out wi...',
  },
  {
    icon: Sofa,
    title: 'Furniture & Home Decor',
    description:
      'Deliver bulky furniture and home goods same-day to local customers. Handle up...',
  },
  {
    icon: Wrench,
    title: 'Auto Parts Stores',
    description:
      'Deliver heavy parts same-day to mechanics and customers within 100 miles...',
  },
  {
    icon: Package,
    title: 'Pet Supply Stores',
    description:
      'Deliver pet food, supplies, and accessories same-day to pet parents. Keep their ta...',
  },
  {
    icon: ShoppingBag,
    title: 'Grocery',
    description:
      'Deliver fresh groceries, meal kits, and specialty foods to local customers within hour...',
  },
  {
    icon: FileText,
    title: 'Office Supply Companies',
    description:
      'B2B same-day delivery for office supplies, equipment, and materials to keep busi...',
  },
  {
    icon: Hammer,
    title: 'Hardware Supply',
    description:
      'Get heavy building materials and tools to contractors and DIYers sa...',
  },
];

export default function Industries() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block mb-5">
            <span className="inline-block rounded-full p-[2px] bg-gradient-to-b from-[#14248A] to-[#2642FF]">
              <span className="block bg-white rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2">
                INDUSTRIES
              </span>
            </span>
          </div>

          <h2 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Ideal For Local Shippers
          </h2>
        </div>

        {/* Industries Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-6
            justify-items-center sm:justify-items-stretch
          "
        >
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="
                bg-gray-50 border-0 rounded-2xl
                p-5 sm:p-6
                w-full max-w-[285px]
                h-auto sm:h-[270px]
                hover:shadow-lg transition-shadow
              "
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <industry.icon
                    className="w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm sm:text-base pt-6 sm:pt-10">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-md text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
