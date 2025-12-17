'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Reduce late and failed deliveries',
  'Give customers clear, live tracking',
  'Get simple onboarding and dedicated support'
];

export default function BusinessGrowth() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div>
          <Card className="overflow-hidden border-0 shadow-2xl rounded-[2rem] bg-transparent">
                   
            <div className="aspect-square p-0 flex items-center justify-center">
              {/* Illustration placeholder - Replace with actual image */}
              <div className="relative w-full h-full">
            <Image src="/images/image1.png" alt="Business Growth Illustration" fill className="object-contain"
                />
      </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6 pl-10">
          {/* Badge */}
          <div className="pl-8">
          <span className="inline-block rounded-full p-[2px] bg-gradient-to-b from-[#14248A] via-[#14248A] to-[#2642FF]">
            <span className="block bg-white rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2">
              REGISTER YOUR BUSINESS
            </span>
            </span>
          </div>

          {/* Heading */}
          <div className="pl-10">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              Grow With Every Delivery
            </h2>
            <br/>
            <p className="text-black leading-normal font-semibold text-lg">
              Struggling to keep local deliveries running smoothly? <br/>
              Register your business and unlock a smarter, always-on <br/>
              delivery network built for reliable local shipping.
            </p>
          </div>

          {/* Benefits List */}
          <div className=" pl-10 space-y-3 pt-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#2642FF]" strokeWidth={3} />
                </div>
                <span className="text-black leading-normal font-semibold text-md">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="pl-10 flex flex-wrap gap-4 items-center pt-2">
            <Button className="bg-gradient-to-b from-[#2642FF] via-[#2642FF] to-[#14248A] text-white font-semibold px-8 py-6 rounded-full">
              Get Started Now
            </Button>
            <Button variant="link" className="text-gray-700 font-medium p-0 hover:text-[#2642FF]">
              Check out our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}