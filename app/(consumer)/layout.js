import Navbar from '@/components/layout/consumer/Navbar';
import Footer from '@/components/layout/consumer/Footer';

export default function ConsumerLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* This ensures content doesn't get hidden under the fixed navbar */}
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}