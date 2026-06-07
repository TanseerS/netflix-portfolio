import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ContentRow from '../components/ContentRow';
import ProjectTile from '../components/ProjectTile';
import EpisodesSection from '../components/EpisodesSection';
import TechTile from '../components/TechTile';
import ArticleTile from '../components/ArticleTile';
import CredentialTile from '../components/CredentialTile';
import { devProjects } from '../data/devProjects';
import { devStack } from '../data/devStack';
import { devArticles } from '../data/devArticles';
import { devCredentials } from '../data/devCredentials';
import avatarImage from '../assets/tanseer-avatar.png';

const fadeUp = (delayMs: number) => ({
  animation: `heroFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`,
});

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const DeveloperProfile = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative w-full min-h-[88vh] flex flex-col justify-end overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Right-anchored avatar — color-graded, blurred edge */}
          <img
            src={avatarImage}
            alt=""
            aria-hidden
            className="absolute inset-y-0 right-0 h-full w-full md:w-[65%] object-cover"
            style={{
              objectPosition: 'right center',
              filter:
                'saturate(0.55) brightness(0.62) contrast(1.05) hue-rotate(-8deg)',
            }}
          />

          {/* Subtle blueprint dot grid — keeps right side from looking flat */}
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(circle at center, rgba(255,255,255,0.5) 1px, transparent 1.2px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Left-to-right darken for legibility */}
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                'linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.92) 22%, rgba(10,10,10,0.55) 45%, transparent 70%)',
            }}
          />

          {/* Top darken to bed the navbar */}
          <div
            className="absolute inset-x-0 top-0 h-40"
            aria-hidden
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
            }}
          />

          {/* Bottom fade into page */}
          <div
            className="absolute inset-x-0 bottom-0 h-56"
            aria-hidden
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, #0a0a0a 100%)',
            }}
          />
        </div>

        {/* Content — bottom-left anchored */}
        <div className="relative z-10 px-4 sm:px-10 lg:px-16 pb-[12vh] pt-[16vh] max-w-[1500px] w-full mx-auto">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-2 mb-4"
              style={fadeUp(0)}
            >
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
                A TANSEER ORIGINAL SERIES
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-white leading-[0.85]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(64px, 9vw, 144px)',
                letterSpacing: '-0.005em',
                textShadow: '0 4px 32px rgba(0,0,0,0.6)',
                ...fadeUp(100),
              }}
            >
              TANSEER
            </h1>

            {/* Subtitle wordmark */}
            <div
              className="mt-3 flex items-center gap-3"
              style={fadeUp(200)}
            >
              <span className="block h-[2px] w-7 bg-[#e50914]" />
              <span className="text-neutral-200 text-xs sm:text-sm uppercase font-light tracking-[0.35em]">
                DevOps Engineer
              </span>
            </div>

            {/* Top-10 ribbon */}
            <div
              className="mt-6 inline-flex items-stretch rounded-[2px] overflow-hidden shadow-lg shadow-black/40"
              style={fadeUp(300)}
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
                #1 in DevOps · India
              </div>
            </div>

            {/* Synopsis */}
            <p
              className="mt-6 max-w-lg text-neutral-200/95 text-[15px] sm:text-base leading-relaxed"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                ...fadeUp(400),
              }}
            >
              A Cloud &amp; DevOps engineer architecting secure, scalable
              infrastructure on AWS. AWS Community Builder. Currently
              shipping at Skillminds — from whiteboard to deployment across
              mobile and web.
            </p>

            {/* Buttons */}
            <div
              className="mt-7 flex items-center gap-3 flex-wrap"
              style={fadeUp(550)}
            >
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="
                  inline-flex items-center gap-2.5
                  bg-white text-black
                  px-6 sm:px-7 py-2.5
                  rounded-[4px]
                  font-semibold text-sm sm:text-base
                  hover:bg-white/80
                  transition-colors
                  cursor-pointer border-0
                "
              >
                <FaPlay className="w-4 h-4" />
                Play
              </button>
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="
                  inline-flex items-center gap-2.5
                  bg-neutral-500/60 text-white
                  px-6 sm:px-7 py-2.5
                  rounded-[4px]
                  font-semibold text-sm sm:text-base
                  hover:bg-neutral-500/40
                  backdrop-blur-sm
                  transition-colors
                  cursor-pointer border-0
                "
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
          <span
            className="
              inline-block
              px-2.5 py-0.5
              text-white text-sm font-medium
              border-l-2 border-white/70
              bg-neutral-800/40
              backdrop-blur-sm
            "
          >
            T+
          </span>
        </div>
      </section>

      {/* ============ ROWS ============ */}
      <div className="relative -mt-24 sm:-mt-32 z-10">
        <ContentRow id="projects" title="Trending Now: Projects">
          {devProjects.map((p) => (
            <ProjectTile key={p.id} project={p} />
          ))}
        </ContentRow>
      </div>

      <EpisodesSection id="about" />

      <ContentRow title="My List: Tech Stack">
        {devStack.map((t) => (
          <TechTile key={t.id} tech={t} />
        ))}
      </ContentRow>

      <ContentRow title="Recently Added: Writing">
        {devArticles.map((a) => (
          <ArticleTile key={a.id} article={a} />
        ))}
      </ContentRow>

      <ContentRow title="Documentaries: Certifications & Community">
        {devCredentials.map((c) => (
          <CredentialTile key={c.id} credential={c} />
        ))}
      </ContentRow>

      <div className="h-20" />
    </div>
  );
};

export default DeveloperProfile;
