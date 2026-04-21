import FireIcon from '@/components/icons/FireIcon';

export default function BrandTag({ className = "" }) {
  return (
    /* 1. Force explicit text size and line-height so it doesn't inherit from parents */
    /* 2. Added 'leading-none' to prevent line-height from pushing the element height */
    <span className={`brand-tag inline-flex items-center h-[23px] text-[12px] leading-none ${className}`}>
      l
      
      {/* 3. Give this a fixed width to ensure the 'i' doesn't collapse */}
      <span className="relative flex items-center justify-center w-[0.6em] h-full">
        i
        {/* 4. Use relative positioning units (em) for the icon so it scales with the font, not the box */}
        <FireIcon className="absolute -top-[0.25em] -left-[0.05em] w-[8px] h-[8px] text-secondary pointer-events-none" />
      </span>
      
      t
    </span>
  );
}