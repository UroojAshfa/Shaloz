'use client';

import Image from 'next/image';
import { Apple, Smartphone } from 'lucide-react';

export default function DownloadApp() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Outer container */}
        <div className="bg-[#F6F7F9] rounded-[28px] lg:rounded-[32px] px-6 sm:px-10 lg:px-16 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[96px] items-center">
            
            {/* Left content */}
            <div className="max-w-md space-y-5">
              <h2 className="text-[28px] sm:text-[30px] lg:text-[32px] font-bold text-black">
                Download Our App
              </h2>

              <p className="text-base sm:text-lg font-semibold text-black leading-snug">
                Please feel free to download our app on the app Store or Google
                Play to evaluate our product.
              </p>

              {/* Store buttons */}
             <div className="flex flex-col items-center justify-center gap-4 pt-2
                sm:flex-row sm:items-start sm:justify-start">
  <Image
    src="/images/app-store.svg"
    alt="App Store"
    width={170}
    height={80}
    className="cursor-pointer"
  />
  <Image
    src="/images/google-play.svg"
    alt="Google Play"
    width={170}
    height={80}
    className="cursor-pointer"
  />
</div>

            </div>

            {/* Right QR cards */}
            <div className="space-y-4 sm:space-y-6">
              {/* App Store QR */}
              <div className="bg-white rounded-2xl px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
              <div>
                <p className="text-lg sm:text-lg font-bold text-black leading-tight">
                Download on the
                </p>
                <p className="text-lg sm:text-lg font-bold text-black leading-tight">
                App Store
                </p>
             </div>

                <Image
                  src="/images/qr.png"  
                  alt="App Store QR Code"
                  width={88}
                  height={88}
                  className="rounded-lg"
                />
              </div>

              {/* Google Play QR */}
              <div className="bg-white rounded-2xl px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
              <div>
                <p className="text-lg sm:text-lg font-bold text-black leading-tight">
                Download on the
                </p>
                <p className="text-lg sm:text-lg font-bold text-black leading-tight">
                Google Play
                </p>
             </div>

                <Image
                  src="/images/qr.png"  
                  alt="Google Play QR Code"
                  width={88}
                  height={88}
                  className="rounded-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
