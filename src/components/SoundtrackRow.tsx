import { FaSpotify, FaPlay } from 'react-icons/fa';
import { soundtrack } from '../data/stalker';

interface Props {
  id?: string;
}

const Equalizer = () => (
  <span className="flex items-end gap-[2px] h-4" aria-hidden>
    {[0, 1, 2, 3].map((i) => (
      <span
        key={i}
        className="w-[3px] bg-[#1db954] rounded-full"
        style={{
          animation: `eqBar 900ms ease-in-out ${i * 120}ms infinite alternate`,
          height: '40%',
        }}
      />
    ))}
  </span>
);

const SoundtrackRow = ({ id }: Props) => {
  return (
    <section
      id={id}
      className="relative px-4 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-6"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      <style>{`
        @keyframes eqBar {
          from { height: 25%; }
          to { height: 100%; }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-1.5">
        <FaSpotify className="w-5 h-5 text-[#1db954]" />
        <h2 className="text-base sm:text-xl font-semibold text-neutral-100 tracking-tight">
          The Original Series Soundtrack
        </h2>
      </div>
      <p className="text-neutral-400 text-sm mb-5 max-w-2xl">{soundtrack.intro}</p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-5 lg:gap-6 items-start">
        {/* Tracklist */}
        <div className="rounded-xl ring-1 ring-neutral-800 bg-neutral-900/50 overflow-hidden">
          {soundtrack.tracks.map((t, i) => (
            <div
              key={`${t.track}-${i}`}
              className="
                group/track
                flex items-center gap-3 sm:gap-4
                px-3 sm:px-4 py-2.5
                border-b border-neutral-800/70 last:border-b-0
                hover:bg-white/[0.04]
                transition-colors
              "
            >
              {/* Index / play / eq */}
              <div className="w-6 shrink-0 grid place-items-center text-neutral-500 text-sm tabular-nums">
                {i === 0 ? (
                  <Equalizer />
                ) : (
                  <>
                    <span className="group-hover/track:hidden">{i + 1}</span>
                    <FaPlay className="hidden group-hover/track:block w-3 h-3 text-white" />
                  </>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-neutral-100 text-[13px] sm:text-sm font-medium truncate">
                  {t.track}
                </p>
                <p className="text-neutral-500 text-[11px] sm:text-xs truncate">
                  {t.artist}
                </p>
              </div>

              <p className="hidden sm:block text-neutral-500 text-[11px] sm:text-xs italic truncate max-w-[45%] text-right">
                {t.vibe}
              </p>
            </div>
          ))}
        </div>

        {/* Spotify embed */}
        <div className="rounded-xl overflow-hidden ring-1 ring-neutral-800 bg-black">
          <iframe
            title="Original Series Soundtrack — stand-in playlist"
            src={soundtrack.spotifyEmbed}
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block w-full border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SoundtrackRow;
