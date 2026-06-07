import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { profiles, type ProfileId } from '../data/profiles';

const RecruiterNavbar = () => {
  const navigate = useNavigate();
  const { profileId } = useParams<{ profileId: ProfileId }>();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeProfile = profiles.find((p) => p.id === profileId);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [menuOpen]);

  const handleSwitchProfile = (id: ProfileId) => {
    setMenuOpen(false);
    if (id !== profileId) navigate(`/browse/${id}`);
  };

  return (
    <nav
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      className={`
        fixed top-0 left-0 right-0 z-40
        flex items-center justify-between
        px-4 sm:px-8 py-3 sm:py-4
        transition-all duration-300
        ${scrolled
          ? 'bg-neutral-950/80 backdrop-blur border-b border-neutral-800'
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <button
        type="button"
        onClick={() => navigate('/browse')}
        className="
          font-semibold tracking-tight
          text-[clamp(16px,1.6vw,20px)]
          text-neutral-100
          bg-transparent border-0 cursor-pointer
          hover:text-lime-400 transition-colors
        "
      >
        Tanseer Khan
      </button>

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Profile menu"
          className="
            flex items-center gap-2
            bg-transparent border-0 cursor-pointer
            rounded-md px-1.5 py-1
            hover:bg-neutral-900 transition-colors
          "
        >
          {activeProfile && (
            <img
              src={activeProfile.image}
              alt={`${activeProfile.name} profile`}
              className="w-8 h-8 rounded-md object-cover ring-1 ring-neutral-700"
            />
          )}
          <FaCaretDown
            className={`w-3 h-3 text-neutral-400 transition-transform ${
              menuOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {menuOpen && (
          <div
            className="
              absolute top-full right-0 mt-2
              min-w-[220px]
              bg-neutral-950/95 backdrop-blur
              border border-neutral-800 rounded-xl
              py-2 z-50 shadow-2xl shadow-black/60
            "
          >
            {profiles.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSwitchProfile(p.id)}
                className={`
                  w-full flex items-center gap-3
                  px-3 py-2 text-left
                  bg-transparent border-0 cursor-pointer
                  hover:bg-neutral-900 transition-colors
                  ${p.id === profileId ? 'opacity-100' : 'opacity-90'}
                `}
              >
                <img
                  src={p.image}
                  alt=""
                  className="w-7 h-7 rounded-md object-cover ring-1 ring-neutral-800"
                />
                <span className="text-neutral-100 text-sm capitalize">
                  {p.name}
                </span>
                {p.id === profileId && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-lime-400" />
                )}
              </button>
            ))}
            <div className="border-t border-neutral-800 my-1" />
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                navigate('/browse');
              }}
              className="
                w-full px-3 py-2 text-left text-sm
                bg-transparent border-0 cursor-pointer
                text-neutral-400 hover:bg-neutral-900 hover:text-lime-400
                transition-colors
              "
            >
              Back to Who's Watching
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default RecruiterNavbar;
