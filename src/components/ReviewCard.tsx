import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';
import type { Review } from '../data/stalker';

interface Props {
  review: Review;
}

const ReviewCard = ({ review: r }: Props) => {
  return (
    <div
      className="
        group/review
        relative shrink-0 snap-start
        w-[280px] sm:w-[320px] lg:w-[360px]
        rounded-md overflow-hidden
        ring-1 ring-neutral-800
        bg-neutral-900/70
        p-4 sm:p-5
        transition-transform duration-300 ease-out
        hover:scale-[1.03] hover:z-10
        hover:ring-white/30
        hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.85)]
        will-change-transform
      "
    >
      <FaQuoteLeft className="w-6 h-6 text-[#e50914]/80 mb-3" aria-hidden />

      <p className="text-neutral-100 text-[13px] sm:text-sm leading-relaxed">
        “{r.quote}”
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-neutral-400 text-[11px] sm:text-xs font-medium">
          — {r.author}
        </p>
        <div className="flex items-center gap-0.5" aria-label={`${r.stars} out of 5`}>
          {[0, 1, 2, 3, 4].map((i) =>
            i < r.stars ? (
              <FaStar key={i} className="w-3 h-3 text-amber-400" />
            ) : (
              <FaRegStar key={i} className="w-3 h-3 text-neutral-600" />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
