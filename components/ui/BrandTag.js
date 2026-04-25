import FireIcon from '@/components/icons/FireIcon';

export default function BrandTag({ className = "" }) {
  return (
    /* 1. Force explicit text size and line-height so it doesn't inherit from parents */
    /* 2. Added 'leading-none' to prevent line-height from pushing the element height */
    <span className={`brand-tag inline-flex items-center h-[23px] text-[13px] leading-none ${className}`}>
      <span className="-mb-[4px]">
        
        l
      <span className="relative inline-flex items-center justify-center w-[0.5em] h-[1em] leading-none">
        i
        <FireIcon className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[0.55em] h-[0.55em] text-secondary pointer-events-none" />
      </span>
      t
      </span>
    </span>
  );
}