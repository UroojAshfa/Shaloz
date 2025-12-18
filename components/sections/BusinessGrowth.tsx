'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Reduce late and failed deliveries',
  'Give customers clear, live tracking',
  'Get simple onboarding and dedicated support',
];

export default function BusinessGrowth() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Image */}
          <div>
            <Card className="border-0 shadow-2xl rounded-[28px] overflow-hidden bg-transparent">
              <div className="relative h-[260px] sm:h-[340px] lg:h-[420px]">
                <Image
                  src="/images/image1.png"
                  alt="Business Growth Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6 text-left">

            {/* Badge */}
            <div>
              <span className="inline-block rounded-full p-[2px] bg-gradient-to-b from-[#14248A] to-[#2642FF]">
                <span className="block bg-white rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2">
                  REGISTER YOUR BUSINESS
                </span>
              </span>
            </div>

            {/* Heading + Text */}
            <div className="space-y-4">
              <h2 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Grow With Every Delivery
              </h2>

              <p className="text-black font-semibold text-base sm:text-lg leading-relaxed">
                Struggling to keep local deliveries running smoothly? Register your
                business and unlock a smarter, always-on delivery network built
                for reliable local shipping.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center mt-0.5">
                    <Check
                      className="w-3.5 h-3.5 text-[#2642FF]"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-black font-semibold text-sm sm:text-md leading-normal">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-gradient-to-b from-[#2642FF] to-[#14248A] text-white font-semibold px-8 py-6 rounded-full">
                Get Started Now
              </Button>

              <Button
                variant="link"
                className="text-gray-700 font-medium p-0 hover:text-[#2642FF]"
              >
                Check out our Solutions
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
