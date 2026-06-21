import Navbar from '../components/Navbar';
import ContentRow from '../components/ContentRow';
import StalkerBillboard from '../components/StalkerBillboard';
import ContinueWatchingCard from '../components/ContinueWatchingCard';
import TopTenCard from '../components/TopTenCard';
import PosterCard from '../components/PosterCard';
import PlaceCard from '../components/PlaceCard';
import CharacterCard from '../components/CharacterCard';
import ReviewCard from '../components/ReviewCard';
import HotTakeCard from '../components/HotTakeCard';
import StatsBand from '../components/StatsBand';
import SoundtrackRow from '../components/SoundtrackRow';
import DayInLifeSection from '../components/DayInLifeSection';
import SkipIntroEasterEgg from '../components/SkipIntroEasterEgg';
import {
  continueWatching,
  topTen,
  hobbies,
  places,
  myList,
  trendingNow,
  watchItAgain,
  castAndCrew,
  behindTheScenes,
  becauseYouStalked,
  hotTakes,
  theSetup,
  critics,
} from '../data/stalker';

const CriticsBand = () => (
  <section
    className="relative px-4 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-1"
    style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
  >
    <div className="flex flex-wrap items-center gap-x-8 gap-y-5 rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/50 px-5 sm:px-8 py-5 sm:py-6">
      {/* Tomatometer parody */}
      <div className="flex items-center gap-3">
        <div className="grid place-items-center w-14 h-14 rounded-full bg-[#e50914] text-white shadow-lg shadow-black/40">
          <span className="text-lg font-extrabold leading-none">{critics.freshScore}%</span>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Certified Binge-Worthy</p>
          <p className="text-neutral-400 text-xs uppercase tracking-wider">Tanseermeter</p>
        </div>
      </div>

      {/* Audience score */}
      <div className="flex items-center gap-3">
        <div className="grid place-items-center w-14 h-14 rounded-full bg-amber-400 text-black shadow-lg shadow-black/40">
          <span className="text-lg font-extrabold leading-none">{critics.audienceScore}%</span>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Audience Score</p>
          <p className="text-neutral-400 text-xs uppercase tracking-wider">
            Verified Stalkers
          </p>
        </div>
      </div>

      <p className="text-neutral-400 text-sm italic max-w-sm">
        “A wildly watchable lead with surprising emotional range and excellent taste in music.”
      </p>
    </div>
  </section>
);

const StalkerProfile = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Navbar />

      <StalkerBillboard playTargetId="continue" />

      {/* Rows overlap the hero, Netflix-style */}
      <div className="relative -mt-24 sm:-mt-32 z-10">
        <ContentRow id="continue" title="Continue Watching">
          {continueWatching.map((c) => (
            <ContinueWatchingCard key={c.id} item={c} />
          ))}
        </ContentRow>
      </div>

      <ContentRow title="Top 10 in My World Today">
        {topTen.map((t) => (
          <TopTenCard key={t.rank} item={t} />
        ))}
      </ContentRow>

      <ContentRow id="projects" title="Hobbies & Obsessions">
        {hobbies.map((h) => (
          <PosterCard key={h.id} item={h} />
        ))}
      </ContentRow>

      <ContentRow title="Filming Locations: Places I've Explored">
        {places.map((p) => (
          <PlaceCard key={p.id} item={p} />
        ))}
      </ContentRow>

      <ContentRow title="My List: The Bucket List">
        {myList.map((m) => (
          <PosterCard key={m.id} item={m} />
        ))}
      </ContentRow>

      <ContentRow title="Trending Now: Recent Plot Developments">
        {trendingNow.map((t) => (
          <PosterCard key={t.id} item={t} />
        ))}
      </ContentRow>

      <ContentRow title="Watch It Again: Comfort Rewatches">
        {watchItAgain.map((w) => (
          <PosterCard key={w.id} item={w} />
        ))}
      </ContentRow>

      <SoundtrackRow />

      <ContentRow title="Recurring Characters: Cast & Crew">
        {castAndCrew.map((c) => (
          <CharacterCard key={c.id} item={c} />
        ))}
      </ContentRow>

      <ContentRow title="Behind the Scenes: Bloopers & Outtakes">
        {behindTheScenes.map((b) => (
          <PosterCard key={b.id} item={b} />
        ))}
      </ContentRow>

      <CriticsBand />
      <ContentRow title="Critic Reviews">
        {critics.reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </ContentRow>

      <ContentRow title="Because You Stalked My LinkedIn…">
        {becauseYouStalked.map((r) => (
          <PosterCard key={r.id} item={r} />
        ))}
      </ContentRow>

      <ContentRow title="Hot Takes — Mature Audiences Only">
        {hotTakes.map((h) => (
          <HotTakeCard key={h.id} item={h} />
        ))}
      </ContentRow>

      <StatsBand />

      <ContentRow title="The Props Department: What I Use">
        {theSetup.map((s) => (
          <PosterCard key={s.id} item={s} />
        ))}
      </ContentRow>

      <DayInLifeSection id="about" />

      {/* Credits */}
      <footer
        className="px-4 sm:px-10 lg:px-16 pt-6 pb-24 text-center"
        style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      >
        <p className="text-neutral-500 text-sm">
          You’ve reached the end of the season.{' '}
          <span className="text-neutral-300">Roll credits.</span>
        </p>
        <p className="mt-2 text-neutral-600 text-xs">
          A Tanseer Original · Renewed for Season 2 · No coffee mugs were harmed
        </p>
      </footer>

      <SkipIntroEasterEgg />
    </div>
  );
};

export default StalkerProfile;
