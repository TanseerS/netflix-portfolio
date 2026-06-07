import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RecruiterProfile from './RecruiterProfile';

const Profile = () => {
  const { profileId } = useParams<{ profileId: string }>();

  if (profileId === 'recruiter') {
    return <RecruiterProfile />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold capitalize">{profileId}</h1>
            <p className="text-neutral-400 mt-3">
              Hero / banner section (placeholder).
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="min-h-screen flex items-center justify-center px-4 border-t border-neutral-900"
        >
          <h2 className="text-4xl font-bold text-neutral-300">Experience</h2>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 border-t border-neutral-900"
        >
          <h2 className="text-4xl font-bold text-neutral-300">Projects</h2>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-4 border-t border-neutral-900"
        >
          <h2 className="text-4xl font-bold text-neutral-300">Contact</h2>
        </section>
      </main>
    </div>
  );
};

export default Profile;
