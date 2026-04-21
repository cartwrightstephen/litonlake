import Link from 'next/link';
import FireIcon from '@/components/icons/FireIcon';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-12">
          
          {/* Left: Brand Section */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex flex-col leading-none group">
              <BrandLogo />
            </Link>
            <p className="text-text-muted text-[12px] leading-relaxed max-w-[260px]">
              Rooted in Rochester soil. Providing hand-perfected craft cannabis for our local community and wholesale partners.
            </p>
          </div>

          {/* Right: Navigation Links */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col space-y-4">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-main">Explore</h4>
              <ul className="flex flex-col space-y-2 text-[12px] font-medium text-text-muted">
                <li><Link href="/menu" className="hover:text-brand transition-colors">The Menu</Link></li>
                <li><Link href="/wholesale" className="hover:text-secondary transition-colors font-bold text-secondary">Wholesale</Link></li>
                <li><Link href="/visit" className="hover:text-brand transition-colors">Visit Store</Link></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-main">Support</h4>
              <ul className="flex flex-col space-y-2 text-[12px] font-medium text-text-muted">
                <li><Link href="/faq" className="hover:text-brand transition-colors">FAQ</Link></li>
                <li><Link href="/compliance" className="hover:text-brand transition-colors">Compliance</Link></li>
                <li><Link href="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Perfectly Lined Up */}
        <div className="pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold text-text-muted/60 uppercase tracking-[0.2em]">
            © 2026 LIT ON LAKE — ROCHESTER, NY
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[9px] font-bold text-text-muted/60 uppercase tracking-[0.2em] hover:text-text-main transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[9px] font-bold text-text-muted/60 uppercase tracking-[0.2em] hover:text-text-main transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}