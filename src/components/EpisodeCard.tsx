import { FaPlay } from 'react-icons/fa';
import type { Episode } from '../data/devEpisodes';

interface Props {
  episode: Episode;
}

const EpisodeCard = ({ episode: e }: Props) => {
  const { Icon, gradient } = e;

  return (
    <article
      className="
        group/ep
        grid grid-cols-[40px_minmax(0,_220px)_minmax(0,_1fr)] sm:grid-cols-[56px_240px_minmax(0,_1fr)] lg:grid-cols-[72px_280px_minmax(0,_1fr)]
        gap-3 sm:gap-5 lg:gap-6
        items-start
        px-3 sm:px-4 py-4 sm:py-5
        rounded-md
        border-b border-neutral-800/80
        hover:bg-neutral-900/60
        transition-colors duration-200
      "
    >
      {/* Episode number */}
      <div
        className="
          text-neutral-400 group-hover/ep:text-neutral-200
          font-light tabular-nums
          text-[28px] sm:text-[36px] lg:text-[44px]
          leading-none pt-1
          transition-colors
        "
        aria-hidden
      >
        {e.number}
      </div>

      {/* Thumbnail */}
      <div
        className="
          relative aspect-video w-full
          rounded-md overflow-hidden
          ring-1 ring-neutral-800
          group-hover/ep:ring-white/30
          transition-all
        "
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
        <div
          className="
            absolute inset-0 flex items-center justify-center
            bg-black/0 group-hover/ep:bg-black/45
            transition-all duration-200
          "
        >
          <div
            className="
              w-12 h-12 rounded-full
              bg-white/95 text-black
              flex items-center justify-center
              opacity-0 scale-90
              group-hover/ep:opacity-100 group-hover/ep:scale-100
              transition-all duration-200
              shadow-lg
            "
          >
            <FaPlay className="w-4 h-4 ml-0.5" />
          </div>
        </div>

        {/* Now Airing pill */}
        {e.current && (
          <div className="absolute top-2 left-2">
            <span
              className="
                inline-flex items-center gap-1.5
                bg-[#e50914] text-white
                text-[9px] sm:text-[10px] font-bold uppercase tracking-wider
                px-1.5 py-0.5 rounded-sm
                shadow-md shadow-black/40
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Now Airing
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <h3 className="text-white font-semibold text-base sm:text-lg leading-tight">
            {e.role}
          </h3>
          <span className="text-neutral-400 text-xs sm:text-sm tabular-nums shrink-0">
            {e.period}
          </span>
        </div>
        <p className="text-neutral-400 text-xs sm:text-sm mt-1">
          {e.company}
        </p>
        <p className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed mt-2 sm:mt-3">
          {e.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {e.tech.map((t) => (
            <span
              key={t}
              className="
                text-[10px] sm:text-[11px] font-medium
                px-2 py-0.5 rounded-sm
                bg-neutral-800/80 text-neutral-300
                ring-1 ring-neutral-700/60
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default EpisodeCard;
