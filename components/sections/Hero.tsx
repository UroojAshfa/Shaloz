'use client';

import React, { useState } from 'react';
import { MapPin, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState('404, Juniper Blvd S');
  const [dropoffLocation, setDropoffLocation] = useState('384, Marytime St.');
  const [packageWeight, setPackageWeight] = useState('');

  return (
    <section className="w-full py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Column */}
          <div>
            <h1 className="text-[30px] sm:text-[36px] lg:text-[48px] xl:text-[56px] font-bold leading-tight mb-6">
              Fast, Secure and
              <span className="block">Hassle-Free</span>
              <span
                className="block"
                style={{
                  background:
                    'linear-gradient(to bottom, #14248A, #14248A, #2642FF)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Package Delivery
              </span>
            </h1>

            <Card className="bg-white border-0 shadow-xl rounded-3xl p-5 sm:p-6 lg:p-8 space-y-5">
              
              {/* Pickup */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MapPin className="w-4 h-4 text-[#2642FF]" fill="#2642FF" />
                  Pickup Location
                </div>
                <div className="relative">
                  <Input
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="bg-gray-50 border-0 h-11 pr-10"
                  />
                  <MapPin className="w-4 h-4 text-[#2642FF] absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Dropoff */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MapPin className="w-4 h-4 text-[#2642FF]" fill="#2642FF" />
                  Dropoff Location
                </div>
                <div className="relative">
                  <Input
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="bg-gray-50 border-0 h-11 pr-10"
                  />
                  <MapPin className="w-4 h-4 text-[#2642FF] absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Package className="w-4 h-4 text-[#2642FF]" />
                  Package Weight
                </div>
                <div className="flex gap-3">
                  <div className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-600">
                    lbs
                  </div>
                  <Input
                    placeholder="Enter package weight"
                    value={packageWeight}
                    onChange={(e) => setPackageWeight(e.target.value)}
                    className="bg-gray-50 border-0 h-11"
                  />
                </div>
              </div>

              <Button className="w-full h-12 rounded-full bg-gradient-to-b from-[#2642FF] to-[#14248A] font-semibold">
                See Price
              </Button>
            </Card>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Card className="border-0 shadow-2xl rounded-[28px] overflow-hidden">
              <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
                <Image
                  src="/images/image.png"
                  alt="Delivery"
                  fill
                  className="object-contain"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between">
                  <p className="text-white font-semibold text-sm sm:text-base">
                    Grow With Every Delivery
                  </p>
                  <Button className="bg-[#2642FF] hover:bg-[#14248A] rounded-lg px-5">
                    Get started
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
