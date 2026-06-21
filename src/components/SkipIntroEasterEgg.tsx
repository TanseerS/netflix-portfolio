import { useEffect, useState } from 'react';
import { FaForward } from 'react-icons/fa';
import { skipIntro } from '../data/stalker';

const SkipIntroEasterEgg = () => {
  const [visible, setVisible] = useState(false);
  const [toast, setToast] = useState(false);

  // Reveal the button only after the user has scrolled a little —
  // a small "wait, was that always there?" easter egg.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(false), 2600);
    return () => window.clearTimeout(t);
  }, [toast]);

  const handleClick = () => {
    setToast(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Skip Intro button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label="Skip Intro"
        className={`
          fixed bottom-5 right-5 z-40
          inline-flex items-center gap-2
          bg-neutral-200/95 text-black
          px-4 py-2 rounded-[4px]
          text-sm font-semibold
          ring-1 ring-white/40
          shadow-lg shadow-black/40
          hover:bg-white
          cursor-pointer border-0
          transition-all duration-300
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <FaForward className="w-3.5 h-3.5" />
        {skipIntro.label}
      </button>

      {/* Cheeky toast */}
      <div
        role="status"
        className={`
          fixed bottom-20 right-5 z-50
          max-w-[260px]
          bg-black/90 text-white
          text-sm leading-snug
          px-4 py-3 rounded-lg
          ring-1 ring-[#e50914]/50
          shadow-xl shadow-black/50
          transition-all duration-300
          ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}
        `}
      >
        {skipIntro.message}
      </div>
    </>
  );
};

export default SkipIntroEasterEgg;
