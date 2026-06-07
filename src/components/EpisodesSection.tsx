import { FaChevronDown } from 'react-icons/fa';
import { devEpisodes } from '../data/devEpisodes';
import EpisodeCard from './EpisodeCard';

interface Props {
  id?: string;
}

const EpisodesSection = ({ id }: Props) => {
  return (
    <section
      id={id}
      className="relative px-4 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-10"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Episodes
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            Career · Season 1
            <span className="text-neutral-600 mx-2">·</span>
            <span className="text-neutral-300">Skillminds LLP</span>
          </p>
        </div>

        {/* Faux season selector */}
        <button
          type="button"
          className="
            inline-flex items-center gap-2
            bg-neutral-900/80 hover:bg-neutral-900
            ring-1 ring-neutral-700
            text-neutral-200
            text-xs sm:text-sm font-medium
            px-3 sm:px-4 py-2
            rounded-sm
            cursor-pointer
            transition-colors
          "
        >
          Season 1
          <FaChevronDown className="w-3 h-3 text-neutral-400" />
        </button>
      </div>

      {/* Episode list */}
      <div className="flex flex-col">
        {devEpisodes.map((ep) => (
          <EpisodeCard key={ep.number} episode={ep} />
        ))}
      </div>
    </section>
  );
};

export default EpisodesSection;
