import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';

export default function MenuPage() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <head>
        <title>Lit on Lake | The Menu - Hand Perfected Cannabis</title>
        <meta name="description" content="Explore our curated menu of hand-perfected craft cannabis from Rochester, NY." />
      </head>

      <div className="mb-8 md:md-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
          The
          <span className="text-brand"> menu.</span>
        </h1>
        <p className="text-text-muted text-lg">Our current harvest, hand-selected and perfected in Rochester.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}