import { useEffect, useState } from 'react';
import { FaPlay, FaInfoCircle, FaTimes, FaVolumeUp, FaClosedCaptioning } from 'react-icons/fa';
import { billboard } from '../data/stalker';
import avatarImage from '../assets/tanseer-avatar.png';

const fadeUp = (delayMs: number) => ({
  animation: `heroFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`,
});

interface Props {
  playTargetId: string;
}

const MoreInfoModal = ({ onClose }: { onClose: () => void }) => {
  const m = billboard.moreInfo;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="More info about Tanseer: The Series"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl my-8 rounded-xl overflow-hidden bg-neutral-950 ring-1 ring-neutral-800 shadow-2xl shadow-black/70"
        style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      >
        {/* Banner */}
        <div className="relative h-44 sm:h-56 overflow-hidden">
          <img
            src={avatarImage}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 25%', filter: 'saturate(0.7) brightness(0.6)' }}
          />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                'linear-gradient(180deg, transparent 30%, rgba(10,10,10,0.85) 80%, #0a0a0a 100%)',
            }}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-black/70 ring-1 ring-white/20 text-white hover:bg-black cursor-pointer border-0 transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <h2
              className="text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px,6vw,52px)' }}
            >
              {billboard.seriesTitle}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-7 py-5 sm:py-6">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-emerald-400 font-semibold">100% Match</span>
            <span className="text-neutral-400">{m.releaseYear}</span>
            <span className="border border-neutral-500 text-neutral-300 text-xs px-1.5 py-0.5 rounded-[2px]">
              {billboard.maturityRating}
            </span>
            <span className="text-neutral-400">{billboard.seasonInfo}</span>
            <span className="text-[10px] font-bold text-black bg-neutral-300 px-1.5 py-0.5 rounded-[2px] tracking-wide">
              HD
            </span>
          </div>

          <p className="mt-4 text-neutral-200 text-[14px] leading-relaxed">
            {billboard.synopsis}
          </p>

          <p className="mt-3 text-neutral-300 text-[13px] leading-relaxed italic">
            {m.maturityDescriptor}
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[13px]">
            <p className="text-neutral-400">
              <span className="text-neutral-500">Cast: </span>
              <span className="text-neutral-200">{m.cast.join(', ')}</span>
            </p>
            <p className="text-neutral-400">
              <span className="text-neutral-500">Genres: </span>
              <span className="text-neutral-200">{m.fullGenres.join(', ')}</span>
            </p>
            <p className="text-neutral-400 sm:col-span-2">
              <span className="text-neutral-500">Creator: </span>
              <span className="text-neutral-200">{m.creator}</span>
            </p>
          </div>

          {/* Audio & Subtitles */}
          <div className="mt-6 border-t border-neutral-800 pt-5">
            <h3 className="text-white font-semibold text-sm mb-3">Audio &amp; Subtitles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <FaVolumeUp className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider">Audio</p>
                  <p className="text-neutral-200 text-[13px]">{m.audio.join(' · ')}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <FaClosedCaptioning className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider">Subtitles</p>
                  <p className="text-neutral-200 text-[13px]">{m.subtitles.join(' · ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StalkerBillboard = ({ playTargetId }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToPlay = () => {
    document
      .getElementById(playTargetId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-[88vh] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={avatarImage}
          alt=""
          aria-hidden
          className="absolute inset-y-0 right-0 h-full w-full md:w-[65%] object-cover"
          style={{
            objectPosition: 'right center',
            filter: 'saturate(0.7) brightness(0.6) contrast(1.05)',
          }}
        />
        {/* Warm stalker-red wash to differentiate from the developer hero */}
        <div
          className="absolute inset-0 mix-blend-multiply opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(60% 80% at 75% 30%, rgba(229,9,20,0.45) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(255,255,255,0.5) 1px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              'linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.92) 22%, rgba(10,10,10,0.55) 45%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-40"
          aria-hidden
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-56"
          aria-hidden
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #0a0a0a 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-10 lg:px-16 pb-[12vh] pt-[16vh] max-w-[1500px] w-full mx-auto">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4" style={fadeUp(0)}>
            <span
              className="text-[#e50914] font-extrabold leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.02em',
              }}
            >
              N
            </span>
            <span className="text-white text-[11px] sm:text-xs tracking-[0.32em] font-medium">
              {billboard.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-white leading-[0.82]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(52px, 8vw, 124px)',
              letterSpacing: '-0.005em',
              textShadow: '0 4px 32px rgba(0,0,0,0.6)',
              ...fadeUp(100),
            }}
          >
            TANSEER
            <span className="block text-[#e50914]">THE SERIES</span>
          </h1>

          {/* Tagline */}
          <div className="mt-4 flex items-center gap-3" style={fadeUp(200)}>
            <span className="block h-[2px] w-7 bg-[#e50914]" />
            <span className="text-neutral-200 text-sm sm:text-base italic">
              {billboard.tagline}
            </span>
          </div>

          {/* Rating + genres line */}
          <div
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
            style={fadeUp(300)}
          >
            <span className="border border-neutral-400 text-neutral-200 text-xs px-1.5 py-0.5 rounded-[2px]">
              {billboard.maturityRating}
            </span>
            {billboard.genreTags.map((g, i) => (
              <span key={g} className="text-neutral-300">
                {g}
                {i < billboard.genreTags.length - 1 && (
                  <span className="text-neutral-600 ml-3">·</span>
                )}
              </span>
            ))}
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-300">{billboard.seasonInfo}</span>
          </div>

          {/* Top-10 ribbon */}
          <div
            className="mt-5 inline-flex items-stretch rounded-[2px] overflow-hidden shadow-lg shadow-black/40"
            style={fadeUp(380)}
          >
            <div className="bg-[#e50914] px-2 py-1.5 flex flex-col items-center justify-center min-w-[34px]">
              <span className="text-white text-[8px] font-bold leading-none tracking-wider">
                TOP
              </span>
              <span className="text-white text-[15px] font-extrabold leading-none mt-0.5">
                10
              </span>
            </div>
            <div className="bg-neutral-900/95 px-3 py-1.5 flex items-center text-white text-[11px] sm:text-xs font-semibold tracking-wide">
              {billboard.ribbon}
            </div>
          </div>

          {/* Synopsis */}
          <p
            className="mt-5 max-w-xl text-neutral-200/95 text-[15px] sm:text-base leading-relaxed"
            style={{ fontFamily: "'Poppins', system-ui, sans-serif", ...fadeUp(460) }}
          >
            {billboard.synopsis}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex items-center gap-3 flex-wrap" style={fadeUp(560)}>
            <button
              type="button"
              onClick={scrollToPlay}
              className="inline-flex items-center gap-2.5 bg-white text-black px-6 sm:px-7 py-2.5 rounded-[4px] font-semibold text-sm sm:text-base hover:bg-white/80 transition-colors cursor-pointer border-0"
            >
              <FaPlay className="w-4 h-4" />
              Play
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 bg-neutral-500/60 text-white px-6 sm:px-7 py-2.5 rounded-[4px] font-semibold text-sm sm:text-base hover:bg-neutral-500/40 backdrop-blur-sm transition-colors cursor-pointer border-0"
            >
              <FaInfoCircle className="w-4 h-4" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Maturity badge — bottom-right */}
      <div
        className="absolute right-4 sm:right-10 lg:right-16 bottom-[14vh] z-10"
        style={fadeUp(700)}
      >
        <span className="inline-block px-2.5 py-0.5 text-white text-sm font-medium border-l-2 border-white/70 bg-neutral-800/40 backdrop-blur-sm">
          {billboard.maturityRating}
        </span>
      </div>

      {modalOpen && <MoreInfoModal onClose={() => setModalOpen(false)} />}
    </section>
  );
};

export default StalkerBillboard;
