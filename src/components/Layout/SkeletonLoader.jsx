export const SkeletonLoader = () => (
  <div className="hidden md:flex items-center gap-1.5 animate-pulse">
    <span className="text-[10px] text-gray-600 font-medium tracking-wider uppercase">
      Recent
    </span>
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="w-8 h-8 bg-white/5 rounded-lg border border-white/5"
      />
    ))}
  </div>
);

export const SkeletonLoaderMobile = () => (
  <div className="md:hidden pb-2 animate-pulse">
    <span className="text-[10px] text-gray-600 font-medium tracking-wider uppercase block mb-1.5">
      Recent
    </span>
    <div className="flex items-center gap-1.5">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-8 h-8 bg-white/5 rounded-lg border border-white/5"
        />
      ))}
    </div>
  </div>
);
