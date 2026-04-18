import Link from 'next/link';
import FireIcon from '@/components/icons/FireIcon';

export default function ProductCard({ name, price, category, imageurl, isNew, description, stats = { thc: 0, flavor: 0, chill: 0 } }) {
  
  // Create slug for routing
  const slug = name.toLowerCase().replace(/\s+/g, '-');

  const FireRating = ({ value, label }) => (
    <div className="flex flex-col items-center gap-1.5 p-2 bg-secondary/5 rounded-xl border border-secondary/10 w-full">
      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-secondary/70 leading-none">
        {label}
      </span>
      <div className="flex gap-0.5 items-center justify-center">
        {[...Array(value)].map((_, i) => {
          const isActive = i < value;
          return (
            <FireIcon 
              key={i} 
              className={`w-2.5 h-2.5 transition-colors duration-200 ${
                isActive ? 'text-secondary' : 'text-brand/20'
              }`} 
            />
          );
        })}
      </div>
    </div>
  );

  return (
    <Link 
      href={`/product/${slug}`} 
      className="group block bg-bg border border-border shadow-sm rounded-3xl p-2 transition-all hover:shadow-xl hover:-translate-y-1 max-w-[280px] w-full mx-auto relative"
    >
      {/* Image Section */}
      <div className="aspect-square bg-surface rounded-2xl relative overflow-hidden">
        <img 
          src={imageurl} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          alt={name}
        />
        <div className="absolute top-3 left-3 bg-secondary-muted/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-secondary z-10">
          {category}
        </div>
        {isNew && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1.5 z-10 border border-border">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
            </span>
            <span className="text-[8px] font-black uppercase text-text-main">New</span>
          </div>
        )}
      </div>

      <div className="p-3">
        {/* Title & Price Section */}
        <div className="flex justify-between items-start mb-2 h-[44px]"> 
          <h3 className="font-bold text-text-main text-md leading-tight line-clamp-2 flex-1 pr-2">
            {name}
          </h3>
          <div className="flex flex-col items-end shrink-0">
            <span className="font-mono font-bold text-brand text-sm">${price}</span>
            <span className="text-[8px] font-bold text-text-muted uppercase tracking-tighter">1/8 oz</span>
          </div>
        </div>

        {/* Description - 2 Line Clamp */}
        <p className="text-text-muted text-[11px] leading-relaxed mb-4 line-clamp-2 min-h-[32px]">
          {description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-1 pt-3 border-t border-border/40">
          <FireRating value={stats.thc} label="Power" />
          <FireRating value={stats.flavor} label="Flavor" />
          <FireRating value={stats.chill} label="Chill" />
        </div>
      </div>
    </Link>
  );
}