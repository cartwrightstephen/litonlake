import BrandTag from './BrandTag';

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex flex-col w-fit select-none ${className}`}>
      {/* Primary Logo Line */}
      <div className="flex items-center gap-2">
        <BrandTag />
        <span className="text-[16px] -ml-1 -mb-1 font-black tracking-[0.05em] text-text-main uppercase">
          ON LAKE
        </span>
      </div>

      {/* Sub-tag: Anchored flush with the text block */}
      <span className="text-[8px] font-bold text-brand tracking-[0.4em] uppercase opacity-80 mt-1 ml-0.5">
        Hand Perfected
      </span>
    </div>
  );
}