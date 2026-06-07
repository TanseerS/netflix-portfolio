import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const ContentRow = ({ title, children, id }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      className="relative group/row pt-6 pb-2 sm:pt-10"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      <h2 className="px-4 sm:px-10 lg:px-16 mb-3 text-base sm:text-xl font-semibold text-neutral-100 tracking-tight">
        {title}
      </h2>

      <div className="relative">
        {/* Left arrow */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          className={`
            hidden md:flex
            absolute left-0 top-0 bottom-0 z-20
            items-center justify-center
            w-10 lg:w-16
            bg-gradient-to-r from-black/90 via-black/60 to-transparent
            text-white text-2xl
            opacity-0 group-hover/row:opacity-100
            transition-opacity duration-200
            cursor-pointer border-0
            ${canScrollLeft ? '' : 'pointer-events-none !opacity-0'}
          `}
        >
          <FaChevronLeft className="drop-shadow-md" />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          className={`
            hidden md:flex
            absolute right-0 top-0 bottom-0 z-20
            items-center justify-center
            w-10 lg:w-16
            bg-gradient-to-l from-black/90 via-black/60 to-transparent
            text-white text-2xl
            opacity-0 group-hover/row:opacity-100
            transition-opacity duration-200
            cursor-pointer border-0
            ${canScrollRight ? '' : 'pointer-events-none !opacity-0'}
          `}
        >
          <FaChevronRight className="drop-shadow-md" />
        </button>

        <style>{`
          .nfx-scroller::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="
            nfx-scroller
            flex gap-2 sm:gap-3
            overflow-x-auto overflow-y-visible
            px-4 sm:px-10 lg:px-16
            py-6
            scroll-smooth
            snap-x
          "
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentRow;
