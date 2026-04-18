'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import FireIcon from '@/components/icons/FireIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-2 w-full z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-bg/70 backdrop-blur-xl border border-border shadow-lg rounded-2xl h-14 flex items-center justify-between px-4">
        
        {/* Logo - Flame over the "I" in LIT */}
        {/* Logo - Integrated Flame "I" */}
        <Link href="/" className="flex items-center group">
          <div className="flex flex-col leading-none">
            <div className="flex items-end">
              {/* The letter L */}
              <span className="text-[14px] font-black tracking-tighter text-text-main uppercase">L</span>
              
              {/* The Integrated "I" and Flame */}
              <div className="relative flex flex-col items-center px-[0.5px] -mx-[1px]">
                {/* Your FireIcon sitting between L and T */}
                <FireIcon className="w-3 h-3 text-brand mb-[-1px] relative z-10" />
                {/* A shorter, custom-height "I" to act as the base/stem */}
                <div className="w-[3px] h-[7px] bg-text-main rounded-sm mb-[2px]"></div>
              </div>

              {/* The letter T */}
              <span className="text-[14px] font-black tracking-tighter text-text-main uppercase">T</span>
              
              {/* ON LAKE */}
              <span className="ml-2 text-[14px] font-black tracking-[0.15em] text-text-main/80 uppercase">ON LAKE</span>
            </div>
            
            {/* Sub-tag anchored to the right side of the main text */}
            <span className="text-[8px] font-bold text-brand tracking-[0.4em] uppercase opacity-70 mt-1">
              Hand Perfected
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/menu" className="px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-brand hover:bg-brand/5 transition-all">
            Menu
          </Link>
          <Link href="/wholesale" className="px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-brand hover:bg-brand/5 transition-all border border-transparent hover:border-brand/20">
            Wholesale
          </Link>
          <Link href="/visit" className="ml-2 px-5 py-2 rounded-xl bg-text-main text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand transition-all">
            Find Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-main hover:bg-brand/10 rounded-lg transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 bg-bg border border-border rounded-2xl shadow-2xl p-4 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-2">
          <Link 
            href="/menu" 
            onClick={() => setIsOpen(false)}
            className="text-[12px] font-bold uppercase tracking-widest p-2 border-b border-border/50 text-text-main"
          >
            Product Menu
          </Link>
          <Link 
            href="/wholesale" 
            onClick={() => setIsOpen(false)}
            className="text-[12px] font-bold uppercase tracking-widest p-2 border-b border-border/50 text-text-main"
          >
            Wholesale Portal
          </Link>
          <Link 
            href="/visit" 
            onClick={() => setIsOpen(false)}
            className="text-[12px] font-bold uppercase tracking-widest p-2 bg-brand/10 text-brand rounded-xl text-center"
          >
            Visit Our Store
          </Link>
        </div>
      )}
    </div>
  );
}