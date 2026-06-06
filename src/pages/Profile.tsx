import { useParams } from 'react-router-dom';

const Profile = () => {
  const { profileId } = useParams();
  return (
    <div className="min-h-screen w-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 capitalize">{profileId}</h1>
        <p className="text-neutral-400">Screen 3 — to be built next.</p>
      </div>
    </div>
  );
};

export default Profile;
