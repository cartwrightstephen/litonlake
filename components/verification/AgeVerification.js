'use client';

import { useState, useEffect } from 'react';
import FireIcon from '@/components/icons/FireIcon';

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user already verified
    const isVerified = localStorage.getItem('age-verified');
    if (!isVerified) {
      setShowModal(true);
      document.body.style.overflow = 'hidden'; 
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true');
    setShowModal(false);
    document.body.style.overflow = 'auto'; 
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/60 backdrop-blur-xl px-4">
      <div className="max-w-md w-full bg-white border border-border p-8 rounded-[2.5rem] shadow-2xl text-center">
        {/* Logo - Consistent Integrated Flame Style */}
        <div className="flex flex-col items-center leading-none mb-4">
          <div className="flex items-end">
            {/* The letter L */}
            <span className="text-[24px] font-black tracking-tighter text-text-main uppercase">L</span>
            
            {/* The Integrated "I" and Flame */}
            <div className="relative flex flex-col items-center px-[1px] -mx-[1px]">
              {/* Scaled up FireIcon for the Modal */}
              <FireIcon className="w-5 h-5 text-brand mb-[-2px] relative z-10" />
              {/* Scaled up base/stem */}
              <div className="w-[4px] h-[10px] bg-text-main rounded-sm mb-[3px]"></div>
            </div>

            {/* The letter T */}
            <span className="text-[24px] font-black tracking-tighter text-text-main uppercase">T</span>
            
            {/* ON LAKE */}
            <span className="ml-2 text-[24px] font-black tracking-[0.15em] text-text-main/80 uppercase">ON LAKE</span>
          </div>
          
          {/* Sub-tag */}
          <span className="text-[10px] font-bold text-brand tracking-[0.5em] uppercase opacity-70 mt-2">
            Hand Perfected
          </span>
        </div>
        <p className="text-text-muted text-sm font-medium mb-8 leading-relaxed">
          You must be at least <span className="text-secondary font-bold">21 years of age</span> to enter this site. Please verify your age to continue.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleVerify}
            className="w-full bg-text-main text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand transition-all shadow-lg shadow-brand/10 cursor-pointer"
          >
            I am 21 or older
          </button>
          
          <a
            href="https://www.google.com"
            className="w-full py-4 text-text-muted font-bold uppercase tracking-widest text-[10px] hover:text-red-500 transition-colors"
          >
            Exit Site
          </a>
        </div>

        <p className="mt-8 text-[10px] text-text-muted/60 uppercase tracking-widest leading-loose">
          By entering, you agree to our terms of service and privacy policy. 
          Enjoy responsibly.
        </p>
      </div>
    </div>
  );
}