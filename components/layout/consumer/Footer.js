import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          {/* Column 1: Brand & Ethos */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-brand rounded flex items-center justify-center text-white font-bold text-[10px]">
                L
              </div>
              <span className="text-xs font-black tracking-[0.2em] text-text-main uppercase">
                LIT ON LAKE
              </span>
            </div>
            <p className="text-text-muted text-[13px] leading-relaxed max-w-[240px]">
              Cultivating excellence. Delivering the finest local harvest with unmatched professionalism.
            </p>
          </div>

          {/* Column 2: Navigation Groups */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-main mb-5">Shop</h4>
              <ul className="flex flex-col gap-3 text-[13px] font-medium text-text-muted">
                <li><Link href="/menu" className="hover:text-brand transition">The Menu</Link></li>
                <li><Link href="/delivery" className="hover:text-brand transition">Delivery Area</Link></li>
                <li><Link href="/retail" className="hover:text-secondary transition text-secondary/80">Retail Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-main mb-5">Support</h4>
              <ul className="flex flex-col gap-3 text-[13px] font-medium text-text-muted">
                <li><Link href="/faq" className="hover:text-brand transition">FAQ</Link></li>
                <li><Link href="/compliance" className="hover:text-brand transition">Compliance</Link></li>
                <li><Link href="/contact" className="hover:text-brand transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: The "Notice" - Compliance is key for your sector */}
          <div className="bg-surface p-6 rounded-2xl border border-border">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              Verification Required
            </h4>
            <p className="text-[11px] text-text-muted leading-relaxed font-medium">
              Must be 21+ with valid ID for all orders. We operate in strict accordance with local and state regulations.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Clean & Minimalist */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
            © 2026 LIT ON LAKE
          </p>
          
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-bold text-text-muted uppercase tracking-widest hover:text-text-main transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] font-bold text-text-muted uppercase tracking-widest hover:text-text-main transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}