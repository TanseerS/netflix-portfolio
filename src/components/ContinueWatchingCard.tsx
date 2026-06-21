import { FaPlay } from 'react-icons/fa';
import type { ContinueItem } from '../data/stalker';

interface Props {
  item: ContinueItem;
}

const ContinueWatchingCard = ({ item: c }: Props) => {
  const { Icon, gradient } = c;

  return (
    <div
      className="
        group/cw
        relative shrink-0 snap-start
        w-[240px] sm:w-[280px] lg:w-[320px]
        rounded-md overflow-hidden
        ring-1 ring-neutral-800
        bg-neutral-900
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:scale-[1.06] hover:z-10
        hover:ring-white/40
        hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]
        will-change-transform
      "
    >
      {/* Thumbnail */}
      <div
        className="relative aspect-video w-full"
        style={{
          background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        {/* Watermark icon */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-30"
          aria-hidden
        >
          <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-lg" />
        </div>

        {/* Hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/cw:bg-black/45 transition-all duration-200">
          <div
            className="
              w-12 h-12 rounded-full bg-white/95 text-black
              flex items-center justify-center
              opacity-0 scale-90
              group-hover/cw:opacity-100 group-hover/cw:scale-100
              transition-all duration-200 shadow-lg
            "
          >
            <FaPlay className="w-4 h-4 ml-0.5" />
          </div>
        </div>

        {/* Episode pill */}
        {c.episodeLabel && (
          <div className="absolute top-2 left-2">
            <span className="inline-block bg-black/55 backdrop-blur-sm text-white/90 text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 rounded-sm">
              {c.episodeLabel}
            </span>
          </div>
        )}

        {/* Progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-neutral-600/70">
          <div
            className="h-full bg-[#e50914]"
            style={{ width: `${c.progressPct}%` }}
          />
        </div>
      </div>

      {/* Meta */}
      <div className="px-3 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-white font-semibold text-[13px] sm:text-sm leading-tight truncate">
            {c.title}
          </h3>
          <span className="shrink-0 text-neutral-400 text-[10px] sm:text-[11px] tabular-nums">
            {c.progressPct}%
          </span>
        </div>
        <p className="mt-0.5 text-[11px] sm:text-xs text-neutral-400 leading-snug line-clamp-1">
          {c.detail}
        </p>
      </div>
    </div>
  );
};

export default ContinueWatchingCard;
