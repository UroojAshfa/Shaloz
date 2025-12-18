'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import {
  Camera,
  Smartphone,
  Monitor,
  Package,
  Users,
  MapPin,
  Coins,
} from 'lucide-react';

const steps = [
  {
    step: 'STEP 1',
    title: 'Customer Places An Order',
    description:
      'Customers place an order from your store or app in a few taps, choosing when and where they want it delivered, just like any normal checkout experience.',
    image: '/images/image3.png',
    points: [
      { text: 'Orders appear instantly in your Shaloz dashboard.', icon: Camera },
      { text: 'No extra apps or new steps needed for customers.', icon: Smartphone },
    ],
  },
  {
    step: 'STEP 2',
    title: 'Business Prepares The Order',
    description:
      'Your team picks, packs, and confirms the order, while Shaloz automatically finds a driver to pick up and keeps every detail in sync.',
    image: '/images/image4.png',
    points: [
      { text: 'All steps take delivery-ready days in one place.', icon: Monitor },
      { text: 'You see which orders are ready at a glance.', icon: Package },
    ],
  },
  {
    step: 'STEP 3',
    title: 'Driver Picks Up The Order',
    description:
      'Once you mark the order as ready, Shaloz assigns a driver, who arrives at your business and confirms pickup.',
    image: '/images/image5.png',
    points: [
      { text: 'Driver matching based on distance and timing.', icon: Users },
      { text: 'Pickup details are visible to you and the customer.', icon: Coins },
    ],
  },
  {
    step: 'STEP 4',
    title: 'Driver Delivers To The Customer',
    description:
      "The driver follows an optimized route and delivers the order smoothly to the customer's door with real-time tracking.",
    image: '/images/image6.png',
    points: [
      { text: 'Customers receive tracking links and proof of delivery.', icon: MapPin },
      { text: 'You monitor every delivery from the dashboard.', icon: Monitor },
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-5">
            <span className="inline-block rounded-full p-[2px] bg-gradient-to-b from-[#14248A] to-[#2642FF]">
              <span className="block bg-white rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2">
                OUR VALUES
              </span>
            </span>
          </div>

          <h2 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-8 sm:space-y-10">
          {steps.map((item, index) => (
            <Card
              key={index}
              className="bg-gray-100 border-0 shadow-lg rounded-[28px] px-5 py-8 sm:px-8 lg:px-16 lg:py-16"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-5 text-center lg:text-left ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  {/* Step badge */}
                  <div className="flex justify-center lg:justify-start">
                    <span className="inline-block rounded-full p-[2px] bg-gradient-to-b from-[#14248A] to-[#2642FF]">
                      <span className="block bg-white rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2">
                        {item.step}
                      </span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Points */}
                  <div className="space-y-3 pt-2">
                    {item.points.map((point, i) => {
                      const Icon = point.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-3 justify-center lg:justify-start"
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-gray-700" />
                          </div>
                          <span className="text-black text-sm sm:text-base font-semibold leading-snug">
                            {point.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }
                >
                  <Card className="border-0 shadow-xl rounded-[24px] overflow-hidden bg-transparent">
                    <div className="relative h-[220px] sm:h-[280px] lg:h-[340px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
