import { FaCheck, FaPlus, FaThumbsUp } from 'react-icons/fa';
import type { PosterItem } from '../data/stalker';

interface Props {
  item: PosterItem;
}

const PosterCard = ({ item: p }: Props) => {
  const { Icon, gradient } = p;

  return (
    <div
      className="
        group/poster
        relative shrink-0 snap-start
        w-[220px] sm:w-[260px] lg:w-[300px]
        aspect-video
        rounded-md overflow-hidden
        ring-1 ring-neutral-800
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:scale-[1.08] hover:z-10
        hover:ring-white/50
        hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]
        will-change-transform
      "
      style={{
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      }}
    >
      {/* Watermark icon */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          opacity-25 group-hover/poster:opacity-40
          transition-opacity duration-300
        "
        aria-hidden
      >
        <Icon className="w-20 h-20 lg:w-24 lg:h-24 text-white drop-shadow-lg" />
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

      {/* NEW badge */}
      {p.isNew && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-block bg-[#e50914] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm shadow-md shadow-black/40">
            NEW
          </span>
        </div>
      )}

      {/* Done check (My List) */}
      {p.done && (
        <div
          className="absolute top-2 right-2 z-10 grid place-items-center w-6 h-6 rounded-full bg-emerald-500/90 ring-2 ring-white/80 shadow-md"
          title="Done"
        >
          <FaCheck className="w-3 h-3 text-white" />
        </div>
      )}

      {/* Title block */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
        {/* Match % + meta line */}
        <div className="flex items-center gap-2 mb-1">
          {typeof p.matchPct === 'number' && (
            <span className="text-emerald-400 text-[10px] sm:text-[11px] font-bold tracking-wide">
              {p.matchPct}% Match
            </span>
          )}
          {p.done && (
            <span className="text-emerald-400 text-[10px] sm:text-[11px] font-semibold tracking-wide">
              ✓ On My List
            </span>
          )}
          {p.meta && (
            <span className="text-neutral-300 text-[10px] sm:text-[11px] font-medium tracking-wide">
              {p.meta}
            </span>
          )}
        </div>

        <h3 className="text-white font-semibold text-[13px] sm:text-sm leading-tight line-clamp-2 drop-shadow-md">
          {p.title}
        </h3>

        <p
          className="
            mt-1 text-[11px] sm:text-xs text-neutral-300 leading-snug
            line-clamp-2
            opacity-0 max-h-0 -translate-y-1
            group-hover/poster:opacity-100 group-hover/poster:max-h-12 group-hover/poster:translate-y-0
            transition-all duration-300
          "
        >
          {p.synopsis}
        </p>

        {/* Genre tags */}
        {p.genres && p.genres.length > 0 && (
          <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            {p.genres.map((g, i) => (
              <span
                key={g}
                className="text-[9px] sm:text-[10px] font-medium text-white/80 tracking-wide"
              >
                {g}
                {i < p.genres!.length - 1 && (
                  <span className="text-white/30 ml-1.5">·</span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Hover mini-buttons (Netflix expand affordance) */}
        <div
          className="
            mt-2 flex items-center gap-1.5
            opacity-0 max-h-0 -translate-y-1
            group-hover/poster:opacity-100 group-hover/poster:max-h-8 group-hover/poster:translate-y-0
            transition-all duration-300
          "
        >
          <span className="grid place-items-center w-6 h-6 rounded-full bg-white text-black shadow">
            <FaPlus className="w-2.5 h-2.5" />
          </span>
          <span className="grid place-items-center w-6 h-6 rounded-full ring-1 ring-white/60 text-white">
            <FaThumbsUp className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
