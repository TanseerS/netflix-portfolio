import { FaMapMarkerAlt } from 'react-icons/fa';
import type { PlaceItem } from '../data/stalker';

interface Props {
  item: PlaceItem;
}

const PlaceCard = ({ item: p }: Props) => {
  const { Icon, gradient } = p;

  return (
    <div
      className="
        group/place
        relative shrink-0 snap-start
        w-[230px] sm:w-[270px] lg:w-[300px]
        aspect-[4/3]
        rounded-md overflow-hidden
        ring-1 ring-neutral-800
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:scale-[1.06] hover:z-10
        hover:ring-white/40
        hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]
        will-change-transform
      "
      style={{
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      }}
    >
      {/* Watermark icon */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-25 group-hover/place:opacity-35 transition-opacity"
        aria-hidden
      >
        <Icon className="w-20 h-20 lg:w-24 lg:h-24 text-white drop-shadow-lg" />
      </div>

      {/* Passport stamp */}
      <div
        className={`
          absolute top-3 right-3 z-10
          -rotate-12
          px-2 py-1
          rounded-[3px]
          border-2
          text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest
          backdrop-blur-sm
          ${
            p.visited
              ? 'border-emerald-400/80 text-emerald-300 bg-emerald-500/10'
              : 'border-amber-400/80 text-amber-300 bg-amber-500/10'
          }
        `}
        title={p.visited ? 'Visited' : 'On the wishlist'}
      >
        {p.stamp}
        {p.year && <span className="ml-1 opacity-80">{p.year}</span>}
      </div>

      {/* Bottom darkening */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Location label */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
        <p className="flex items-center gap-1 text-neutral-300 text-[10px] sm:text-[11px] uppercase tracking-wider">
          <FaMapMarkerAlt className="w-3 h-3 text-[#e50914]" />
          Filming Location
        </p>
        <h3 className="mt-1 text-white font-semibold text-base sm:text-lg leading-tight drop-shadow-md">
          {p.city}
          <span className="text-neutral-400 font-normal text-xs sm:text-sm">
            {' '}
            · {p.country}
          </span>
        </h3>
        <p
          className="
            mt-1 text-[11px] sm:text-xs text-neutral-300 leading-snug line-clamp-2
            opacity-0 max-h-0 -translate-y-1
            group-hover/place:opacity-100 group-hover/place:max-h-12 group-hover/place:translate-y-0
            transition-all duration-300
          "
        >
          {p.blurb}
        </p>
      </div>
    </div>
  );
};

export default PlaceCard;
