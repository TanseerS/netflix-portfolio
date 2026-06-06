import { Routes, Route } from 'react-router-dom';
import NetflixIntro from './pages/NetflixIntro';
import Browse from './pages/Browse';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixIntro />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default App;
