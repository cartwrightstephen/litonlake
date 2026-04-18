import { Phone, ShieldCheck, Users, Truck } from 'lucide-react';

export const metadata = {
  title: 'Lit on Lake | Wholesale Partnerships - Premium Rochester Cannabis',
  description: 'Partner with Lit on Lake for premium, hand-perfected craft cannabis in Rochester, NY. Providing consistent, licensed, and high-quality flower for New York State retail dispensaries.',
  keywords: [
    'Lit on Lake', 
    'Wholesale Cannabis', 
    'Rochester Cannabis', 
    'Licensed Cannabis Partner', 
    'Premium Craft Cannabis', 
    'NYS Wholesale', 
    'Cannabis Distribution'
  ],
  authors: [{ name: 'Lit on Lake' }],
  openGraph: {
    title: 'Lit on Lake | Wholesale Partnerships',
    description: 'Premium, hand-perfected craft cannabis for NYS retail partners.',
    type: 'website',
  },
};

export default function WholesalePage() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-4xl mx-auto">
      {/* Hero Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
          Wholesale
          <span className="text-brand"> partnerships.</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We partner with retailers who value craft quality and strict compliance. 
          Get in touch to discuss our current harvest, availability, and how we can 
          supply your location with the finest Rochester-grown flower.
        </p>
      </div>

      {/* The Contact Card */}
      <div className="bg-surface border border-border p-8 md:p-12 rounded-3xl text-center shadow-sm mb-16">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand mb-4">
          Direct Line to Sales
        </h3>
        <p className="text-text-main text-xl md:text-3xl font-black tracking-tight mb-6 md:mb-8">
          (585) 555-0199
        </p>
        <a 
          href="tel:5855550199" 
          className="inline-flex items-center gap-2 bg-text-main text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand transition-all shadow-lg shadow-brand/10"
        >
          <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
          Call to Discuss
        </a>
        <p className="mt-6 text-[10px] text-text-muted uppercase tracking-widest">
          Available Mon-Fri | 9:00 AM – 5:00 PM EST
        </p>
      </div>

      {/* Trust Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-4 text-brand">
            <ShieldCheck size={24} />
          </div>
          <h4 className="text-[10px] font-black uppercase tracking-widest mb-2">OCM Compliant</h4>
          <p className="text-[11px] text-text-muted">Strict adherence to all New York State regulations.</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-4 text-brand">
            <Users size={24} />
          </div>
          <h4 className="text-[10px] font-black uppercase tracking-widest mb-2">Dedicated Reps</h4>
          <p className="text-[11px] text-text-muted">Personalized service for every wholesale account.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-4 text-brand">
            <Truck size={24} />
          </div>
          <h4 className="text-[10px] font-black uppercase tracking-widest mb-2">Logistics</h4>
          <p className="text-[11px] text-text-muted">Reliable, compliant delivery and inventory support.</p>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-[10px] text-text-muted uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
          Inquiries are restricted to licensed businesses in New York State. 
          Valid license documentation will be required prior to any negotiation.
        </p>
      </div>

    </div>
  );
}