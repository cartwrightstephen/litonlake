export const metadata = {
  title: "Lit on Lake | Our Story"
}

export default function OurStory() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter mb-4 leading-[0.9] text-center">
        Our
        <span className="text-brand"> story.</span>
      </h1>
      <div className="prose prose-sm text-text-muted mt-8">
        <p>
          Rooted in the heart of underserved communities, we are Rochester locals and brothers who’ve built 
          our legal cannabis grow with a deep commitment to uplifting Black partners and driving real 
          economic impact in the cultural heart of Rochester.
        </p>
        <br/>
        <p>
          With over 20 years of hands-on cultivation experience, we produce consistent small-batch, 
          craft cannabis defined by uncompromising quality and the highest standard of service. 
          As a licensed New York State Microgrow, we are dedicated to delivering premium product at 
          a fair price and meaningful community partnership—growing excellence right here in 
          Upstate New York.
        </p>
      </div>
    </div>
  );
}