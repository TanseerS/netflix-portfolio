import { FaQuoteRight, FaArrowRight } from 'react-icons/fa';
import type { Article } from '../data/devArticles';

interface Props {
  article: Article;
}

const ArticleTile = ({ article: a }: Props) => {
  return (
    <a
      href={a.href}
      target="_blank"
      rel="noreferrer"
      className="
        group/article
        relative shrink-0 snap-start
        w-[300px] sm:w-[360px] lg:w-[420px]
        aspect-[2/1]
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
        background: `linear-gradient(135deg, ${a.gradient[0]} 0%, ${a.gradient[1]} 100%)`,
      }}
    >
      {/* Large quote watermark */}
      <div
        className="
          absolute -top-4 -right-4
          text-white/15 group-hover/article:text-white/25
          transition-colors duration-300
        "
        aria-hidden
      >
        <FaQuoteRight className="w-28 h-28 sm:w-36 sm:h-36" />
      </div>

      {/* Bottom darkening */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        aria-hidden
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      {/* Tag chip */}
      <div className="absolute top-3 left-3">
        <span
          className="
            inline-block
            text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider
            text-white/90
            bg-black/40 backdrop-blur-sm
            ring-1 ring-white/20
            px-2 py-0.5 rounded-sm
          "
        >
          {a.tag}
        </span>
      </div>

      {/* NEW badge */}
      {a.isNew && (
        <div className="absolute top-3 right-3">
          <span
            className="
              inline-block
              bg-[#e50914] text-white
              text-[9px] sm:text-[10px] font-bold uppercase tracking-widest
              px-1.5 py-0.5 rounded-sm
              shadow-md shadow-black/40
            "
          >
            NEW
          </span>
        </div>
      )}

      {/* Title + meta */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-snug line-clamp-2 drop-shadow-md">
          {a.title}
        </h3>
        <p
          className="
            mt-1.5 text-[11px] sm:text-xs text-neutral-300 leading-snug
            line-clamp-2
            opacity-0 max-h-0 -translate-y-1
            group-hover/article:opacity-100 group-hover/article:max-h-12 group-hover/article:translate-y-0
            transition-all duration-300
          "
        >
          {a.brief}
        </p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-[10px] sm:text-[11px] text-neutral-400 tabular-nums">
            {a.date}
            <span className="text-neutral-600 mx-1.5">·</span>
            {a.readTime}
          </p>
          <FaArrowRight
            className="
              w-3.5 h-3.5 text-white/60
              opacity-0 -translate-x-2
              group-hover/article:opacity-100 group-hover/article:translate-x-0
              transition-all duration-300
            "
          />
        </div>
      </div>
    </a>
  );
};

export default ArticleTile;
