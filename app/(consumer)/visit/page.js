import { MapPin, Clock, Navigation } from 'lucide-react';

export const metadata = {
  title: "Lit on Lake | Visit Our Store"
}

export default function VisitPage() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
          Visit
          <span className="text-brand"> our store.</span>
        </h1>
        <p className="text-text-muted text-base">Rooted in Rochester soil. Come see the harvest.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Info Column */}
        <div className="bg-surface border border-border p-8 md:p-12 rounded-3xl flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-brand mb-3">
                <MapPin className="w-4 h-4" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">Location</h3>
              </div>
              <p className="text-text-main text-lg font-medium">123 Lake Ave<br/>Rochester, NY 14612</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-brand mb-3">
                <Clock className="w-4 h-4" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">Hours</h3>
              </div>
              <div className="text-text-muted text-sm space-y-1">
                <p><span className="text-text-main font-bold">Mon–Sat:</span> 10:00 AM – 8:00 PM</p>
                <p><span className="text-text-main font-bold">Sun:</span> 11:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.google.com/?q=123+Lake+Ave+Rochester+NY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-12 flex items-center justify-center gap-2 w-full bg-text-main text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand transition-all"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>

        {/* Map Placeholder */}
        <div className="bg-surface border border-border p-2 rounded-3xl h-[400px] md:h-auto overflow-hidden">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-bg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.6706786835016!2d-77.62588362391037!3d43.17616607113117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b5e024211111%3A0x1111111111111111!2s123+Lake+Ave%2C+Rochester%2C+NY+14612!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lit on Lake Location"
            />
          </div>
        </div>

      </div>
    </div>
  );
}