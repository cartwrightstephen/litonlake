import { products } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import FireIcon from '@/components/icons/FireIcon';

// FIX: This replaces the <head> tag and fixes the hydration error
export async function generateMetadata({ params }) {
  const { name } = await params;
  const productName = name
    .split('-') // ["lake", "blue", "dream"]
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // ["Lake", "Blue", "Dream"]
    .join(' '); // "Lake Blue Dream"
  return { title: `${productName} | Lit on Lake` };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    name: product.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function ProductPage({ params }) {
  const { name } = await params;
  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === name
  );

  const FireRating = ({ value, label }) => (
    <div className="flex flex-col items-center gap-1.5 p-3 bg-secondary/5 rounded-xl border border-secondary/10 w-full">
      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-secondary/70">{label}</span>
      <div className="flex gap-0.5">
        {[...Array(value)].map((_, i) => (
          <FireIcon key={i} className={`w-3 h-3 ${i < value ? 'text-secondary' : 'text-brand/20'}`} />
        ))}
      </div>
    </div>
  );

  if (!product) {
    return (
      <div className="pt-32 pb-32 px-6 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} />
        </div>
        <h1 className="text-3xl font-black text-text-main tracking-tighter mb-4">Product Not Found</h1>
        <Link href="/menu" className="bg-text-main text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 px-6 max-w-6xl mx-auto">
      <Link href="/menu" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-brand transition mb-12">
        <ArrowLeft className="w-3 h-3" />
        Back to Menu
      </Link>

      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* Image Display */}
        <div className="bg-surface border border-border rounded-3xl aspect-square overflow-hidden shadow-sm max-w-[300px] md:max-w-[400px]">
           <img src={product.imageurl} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full w-max mb-6">
            <Sparkles className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
              {product.category}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
            {product.name}
          </h1>

          <p className="w-fit my-2 px-3 py-1.5 rounded-md border border-secondary/20 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.2em]">
            ${product.price.toFixed(2)} Per Eighth
          </p>
          
          <p className="text-text-muted text-sm md:text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-3 mb-12">
             <FireRating value={product.stats.thc} label="Power" />
             <FireRating value={product.stats.flavor} label="Flavor" />
             <FireRating value={product.stats.chill} label="Chill" />
          </div>

          <div className="flex gap-4">
            <Link href="/visit" className="bg-brand text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand transition-all shadow-lg shadow-brand/10">
              Find at Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}