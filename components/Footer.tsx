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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-14 pb-8">

        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-14 text-center sm:text-left">
          <div className="relative h-8 w-28 mx-auto sm:mx-0">
            <Image
              src="/images/logooo.png"
              alt="Shaloz Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-sm sm:text-md text-white hover:text-gray-400 cursor-pointer">
            Visit Help Center
          </span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10 text-center sm:text-left">

          {/* Navigation */}
          <div>
            <h4 className="text-md font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-md font-bold mb-4">Industries</h4>
            <ul className="space-y-3 text-sm">
              {industryLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-md font-bold mb-4">Info</h4>
            <ul className="space-y-3 text-sm">
              {infoLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-md font-bold mb-4">Download Our App</h4>
            <div className="flex flex-col items-center sm:items-start gap-3">
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-center sm:text-left">
          <p className="text-xs">
            © 2025 Shaloz | All rights reserved.
          </p>

          <div className="flex gap-3">
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
