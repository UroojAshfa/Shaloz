'use client';

import React, { useState } from 'react';
import { MapPin, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Image from "next/image";

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState('404, Juniper Blvd S');
  const [dropoffLocation, setDropoffLocation] = useState('384, Marytime St.');
  const [packageWeight, setPackageWeight] = useState('');

  return (
    <section className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Form */}
        <div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
            Fast, Secure and
            <br />
            Hassle-Free
            <br />
            <span style={{
        background: 'linear-gradient(to bottom, #14248A, #14248A, #2642FF)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>Package Delivery</span>
          </h1>

          <Card className="p-8 space-y-6 bg-white border-0 shadow-xl rounded-3xl">
            {/* Pickup Location */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <MapPin className="w-4 h-4 text-[#2642FF]" fill="#2642FF" />
                <span>Pickup Location</span>
              </div>
              <div className="relative">
                <Input
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="bg-gray-50 border-0 h-12 pr-10 text-gray-900"
                />
                <MapPin className="w-4 h-4 text-[#2642FF] absolute right-3 top-1/2 -translate-y-1/2" fill="#2642FF" />
              </div>
            </div>

            {/* Dropoff Location */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <MapPin className="w-4 h-4 text-[#2642FF]" fill="#2642FF" />
                <span>Dropoff Location</span>
              </div>
              <div className="relative">
                <Input
                  type="text"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="bg-gray-50 border-0 h-12 pr-10 text-gray-900"
                />
                <MapPin className="w-4 h-4 text-[#2642FF] absolute right-3 top-1/2 -translate-y-1/2" fill="#2642FF" />
              </div>
            </div>

            {/* Package Weight */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Package className="w-4 h-4 text-[#2642FF]" />
                <span>Package weight</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-sm text-gray-600 font-medium">lbs</span>
                </div>
                <Input
                  type="text"
                  placeholder="Please enter the weight of your parcel here"
                  value={packageWeight}
                  onChange={(e) => setPackageWeight(e.target.value)}
                  className="flex-1 bg-gray-50 border-0 h-12 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* See Price Button */}
            <Button className="w-full bg-gradient-to-b from-[#2642FF] via-[#2642FF] to-[#14248A] text-white h-14 text-base font-semibold rounded-full">
              See Price
            </Button>
          </Card>
        </div>

        {/* Right Column - Image Card */}
        <div className="relative">
          <Card className="overflow-hidden border-0 shadow-2xl rounded-[2rem]">
            <div className="aspect-square relative">
              {/* Background cityscape and illustration would go here */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Placeholder for illustration - replace with actual image */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-white/30 text-center text-sm">
                  <Image src="/images/image.png" alt="Delivery" fill className="object-contain" />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-4">
                  <div className="text-white">
                    <p className="font-semibold text-base lg:text-lg">Grow With Every Delivery</p>
                  </div>
                  <Button className="bg-[#2642FF] hover:bg-[#14248A] text-white font-semibold px-6 py-2 rounded-lg shadow-lg">
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}