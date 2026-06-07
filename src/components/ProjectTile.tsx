import type { DevProject } from '../data/devProjects';

interface Props {
  project: DevProject;
}

const ProjectTile = ({ project: p }: Props) => {
  const { Icon, gradient } = p;
  const Tag: React.ElementType = p.link ? 'a' : 'div';
  const linkProps = p.link
    ? { href: p.link, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <Tag
      {...linkProps}
      className="
        group/tile
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
      {/* Large watermark icon */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          opacity-25 group-hover/tile:opacity-40
          transition-opacity duration-300
        "
        aria-hidden
      >
        <Icon className="w-24 h-24 lg:w-28 lg:h-28 text-white drop-shadow-lg" />
      </div>

      {/* Bottom darkening for legibility */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      {/* Title block */}
      <div
        className={`absolute inset-x-0 bottom-0 p-3 sm:p-3.5 ${
          p.recentlyAdded ? 'pb-8' : ''
        }`}
      >
        <h3 className="text-white font-semibold text-[13px] sm:text-sm leading-tight line-clamp-2 drop-shadow-md">
          {p.title}
        </h3>
        <p
          className="
            mt-1 text-[11px] sm:text-xs text-neutral-300 leading-snug
            line-clamp-2
            opacity-0 max-h-0 -translate-y-1
            group-hover/tile:opacity-100 group-hover/tile:max-h-10 group-hover/tile:translate-y-0
            transition-all duration-300
          "
        >
          {p.tagline}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {p.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[9px] sm:text-[10px] font-medium text-white/80 tracking-wide uppercase"
            >
              {t}
              <span className="text-white/30 ml-1.5 last:hidden">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* TOP 10 badge */}
      {p.topTenRank && (
        <div
          className="
            absolute top-2 right-2
            flex flex-col items-center
            bg-[#e50914] rounded-[3px]
            px-1.5 py-1
            shadow-md shadow-black/40
          "
        >
          <span className="text-white text-[7px] font-bold leading-none tracking-widest">
            TOP
          </span>
          <span className="text-white text-[13px] font-extrabold leading-none mt-0.5">
            10
          </span>
        </div>
      )}

      {/* Recently added strip */}
      {p.recentlyAdded && (
        <div
          className="
            absolute left-0 right-0 bottom-0
            bg-[#e50914] text-white
            text-[10px] sm:text-[11px] font-semibold
            px-3 py-1
            tracking-wide
          "
        >
          Recently added
        </div>
      )}
    </Tag>
  );
};

export default ProjectTile;
