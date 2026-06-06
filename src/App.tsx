import { Routes, Route } from 'react-router-dom';
import NetflixIntro from './pages/NetflixIntro';
import Browse from './pages/Browse';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixIntro />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/browse/:profileId" element={<Profile />} />
    </Routes>
  );
};

export default App;
