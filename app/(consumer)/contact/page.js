import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Lit on Lake | Contact',
};

export default function ContactPage() {
  const contactLinks = [
    {
      title: 'Email Us',
      value: 'hello@litonlake.com',
      href: 'mailto:hello@litonlake.com',
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: 'Call the Store',
      value: '(585) 555-LAKE',
      href: 'tel:+15855555253',
      icon: <Phone className="w-5 h-5" />,
    },
    {
      title: 'Store Location',
      value: '123 Lake Ave, Rochester',
      href: '/visit',
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <div className="pt-24 pb-24 px-6 max-w-xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
        Get
        <span className="text-brand"> in touch.</span>
      </h1>
      <p className="text-text-muted mb-12">Have a question or want to learn more? Our team is here to help.</p>
      
      <div className="grid gap-4">
        {contactLinks.map((item) => (
          <Link 
            key={item.title}
            href={item.href}
            className="group flex items-center justify-between bg-surface border border-border p-6 rounded-3xl transition-all hover:border-brand/50 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-bg rounded-full text-brand border border-border">
                {item.icon}
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">{item.title}</p>
                <p className="text-lg font-bold text-text-main">{item.value}</p>
              </div>
            </div>
            <span className="text-brand opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs uppercase tracking-widest">Open</span>
          </Link>
        ))}
      </div>
    </div>
  );
}