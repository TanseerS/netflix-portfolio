import type { TopTenItem } from '../data/stalker';

interface Props {
  item: TopTenItem;
}

const TopTenCard = ({ item: t }: Props) => {
  const { Icon, gradient } = t;

  return (
    <div className="group/top relative shrink-0 snap-start flex items-end">
      {/* Giant rank numeral */}
      <span
        aria-hidden
        className="
          select-none leading-[0.8] font-extrabold
          text-[120px] sm:text-[150px] lg:text-[170px]
          -mr-4 sm:-mr-5 lg:-mr-6
          translate-y-1
        "
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: '#0a0a0a',
          WebkitTextStroke: '2px #4b4b4b',
          textShadow: '0 8px 24px rgba(0,0,0,0.5)',
        }}
      >
        {t.rank}
      </span>

      {/* Poster tile */}
      <div
        className="
          relative
          w-[130px] sm:w-[150px] lg:w-[175px]
          aspect-[2/3]
          rounded-md overflow-hidden
          ring-1 ring-neutral-800
          cursor-pointer
          transition-transform duration-300 ease-out
          group-hover/top:scale-[1.06] group-hover/top:z-10
          group-hover/top:ring-white/40
          group-hover/top:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]
          will-change-transform
        "
        style={{
          background: `linear-gradient(160deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        {/* Top gloss */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 30% 18%, rgba(255,255,255,0.18) 0%, transparent 55%)',
          }}
        />

        {/* Watermark icon */}
        <div
          className="absolute inset-0 flex items-center justify-center pb-16 opacity-30"
          aria-hidden
        >
          <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white drop-shadow-lg" />
        </div>

        {/* Category chip */}
        <div className="absolute top-2 left-2">
          <span className="inline-block text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-white/90 bg-black/35 backdrop-blur-sm ring-1 ring-white/15 px-1.5 py-0.5 rounded-sm">
            {t.category}
          </span>
        </div>

        {/* Bottom darkening */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.95) 100%)',
          }}
        />

        {/* Title + blurb */}
        <div className="absolute inset-x-0 bottom-0 p-2.5">
          <h3 className="text-white font-semibold text-[12px] sm:text-[13px] leading-tight line-clamp-2 drop-shadow-md">
            {t.title}
          </h3>
          <p
            className="
              mt-1 text-[10px] text-neutral-300 leading-snug line-clamp-2
              opacity-0 max-h-0 -translate-y-1
              group-hover/top:opacity-100 group-hover/top:max-h-12 group-hover/top:translate-y-0
              transition-all duration-300
            "
          >
            {t.blurb}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopTenCard;
