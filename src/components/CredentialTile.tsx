import { FaCircleCheck } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Credential, CredentialKind } from '../data/devCredentials';

const kindLabel: Record<CredentialKind, string> = {
  community: 'Community',
  certification: 'Certification',
  award: 'Award',
  'open-source': 'Open Source',
};

interface Props {
  credential: Credential;
}

const CredentialTile = ({ credential: c }: Props) => {
  const { Icon, gradient } = c;

  return (
    <a
      href={c.href}
      target="_blank"
      rel="noreferrer"
      className="
        group/cred
        relative shrink-0 snap-start
        w-[180px] sm:w-[210px] lg:w-[230px]
        aspect-[3/4]
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
        background: `linear-gradient(160deg, ${gradient[0]} 0%, ${gradient[1]} 90%)`,
      }}
    >
      {/* Top gloss */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 30% 18%, rgba(255,255,255,0.20) 0%, transparent 50%)',
        }}
      />

      {/* Kind chip */}
      <div className="absolute top-2.5 left-2.5 z-10">
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
          {kindLabel[c.kind]}
        </span>
      </div>

      {/* Verified badge */}
      {c.verified && (
        <div className="absolute top-2.5 right-2.5 z-10" title="Verified">
          <FaCircleCheck className="w-4 h-4 text-white/90 drop-shadow-md" />
        </div>
      )}

      {/* Centered medallion */}
      <div className="absolute inset-0 flex items-center justify-center pb-20">
        <div
          className="
            relative
            w-[78px] h-[78px] sm:w-[92px] sm:h-[92px]
            rounded-full
            grid place-items-center
            bg-black/35 backdrop-blur-[2px]
            ring-1 ring-white/20
            transition-transform duration-300
            group-hover/cred:scale-110
          "
        >
          <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-white drop-shadow-lg" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-black/55 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-bold text-white/90 tabular-nums">
            {c.year}
          </div>
        </div>
      </div>

      {/* Bottom darkening */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        aria-hidden
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Title + issuer */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3 className="text-white font-semibold text-[12px] sm:text-sm leading-snug line-clamp-2 drop-shadow-md">
          {c.title}
        </h3>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-[10px] sm:text-[11px] text-neutral-300 truncate">
            {c.issuer}
          </p>
          <FiArrowUpRight
            className="
              w-3 h-3 text-white/60 shrink-0
              opacity-0 -translate-y-1 translate-x-1
              group-hover/cred:opacity-100 group-hover/cred:translate-y-0 group-hover/cred:translate-x-0
              transition-all duration-300
            "
          />
        </div>
      </div>
    </a>
  );
};

export default CredentialTile;
