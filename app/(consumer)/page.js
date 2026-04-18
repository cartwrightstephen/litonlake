import ProductCard from '@/components/shop/ProductCard';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const products = [
    { 
      id: 1, 
      name: "Lake Blue Dream", 
      price: 45, 
      category: "Sativa Hybrid",
      description: "A longtime bestseller; cross of Blueberry and Haze. Offers balanced uplifting cerebral effects with mild body relaxation.",
      isNew: true,
      stats: { thc: 4, flavor: 5, chill: 3 },
      imageurl: "https://images.unsplash.com/photo-1612995923001-27d03779d023?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 2, 
      name: "Lakeside Gelato", 
      price: 50, 
      category: "Hybrid", 
      description: "Creamy dessert strain from Sunset Sherbet and Thin Mint GSC. Sweet berry, citrus, and mint notes with potent euphoric yet calming effects.",
      stats: { thc: 5, flavor: 5, chill: 4 },
      imageurl: "https://images.unsplash.com/photo-1457573557536-6b4b6ca9a05e?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 3, 
      name: "Wedding Cake", 
      price: 45, 
      category: "Indica Hybrid", 
      description: "Also called Pink Cookies; cross of Cherry Pie and Girl Scout Cookies. Sweet vanilla/cake-like aroma with earthy tones.",
      stats: { thc: 4, flavor: 4, chill: 5 },
      imageurl: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 4, 
      name: "Rochester Runtz", 
      price: 55, 
      category: "Hybrid", 
      description: "Cross of Zkittlez and Gelato. Candy-like fruity/tropical berry flavors with colorful buds. Strong, balanced euphoric high.",
      stats: { thc: 5, flavor: 5, chill: 4 },
      imageurl: "https://images.unsplash.com/photo-1590682751946-a65099676151?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 5, 
      name: "OG Kush", 
      price: 40, 
      category: "Indica Hybrid", 
      description: "Legendary strain with earthy, pine, and lemon-fuel notes. Classic relaxing body effects paired with some cerebral euphoria.",
      stats: { thc: 4, flavor: 3, chill: 5 },
      imageurl: "https://images.unsplash.com/photo-1589141986943-5578615fdef2?auto=format&fit=crop&q=80&w=800" // Reusing URL as requested
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <head>
        <title>Lit on Lake | Rochester Hand Crafted Cannabis</title>
        <meta name="description" content="Discover hand perfected cannabis from Lit on Lake. Locally grown in Rochester, our premium selection offers unmatched quality and flavor." />
        <meta name="keywords" content="Lit on Lake, Hand Perfected Cannabis, Rochester Cannabis, Wholesale Cannabis, Craft Cannabis" />
        <meta name="author" content="Lit on Lake" />
      </head>
      <section className="pt-8 pb-8 px-6 text-center bg-bg">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
            Locally grown. <br />
            <span className="text-brand">Hand perfected.</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base font-medium mb-8 max-w-[500px] mx-auto leading-relaxed">
            From wholesalers to housewives, the <span className='brand-tag'>LIT</span> service team is fully licensed to provide hand crafted cannabis rooted in Rochester soil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/wholesale" className="w-full max-w-[275px] sm:w-auto bg-brand text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 hover:scale-[1.02] active:scale-[0.98]">
              Wholesale Pricing
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}