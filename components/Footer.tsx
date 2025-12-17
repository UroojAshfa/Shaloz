'use client';

import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const navigationLinks = [
  'Home',
  'About Us',
  'Earn',
  'FAQs',
  'Help',
  'Track Shipping',
];

const industryLinks = [
  'E-commerce',
  'Florist & Gift Shops',
  'Restaurants & Kitchen',
  'Local Retailers',
  'Furniture & Home Decor',
  'Auto Parts',
  'Pets Store',
  'Grocery',
  'Office Supplies',
  'Hardware Supply',
];

const infoLinks = ['Contact', 'Blogs'];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2B2A30] to-[#0B0A0E] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* Top Row */}
        <div className="flex items-center justify-between mb-14 flex-wrap">
          <div className="relative h-8 w-28">
            <Image
              src="/images/logooo.png"
              alt="Shaloz Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-md text-white-400 hover:text-gray-400 cursor-pointer">
            Visit Help Center
          </span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Navigation */}
          <div>
            <h4 className="text-md font-bold mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-white">
              {navigationLinks.map((link) => (
                <li key={link} className="hover:text-gray-400 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-md font-bold mb-5">Industries</h4>
            <ul className="space-y-3 text-sm text-white">
              {industryLinks.map((link) => (
                <li key={link} className="hover:text-gray-400 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-md font-bold mb-5">Info</h4>
            <ul className="space-y-3 text-sm text-white">
              {infoLinks.map((link) => (
                <li key={link} className="hover:text-gray-400 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Download Our App</h4>

            <div className="space-y-3">
              <Image
                src="/images/app-store.svg"
                alt="App Store"
                width={160}
                height={50}
                className="cursor-pointer"
              />
              <Image
                src="/images/google-play.svg"
                alt="Google Play"
                width={160}
                height={50}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
          <p className="text-xs text-white">
            © 2025 Shaloz | All rights reserved.
          </p>

          <div className="flex gap-3 mt-4 sm:mt-0">
            {[FaFacebookF, FaLinkedinIn, FaXTwitter].map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80"
              >
                <Icon className="text-black text-sm sm:text-base" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
