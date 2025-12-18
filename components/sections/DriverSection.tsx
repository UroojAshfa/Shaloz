'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Work when and where you want.',
  'Get paid for each successful delivery.',
  'Access 24/7 assistance and safety features.',
];

export default function DriverSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Content */}
          <div className="space-y-6">

            {/* Badge */}
            <div>
              <span className="inline-block rounded-full p-[2px] bg-gradient-to-b from-[#14248A] to-[#2642FF]">
                <span className="block bg-white rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2">
                  BECOME A DRIVER
                </span>
              </span>
            </div>

            {/* Heading + Text */}
            <div className="space-y-4">
              <h2 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Drive When You Want
              </h2>

              <p className="text-black font-semibold text-base sm:text-lg leading-relaxed">
                Looking for a flexible way to earn? Join Shaloz and become part
                of a fast-growing delivery network that puts you in control of
                your schedule and earnings. Whether you're looking for a
                full-time gig or a side hustle, Shaloz offers a reliable way to
                make money on your terms.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center mt-0.5">
                    <Check
                      className="w-3.5 h-3.5 text-[#2642FF]"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-black font-semibold text-sm sm:text-md leading-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <Button className="bg-gradient-to-b from-[#2642FF] to-[#14248A] text-white font-semibold px-8 py-6 rounded-full">
                Get Started Now
              </Button>

              <span className="text-black text-sm sm:text-md underline decoration-[#14248A]">
                Already have an account?{' '}
                <button className="font-semibold underline decoration-[#14248A]">
                  Sign In
                </button>
              </span>
            </div>

          </div>

          {/* Image */}
          <div>
            <Card className="border-0 shadow-2xl rounded-[32px] overflow-hidden">
              <div className="relative h-[260px] sm:h-[360px] lg:h-[460px]">
                <Image
                  src="/images/image2.png"
                  alt="Driver Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
