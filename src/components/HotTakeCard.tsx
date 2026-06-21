import type { HotTake } from '../data/stalker';

interface Props {
  item: HotTake;
}

const HotTakeCard = ({ item: h }: Props) => {
  const { Icon, gradient } = h;

  return (
    <div
      className="
        group/take
        relative shrink-0 snap-start
        w-[240px] sm:w-[270px] lg:w-[290px]
        aspect-[5/4]
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
        className="absolute -bottom-3 -right-2 opacity-20 group-hover/take:opacity-30 transition-opacity"
        aria-hidden
      >
        <Icon className="w-24 h-24 text-white" />
      </div>

      {/* Maturity tag */}
      <div className="absolute top-2.5 left-2.5">
        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white border border-white/70 px-1.5 py-0.5 rounded-[2px]">
          18+
        </span>
      </div>

      {/* Spicy genre chip */}
      <div className="absolute top-2.5 right-2.5">
        <span className="inline-block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-black/35 backdrop-blur-sm ring-1 ring-white/15 px-1.5 py-0.5 rounded-sm">
          {h.spicyGenre}
        </span>
      </div>

      {/* The take */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
        <p className="text-white font-semibold text-sm sm:text-base leading-snug drop-shadow-md">
          “{h.take}”
        </p>
      </div>
    </div>
  );
};

export default HotTakeCard;
