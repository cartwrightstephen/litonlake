export const metadata = {
  title: "Lit on Lake | Terms of Service"
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-12 leading-[0.9] text-center">
        Terms
        <span className="text-brand"> of service.</span>
      </h1>

      <div className="space-y-8">
        <div>
          <h4 className="font-bold text-text-main mb-2">Age Eligibility</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            Our products and services are intended exclusively for individuals 21 years of age or older. By accessing this site, you certify that you meet the legal age requirements under New York State law.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-text-main mb-2">Use of Content</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            All content on this site, including images, branding, and text, is the property of Lit on Lake. You may not reproduce or distribute our assets without prior written consent.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-text-main mb-2">Compliance</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            You agree to use our site and services in accordance with all applicable local, state, and federal regulations regarding cannabis use and distribution in New York.
          </p>
        </div>
      </div>
    </div>
  );
}