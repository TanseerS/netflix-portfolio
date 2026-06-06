import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import IrisTransition from '../components/IrisTransition';
import { profiles, type Profile } from '../data/profiles';

const IRIS_DURATION_MS = 700;

const Browse = () => {
  const navigate = useNavigate();
  const [iris, setIris] = useState<{ centerX: number; centerY: number } | null>(null);

  const handleClick = (profile: Profile, rect: DOMRect) => {
    if (iris) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setIris({ centerX, centerY });
    setTimeout(() => navigate(`/browse/${profile.id}`), IRIS_DURATION_MS);
  };

  return (
    <div className="min-h-screen w-screen bg-black overflow-hidden relative">
      <div className="min-h-screen w-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-[clamp(28px,5vw,56px)] font-normal mb-10 sm:mb-14 text-center">
          Who's Watching?
        </h1>
        <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 max-w-3xl">
          {profiles.map((p) => (
            <ProfileCard
              key={p.id}
              name={p.name}
              image={p.image}
              onClick={(rect) => handleClick(p, rect)}
              disabled={!!iris}
            />
          ))}
        </div>
      </div>
      {iris && (
        <IrisTransition
          centerX={iris.centerX}
          centerY={iris.centerY}
          durationMs={IRIS_DURATION_MS}
        />
      )}
    </div>
  );
};

export default Browse;
