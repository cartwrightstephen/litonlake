'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import FireIcon from '@/components/icons/FireIcon';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-2 w-full z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-bg/70 backdrop-blur-xl border border-border shadow-lg rounded-2xl h-14 flex items-center justify-between px-4">
        
        {/* Logo - Flame over the "I" in LIT */}
        {/* Logo - Integrated Flame "I" */}
        <Link href="/" className="flex items-center group">
          <div className="flex flex-col leading-none">
            <BrandLogo />
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
          <Link href="/visit" className="ml-2 px-5 py-2 rounded-xl bg-brand text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand/90 transition-all">
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