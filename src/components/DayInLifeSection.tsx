import { FaPlay, FaChevronDown } from 'react-icons/fa';
import { dayInLife } from '../data/stalker';

interface Props {
  id?: string;
}

const DayInLifeSection = ({ id }: Props) => {
  return (
    <section
      id={id}
      className="relative px-4 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-12"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            A Day in the Life
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            Season 1
            <span className="text-neutral-600 mx-2">·</span>
            <span className="text-neutral-300">5 Episodes</span>
            <span className="text-neutral-600 mx-2">·</span>
            Runtime: 20 hrs (sleep optional)
          </p>
        </div>

        <button
          type="button"
          className="
            inline-flex items-center gap-2
            bg-neutral-900/80 hover:bg-neutral-900
            ring-1 ring-neutral-700
            text-neutral-200 text-xs sm:text-sm font-medium
            px-3 sm:px-4 py-2 rounded-sm
            cursor-pointer transition-colors
          "
        >
          A Normal Tuesday
          <FaChevronDown className="w-3 h-3 text-neutral-400" />
        </button>
      </div>

      {/* Episodes */}
      <div className="flex flex-col">
        {dayInLife.map((e) => {
          const { Icon, gradient } = e;
          return (
            <article
              key={e.ep}
              className="
                group/ep
                grid grid-cols-[40px_minmax(0,_200px)_minmax(0,_1fr)] sm:grid-cols-[56px_220px_minmax(0,_1fr)] lg:grid-cols-[72px_260px_minmax(0,_1fr)]
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
                className="text-neutral-400 group-hover/ep:text-neutral-200 font-light tabular-nums text-[28px] sm:text-[36px] lg:text-[44px] leading-none pt-1 transition-colors"
                aria-hidden
              >
                {e.ep}
              </div>

              {/* Thumbnail */}
              <div
                className="relative aspect-video w-full rounded-md overflow-hidden ring-1 ring-neutral-800 group-hover/ep:ring-white/30 transition-all"
                style={{
                  background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-30"
                  aria-hidden
                >
                  <Icon className="w-14 h-14 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                </div>

                {/* Time badge */}
                <div className="absolute top-2 left-2">
                  <span className="inline-block bg-black/55 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-semibold tabular-nums px-1.5 py-0.5 rounded-sm">
                    {e.time}
                  </span>
                </div>

                {/* Hover play */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/ep:bg-black/45 transition-all duration-200">
                  <div className="w-11 h-11 rounded-full bg-white/95 text-black flex items-center justify-center opacity-0 scale-90 group-hover/ep:opacity-100 group-hover/ep:scale-100 transition-all duration-200 shadow-lg">
                    <FaPlay className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>

                {/* Now Airing */}
                {e.current && (
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center gap-1.5 bg-[#e50914] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm shadow-md shadow-black/40">
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
                    {`E${e.ep}: ${e.title}`}
                  </h3>
                  <span className="text-neutral-400 text-xs sm:text-sm tabular-nums shrink-0">
                    {e.time}
                  </span>
                </div>
                <p className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed mt-2">
                  {e.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default DayInLifeSection;
