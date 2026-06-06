import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import { profiles, type ProfileId } from '../data/profiles';

type NavLink =
  | { label: 'Home'; type: 'home' }
  | { label: 'Experience' | 'Projects' | 'Contact'; type: 'scroll'; target: string };

const navLinks: NavLink[] = [
  { label: 'Home', type: 'home' },
  { label: 'Experience', type: 'scroll', target: 'experience' },
  { label: 'Projects', type: 'scroll', target: 'projects' },
  { label: 'Contact', type: 'scroll', target: 'contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { profileId } = useParams<{ profileId: ProfileId }>();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activeProfile = profiles.find((p) => p.id === profileId);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const handleLink = (link: NavLink) => {
    if (link.type === 'home') {
      navigate('/browse');
      return;
    }
    document
      .getElementById(link.target)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSwitchProfile = (id: ProfileId) => {
    setMenuOpen(false);
    if (id !== profileId) navigate(`/browse/${id}`);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-40
        flex items-center justify-between
        px-4 sm:px-8 py-3 sm:py-4
        transition-colors duration-300
        ${scrolled ? 'bg-black' : 'bg-gradient-to-b from-black/90 to-transparent'}
      `}
    >
      {/* Left: Brand */}
      <button
        type="button"
        onClick={() => navigate('/browse')}
        className="
          font-['Bebas_Neue'] font-bold tracking-normal
          text-[clamp(22px,2.4vw,34px)]
          text-[#e50914]
          bg-transparent border-0 cursor-pointer
          hover:opacity-80 transition-opacity
          relative z-10
        "
      >
        TANSEER KHAN
      </button>

      {/* Middle: Links (absolutely centered) */}
      <ul
        className="
          hidden md:flex items-center gap-8
          absolute left-1/2 -translate-x-1/2
          m-0 p-0 list-none
        "
      >
        {navLinks.map((link) => (
          <li key={link.label}>
            <button
              type="button"
              onClick={() => handleLink(link)}
              className="
                text-neutral-200 hover:text-[#e50914]
                text-sm
                bg-transparent border-0 cursor-pointer
                transition-colors
              "
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Right: Search + Avatar */}
      <div className="flex items-center gap-6 sm:gap-8 relative z-10">
        <div className="flex items-center">
          {searchOpen && (
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => {
                if (!searchQuery) setSearchOpen(false);
              }}
              placeholder="Search"
              className="
                bg-black/60 border border-neutral-600
                text-neutral-100 placeholder-neutral-500
                px-3 py-1 mr-2
                rounded-sm outline-none
                w-36 sm:w-48
              "
            />
          )}
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="
              flex items-center justify-center
              text-neutral-200 hover:text-[#e50914]
              bg-transparent border-0 cursor-pointer
              transition-colors
            "
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Profile menu"
            className="flex items-center gap-1 bg-transparent border-0 cursor-pointer"
          >
            {activeProfile && (
              <img
                src={activeProfile.image}
                alt={`${activeProfile.name} profile`}
                className="w-8 h-8 rounded-sm object-cover"
              />
            )}
            <FaCaretDown
              className={`w-3 h-3 text-neutral-200 transition-transform ${
                menuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {menuOpen && (
            <div
              className="
                absolute top-full right-0 mt-2
                min-w-[220px]
                bg-black/95 border border-neutral-800
                py-2 z-50
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
                    hover:bg-neutral-800 transition-colors
                    ${p.id === profileId ? 'opacity-100' : 'opacity-90'}
                  `}
                >
                  <img
                    src={p.image}
                    alt=""
                    className="w-7 h-7 rounded-sm object-cover"
                  />
                  <span className="text-neutral-200 text-sm capitalize">
                    {p.name}
                  </span>
                  {p.id === profileId && (
                    <span className="ml-auto text-[#e50914] text-xs">●</span>
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
                  text-neutral-300 hover:bg-neutral-800 hover:text-[#e50914]
                  transition-colors
                "
              >
                Back to Who's Watching
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
