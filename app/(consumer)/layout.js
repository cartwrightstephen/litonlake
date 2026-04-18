import Navbar from '@/components/layout/consumer/Navbar';
import Footer from '@/components/layout/consumer/Footer';
import AgeVerification from '@/components/verification/AgeVerification';

export default function ConsumerLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AgeVerification />
      <Navbar />
      {/* This ensures content doesn't get hidden under the fixed navbar */}
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}