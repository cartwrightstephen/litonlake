export default function ProductCard({ name, price, category, imageurl, isNew }) {
  return (
    <div className="group bg-bg border border-border rounded-3xl p-2 transition-all hover:shadow-xl hover:-translate-y-1 max-w-[300px] w-full mx-auto relative">
      <div className="aspect-square bg-surface rounded-2xl relative overflow-hidden">
        {imageurl && (
          <img 
            src={imageurl} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            alt={name}
          />
        )}
        
        {/* Left: Category Tag */}
        <div className="absolute top-4 left-4 bg-secondary-muted/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary shadow-sm border border-secondary/20 z-10">
          {category}
        </div>

        {/* Right: New Highlight Badge */}
        {isNew && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-border z-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-tighter text-text-main">
              New
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-text-main text-lg leading-tight">{name}</h3>
          <span className="font-mono font-bold text-secondary text-sm">${price}</span>
        </div>
        <button className="w-full py-2.5 rounded-xl border border-text-main text-text-main font-bold text-sm hover:bg-text-main hover:text-white transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
}