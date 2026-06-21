import type { CharacterItem } from '../data/stalker';

interface Props {
  item: CharacterItem;
}

const kindLabel: Record<CharacterItem['kind'], string> = {
  person: 'Recurring',
  pet: 'Animal Cast',
  prop: 'Props Dept.',
};

const CharacterCard = ({ item: c }: Props) => {
  const { Icon, gradient } = c;

  return (
    <div
      className="
        group/char
        relative shrink-0 snap-start
        w-[170px] sm:w-[190px] lg:w-[210px]
        rounded-md overflow-hidden
        ring-1 ring-neutral-800
        bg-neutral-900/70
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:scale-[1.06] hover:z-10
        hover:ring-white/40
        hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]
        will-change-transform
      "
    >
      {/* Portrait */}
      <div
        className="relative aspect-[4/5] w-full flex items-center justify-center"
        style={{
          background: `linear-gradient(150deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 32% 22%, rgba(255,255,255,0.18) 0%, transparent 55%)',
          }}
        />
        <div className="relative grid place-items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/30 backdrop-blur-[2px] ring-1 ring-white/20 transition-transform duration-300 group-hover/char:scale-110">
          <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-white drop-shadow-lg" />
        </div>

        {/* Kind chip */}
        <div className="absolute top-2 left-2">
          <span className="inline-block text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-white/90 bg-black/35 backdrop-blur-sm ring-1 ring-white/15 px-1.5 py-0.5 rounded-sm">
            {kindLabel[c.kind]}
          </span>
        </div>
      </div>

      {/* Name + role */}
      <div className="px-3 py-3">
        <h3 className="text-white font-semibold text-[13px] sm:text-sm leading-tight">
          {c.name}
        </h3>
        <p className="mt-0.5 text-[#e50914] text-[10px] sm:text-[11px] font-medium uppercase tracking-wide">
          {c.role}
        </p>
        <p className="mt-1.5 text-[11px] text-neutral-400 leading-snug line-clamp-3">
          {c.blurb}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
