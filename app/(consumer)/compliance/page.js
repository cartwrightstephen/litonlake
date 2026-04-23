export const metadata = {
  title: "Lit on Lake | Compliance"
}

export default function CompliancePage() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9] text-center">
        Cannabis
        <span className="text-brand"> compliance.</span>
      </h1>
      <div className="prose prose-sm text-text-muted mt-8">
        <p className="mb-4">Lit on Lake operates in full compliance with the New York Office of Cannabis Management (OCM) regulations, under NYS License OCM-MICR-24-000103.</p>
        <p>Our facility undergoes rigorous testing for quality, safety, and potency to ensure every product meeting our "Hand Perfected" standard is safe for our community.</p>
      </div>
    </div>
  );
}