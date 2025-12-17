"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Earn", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Track", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "About", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#28262C] via-[#28262C] to-[#080708] text-white">
      <nav className="mx-auto max-w-[1280px] px-6">
        <div className="flex h-[72px] items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
          <div className="h-20 w-20 relative">
    <Image
      src="/images/Logoo.png" // path in public folder
      alt="Shaloz Logo"
      fill
      className="object-contain"
    />
  </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-white hover:text-white/80 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="flex items-center gap-1 text-sm text-white hover:text-white/80 transition">
              <Globe className="h-4 w-4" />
              EN
            </button>

            <button className="text-sm text-white hover:text-white/80 transition">
              Help
            </button>

            <button className="text-sm text-white hover:text-white/80 transition">
              Log in
            </button>

            <Button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                <button className="flex items-center gap-2 text-sm text-white/80">
                  <Globe className="h-4 w-4" />
                  EN
                </button>
                <button className="text-sm text-left text-white/80">
                  Help
                </button>
                <button className="text-sm text-left text-white/80">
                  Log in
                </button>
                <Button className="rounded-full bg-white text-black hover:bg-white/90">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
