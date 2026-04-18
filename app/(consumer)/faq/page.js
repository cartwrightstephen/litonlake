export default function FAQPage() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-3xl mx-auto">
      <head><title>Lit on Lake | FAQ</title></head>

      <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9]">
        Common
        <span className="text-brand"> questions.</span>
      </h1>

      <div className="space-y-12">
        <div>
          <h4 className="font-bold text-text-main mb-2">Do I need an ID to enter?</h4>
          <p className="text-text-muted text-sm">Yes. All customers must be 21+ with a valid government-issued ID to enter our facility and make purchases.</p>
        </div>
        <div>
          <h4 className="font-bold text-text-main mb-2">Is everything grown locally?</h4>
          <p className="text-text-muted text-sm">Yes, our craft cannabis is rooted in Rochester soil, hand-perfected by our local cultivation team.</p>
        </div>
      </div>
    </div>
  );
}