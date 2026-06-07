import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGlobe,
  FiDownload,
  FiArrowUpRight,
} from 'react-icons/fi';
import {
  SiGithub,
  SiX,
  SiHashnode,
} from 'react-icons/si';
import { FaLinkedin, FaAws } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import RecruiterNavbar from '../components/RecruiterNavbar';
import { recruiterData } from '../data/recruiter';
import avatarImage from '../assets/tanseer-avatar.png';

const socialIcon: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: SiGithub,
  x: SiX,
  hashnode: SiHashnode,
  aws: FaAws,
};

const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`
      rounded-2xl
      bg-neutral-900/80
      ring-1 ring-neutral-800
      shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]
      ${className}
    `}
  >
    {children}
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-neutral-50 mb-5 tracking-tight">
    {children}
  </h2>
);

const RecruiterProfile = () => {
  const d = recruiterData;

  return (
    <div
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      className="min-h-screen bg-neutral-950 text-neutral-100 antialiased relative"
    >
      {/* energetic ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(163,230,53,0.10) 0%, transparent 60%), radial-gradient(50% 40% at 10% 20%, rgba(251,146,60,0.07) 0%, transparent 60%)',
        }}
      />

      <RecruiterNavbar />

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-5 lg:gap-6">
          {/* LEFT — sticky identity card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="p-5 sm:p-6">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-neutral-800 ring-1 ring-neutral-800">
                <img
                  src={avatarImage}
                  alt={d.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-5">
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                  {d.name}
                </h1>
                <p className="mt-1 text-sm text-neutral-400">
                  {d.role}{' '}
                  <span className="text-neutral-500">@</span>{' '}
                  <span className="text-neutral-300">{d.company}</span>
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                  <FiMapPin className="w-3.5 h-3.5" />
                  {d.location}
                </p>
              </div>

              <div className="my-5 h-px bg-neutral-800" />

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-neutral-300">
                  <FiGlobe className="w-4 h-4 text-neutral-500 shrink-0" />
                  <a
                    href={d.websiteHref}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-400 transition-colors truncate"
                  >
                    {d.website}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <FiMail className="w-4 h-4 text-neutral-500 shrink-0" />
                  <a
                    href={`mailto:${d.email}`}
                    className="hover:text-lime-400 transition-colors truncate"
                  >
                    {d.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <FiPhone className="w-4 h-4 text-neutral-500 shrink-0" />
                  <a
                    href={`tel:${d.phone.replace(/\s/g, '')}`}
                    className="hover:text-lime-400 transition-colors tabular-nums"
                  >
                    {d.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-5 flex items-center gap-2">
                {d.socials.map((s) => {
                  const Icon = socialIcon[s.iconKey];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="
                        w-9 h-9 grid place-items-center
                        rounded-lg bg-neutral-800/70
                        ring-1 ring-neutral-700/60
                        text-neutral-300
                        hover:text-lime-400 hover:ring-lime-400/40 hover:bg-neutral-800
                        transition-all
                      "
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>

              <a
                href={d.cvHref}
                download
                className="
                  mt-6 w-full
                  inline-flex items-center justify-center gap-2
                  rounded-full px-5 py-2.5
                  bg-lime-400 text-neutral-950 font-medium text-sm
                  ring-1 ring-lime-300
                  hover:bg-lime-300 hover:shadow-[0_0_24px_rgba(163,230,53,0.35)]
                  transition-all
                "
              >
                Download CV
                <FiDownload className="w-4 h-4" />
              </a>
            </Card>
          </aside>

          {/* RIGHT — scrollable stack */}
          <section className="flex flex-col gap-5 lg:gap-6 min-w-0">
            {/* About */}
            <Card className="p-6">
              <CardTitle>About</CardTitle>
              <p className="text-[15px] leading-relaxed text-neutral-300">
                {d.bio}
              </p>
            </Card>

            {/* Work Experience */}
            <Card className="p-6">
              <CardTitle>Work Experience</CardTitle>
              <ol className="relative space-y-7">
                {d.experience.map((job, i) => (
                  <li key={`${job.company}-${i}`} className="relative">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <p className="text-sm text-neutral-400">{job.company}</p>
                      {job.current && (
                        <span
                          className="
                            shrink-0 inline-flex items-center gap-1.5
                            text-[11px] font-medium uppercase tracking-wider
                            text-lime-300
                            px-2 py-0.5 rounded-full
                            bg-lime-400/10 ring-1 ring-lime-400/30
                          "
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-[15px] font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-400">
                      {job.description}
                    </p>
                    <p className="mt-2 text-xs text-neutral-500 tabular-nums">
                      {job.period}
                    </p>
                  </li>
                ))}
              </ol>
            </Card>

            {/* Featured Project */}
            <Card className="p-6">
              <CardTitle>Featured Project</CardTitle>
              <div className="space-y-4">
                {d.projects.map((p) => (
                  <a
                    key={p.name}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group block
                      rounded-xl p-4
                      bg-neutral-950/40
                      ring-1 ring-neutral-800
                      hover:ring-lime-400/40 hover:bg-neutral-950/70
                      transition-all
                    "
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[15px] font-semibold text-white group-hover:text-lime-300 transition-colors">
                        {p.name}
                      </h3>
                      <FiArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-lime-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-400">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="
                            text-[11px] font-medium
                            px-2 py-0.5 rounded-md
                            bg-neutral-800/70 text-neutral-300
                            ring-1 ring-neutral-700/60
                          "
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Stack */}
            <Card className="p-6">
              <CardTitle>Stack</CardTitle>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {d.stack.map((s) => (
                  <div
                    key={s.name}
                    className="
                      group flex flex-col items-center gap-2
                      rounded-xl p-3
                      bg-neutral-950/40
                      ring-1 ring-neutral-800
                      hover:ring-lime-400/30 hover:bg-neutral-950/70
                      transition-all
                    "
                  >
                    <div
                      className="w-10 h-10 grid place-items-center rounded-lg bg-neutral-900 ring-1 ring-neutral-800 transition-colors"
                    >
                      <s.Icon
                        className="w-6 h-6 transition-colors"
                        style={{ color: s.color }}
                      />
                    </div>
                    <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors text-center">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <CardTitle>Education</CardTitle>
              <ul className="space-y-5">
                {d.education.map((e, i) => (
                  <li key={i} className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold text-white">
                        {e.degree}
                      </h3>
                      <p className="mt-0.5 text-sm text-neutral-400 truncate">
                        {e.school}
                      </p>
                    </div>
                    <p className="shrink-0 text-xs text-neutral-500 tabular-nums pt-1">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RecruiterProfile;
