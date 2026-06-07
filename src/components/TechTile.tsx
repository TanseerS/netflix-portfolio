import type { TechItem, Proficiency } from '../data/devStack';

interface Props {
  tech: TechItem;
}

const proficiencyDots = (p: Proficiency): { filled: number; label: string } => {
  switch (p) {
    case 'Daily':
      return { filled: 3, label: 'Daily driver' };
    case 'Frequent':
      return { filled: 2, label: 'Frequent' };
    case 'Familiar':
      return { filled: 1, label: 'Familiar' };
  }
};

const TechTile = ({ tech }: Props) => {
  const { Icon, color } = tech;
  const dots = proficiencyDots(tech.proficiency);

  return (
    <div
      className="
        group/tech
        relative shrink-0 snap-start
        w-[200px] sm:w-[240px] lg:w-[280px]
        aspect-video
        rounded-md overflow-hidden
        ring-1 ring-neutral-800
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:scale-[1.08] hover:z-10
        hover:ring-white/40
        hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]
        will-change-transform
      "
      style={{
        background: `linear-gradient(135deg, ${color} 0%, #0a0a0a 85%)`,
      }}
    >
      {/* Subtle inner gloss */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18) 0%, transparent 45%)',
        }}
        aria-hidden
      />

      {/* Centered icon */}
      <div className="absolute inset-0 flex items-center justify-center pb-6">
        <Icon
          className="
            w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
            text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]
            transition-transform duration-300
            group-hover/tech:scale-110
          "
        />
      </div>

      {/* Category pill */}
      <div className="absolute top-2 left-2">
        <span
          className="
            inline-block
            text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider
            text-white/90
            bg-black/35 backdrop-blur-sm
            ring-1 ring-white/15
            px-1.5 py-0.5 rounded-sm
          "
        >
          {tech.category}
        </span>
      </div>

      {/* Proficiency dots */}
      <div
        className="absolute top-2 right-2 flex items-center gap-1"
        title={dots.label}
        aria-label={`${tech.name} — ${dots.label}`}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`
              block w-1.5 h-1.5 rounded-full
              ${i < dots.filled ? 'bg-white' : 'bg-white/25'}
            `}
          />
        ))}
      </div>

      {/* Name */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
        <h3 className="text-white font-semibold text-sm sm:text-base leading-tight drop-shadow-md">
          {tech.name}
        </h3>
        <p
          className="
            text-[11px] text-neutral-300/95 mt-0.5
            opacity-0 max-h-0 -translate-y-1
            group-hover/tech:opacity-100 group-hover/tech:max-h-6 group-hover/tech:translate-y-0
            transition-all duration-300
          "
        >
          {dots.label}
        </p>
      </div>
    </div>
  );
};

export default TechTile;
