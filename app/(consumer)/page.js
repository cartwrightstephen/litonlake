import ProductCard from '@/components/shop/ProductCard';

export default function Home() {
  const products = [
    { 
      id: 1, 
      name: "Lake Blue Dream", 
      price: 50, 
      category: "Flower",
      isNew: true,
      imageurl: "https://images.unsplash.com/photo-1612995923001-27d03779d023?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 2, 
      name: "Frosty Pine Kush", 
      price: 60, 
      category: "Flower", 
      imageurl: "https://images.unsplash.com/photo-1457573557536-6b4b6ca9a05e?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 3, 
      name: "Emerald Haze", 
      price: 45, 
      category: "Flower", 
      imageurl: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 4, 
      name: "Sunset Sativa", 
      price: 55, 
      category: "Flower", 
      imageurl: "https://images.unsplash.com/photo-1590682751946-a65099676151?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="pt-6 pb-4 px-6 text-center bg-bg">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-text-main tracking-tighter mb-4 leading-tight">
            Locally Grown. <br />
            <span className="text-brand">Professionally Delivered.</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base font-medium mb-8 max-w-sm mx-auto">
            The lake's finest selection, hand-delivered with absolute discretion.
          </p>
          <button className="bg-brand text-white px-6 md:px-10 py-3 rounded-xl text-sm md:text-base font-bold hover:bg-brand-hover transition-all shadow-lg shadow-brand/10 hover:scale-[1.02] active:scale-[0.98]">
            Shop Current Harvest
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
          Featured Selection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}