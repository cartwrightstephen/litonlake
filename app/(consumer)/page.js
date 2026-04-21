import ProductCard from '@/components/shop/ProductCard';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import BrandTag from '@/components/ui/BrandTag';

export const metadata = {
  title: 'Lit on Lake | Rochester Hand Crafted Cannabis',
  description: 'Discover hand perfected cannabis from Lit on Lake. Locally grown in Rochester, our premium selection offers unmatched quality and flavor.',
  keywords: [
    'Lit on Lake', 
    'Hand Perfected Cannabis', 
    'Rochester Cannabis', 
    'Wholesale Cannabis', 
    'Craft Cannabis'
  ],
  authors: [{ name: 'Lit on Lake' }],
};

export default function Home() {

  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="pt-8 pb-8 px-6 text-center bg-bg">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
            Locally grown. <br />
            <span className="text-brand">Hand perfected.</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base font-medium mb-8 max-w-[500px] mx-auto leading-relaxed">
            From wholesalers to housewives, the <BrandTag /> service team is fully licensed to provide hand crafted cannabis rooted in Rochester soil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/wholesale" className="w-full max-w-[275px] sm:w-auto bg-brand text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 hover:scale-[1.02] active:scale-[0.98]">
              Wholesale Orders
            </Link>
            {/* Optional: Secondary "Visit Store" button for housewives/locals */}
            <Link href="/visit" className="w-full max-w-[275px] sm:w-auto bg-text-main/5 text-text-main px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-text-main/10 transition-all">
              Visit Store
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {/* The "Featured" Secondary Card */}
        <div className="flex items-center justify-center md:justify-start mb-8">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-brand" />
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand">
              Featured Selection
            </h2>
          </div>
        </div>

        {/* Grid - Sliced to show only first 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* Button to Full Menu */}
        <div className="flex justify-center mt-8">
          <Link 
            href="/menu" 
            className="group flex items-center gap-2 px-8 py-3 border border-brand text-brand font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-brand hover:text-white transition-all"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}