import FireIcon from '@/components/icons/FireIcon';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-2 w-full z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-bg/70 backdrop-blur-xl border border-border shadow-lg shadow-text-main/5 rounded-2xl h-14 flex items-center justify-between px-4">
        
        {/* Logo with a Gradient Accent */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-brand rounded-xl flex items-center justify-center">
            <FireIcon className="w-5 h-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[12px] font-black tracking-[0.2em] text-text-main uppercase">
              LIT ON LAKE
            </span>
            <span className="text-[10px] font-bold text-brand tracking-widest uppercase opacity-70">
              Premium Harvest
            </span>
          </div>
        </Link>
        
        {/* Navigation - Pill style hover */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/menu" className="px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-brand hover:bg-brand/5 transition-all">
            Menu
          </Link>
          <Link href="/delivery" className="px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-brand hover:bg-brand/5 transition-all">
            Delivery
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button className="relative group p-2 px-4 rounded-xl bg-text-main text-white hover:bg-brand transition-all flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest">Cart</span>
            <span className="w-4 h-4 bg-secondary text-[9px] font-black rounded-md flex items-center justify-center shadow-sm">
              0
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}