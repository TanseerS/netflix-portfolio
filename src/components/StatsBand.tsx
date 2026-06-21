import { myStats, statsHeadline } from '../data/stalker';

const StatsBand = () => {
  return (
    <section
      className="relative px-4 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-6"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      <div
        className="
          relative overflow-hidden
          rounded-2xl
          ring-1 ring-neutral-800
          px-5 sm:px-8 lg:px-10 py-8 sm:py-10
        "
        style={{
          background:
            'radial-gradient(80% 120% at 0% 0%, rgba(229,9,20,0.22) 0%, transparent 55%), radial-gradient(70% 120% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 55%), #0c0c0f',
        }}
      >
        {/* Header */}
        <div className="mb-7 sm:mb-9">
          <p className="text-[#e50914] text-[11px] sm:text-xs font-bold uppercase tracking-[0.32em]">
            {statsHeadline.kicker}
          </p>
          <h2 className="mt-2 text-white text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            {statsHeadline.title}
          </h2>
          <p className="mt-1.5 text-neutral-400 text-sm">
            {statsHeadline.caption}
          </p>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {myStats.map((s) => (
            <div
              key={s.label}
              className="
                group/stat
                relative rounded-xl
                bg-white/[0.04] hover:bg-white/[0.07]
                ring-1 ring-white/10
                px-4 py-4
                transition-colors
              "
            >
              <s.Icon className="w-5 h-5 text-neutral-400 group-hover/stat:text-white transition-colors" />
              <div className="mt-3 text-white font-bold text-2xl sm:text-3xl tracking-tight tabular-nums leading-none">
                {s.value}
              </div>
              <div className="mt-1.5 text-neutral-400 text-[11px] sm:text-xs leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
