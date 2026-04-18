import FireIcon from '@/components/icons/FireIcon';

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex items-end select-none ${className}`}>
      {/* The letter L */}
      <span className="text-[14px] font-black tracking-tighter text-text-main uppercase">L</span>
      
      {/* The Integrated "I" and Flame */}
      <div className="relative flex flex-col items-center px-[0.5px] -mx-[1px]">
        <FireIcon className="w-3 h-3 text-brand mb-[-1px] relative z-10" />
        <div className="w-[3px] h-[7px] bg-text-main rounded-sm mb-[2px]"></div>
      </div>

      {/* The letter T */}
      <span className="text-[14px] font-black tracking-tighter text-text-main uppercase">T</span>
      
      {/* ON LAKE */}
      <span className="ml-2 text-[14px] font-black tracking-[0.15em] text-text-main/80 uppercase">ON LAKE</span>
    </div>
  );
}