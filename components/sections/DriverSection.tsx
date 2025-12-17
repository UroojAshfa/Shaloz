'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Work when and where you want.',
  'Get paid for each successful delivery.',
  'Access 24/7 assistance and safety features.'
];

export default function DriverSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div>
            <span className="inline-block rounded-full p-[2px] bg-gradient-to-b from-[#14248A] via-[#14248A] to-[#2642FF]">
            <span className="block bg-white rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2">
              BECOME A DRIVER
            </span>
            </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 leading-tight">
                Drive When You Want
              </h2>
              <p className="text-black leading-normal font-semibold text-lg">
                Looking for a flexible way to earn? Join Shaloz and become <br/>
                part of a fast-growing delivery network that puts you in <br/>
                control of your schedule and earnings. Whether you're <br/>
                looking for a full-time gig or a side hustle, Shaloz offers a <br/>
                reliable way to make money on your terms.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#2642FF]" strokeWidth={3} />
                  </div>
                  <span className="text-black leading-normal font-semibold text-md">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 items-center pt-4">
              <Button className="bg-gradient-to-b from-[#2642FF] via-[#2642FF] to-[#14248A] text-white font-semibold px-8 py-6 rounded-full">
                Get Started Now
              </Button>
              <span className="text-black leading-normal font- text-md underline decoration-[#14248A]" >
                Already have an account?{' '}
                <button className="text-black leading-normal font-semibold text-md underline decoration-[#14248A]">
                  Sign In
                </button>
              </span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div >
            <Card className="overflow-hidden border-0 shadow-2xl rounded-[2.5rem]">
                  
              <div className="aspect-[4/4] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                <div className=" relative max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto bg-transparent" >
        <Image src="/images/image2.png" alt="Business Growth Illustration" layout="intrinsic"  width={800} height={1000} className="object-cover"
        />
      </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}