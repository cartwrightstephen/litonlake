export const metadata = {
  title: "Lit on Lake | Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-12 leading-[0.9] text-center">
        Privacy
        <span className="text-brand"> policy.</span>
      </h1>

      <div className="space-y-8">
        <div>
          <h4 className="font-bold text-text-main mb-2">Information We Collect</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            We collect personal information you provide directly to us, such as your name and email address when you contact us. We also collect usage data when you browse our site to improve your experience.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-text-main mb-2">How We Use Data</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            Your information is used strictly to respond to inquiries, process requests, and comply with state cannabis regulations. We do not sell your personal data to third parties.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-text-main mb-2">Data Security</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            We implement industry-standard security measures to protect your data. However, no digital transmission is 100% secure, and we encourage you to use caution when sharing information online.
          </p>
        </div>
      </div>
    </div>
  );
}