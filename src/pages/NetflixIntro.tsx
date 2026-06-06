import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixIntro.css';

const NAME = 'TANSEER KHAN';
const LETTER_DELAY_MS = 80;
const LETTER_COUNT = NAME.replace(/ /g, '').length;
const LETTER_REVEAL_TOTAL_MS = LETTER_COUNT * LETTER_DELAY_MS + 600;
const AUTO_ADVANCE_AFTER_REVEAL_MS = 5000;
const NAVIGATE_AFTER_ADVANCE_MS = 4000;

const NetflixIntro = () => {
  const [isAdvancing, setIsAdvancing] = useState(false);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const advance = (withSound: boolean) => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    if (withSound) {
      const audio = new Audio('/netflix-sound.mp3');
      audio.play().catch((err) => console.error('Audio play error:', err));
    }
    setIsAdvancing(true);
  };

  useEffect(() => {
    autoAdvanceTimer.current = setTimeout(
      () => advance(false),
      LETTER_REVEAL_TOTAL_MS + AUTO_ADVANCE_AFTER_REVEAL_MS,
    );
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!isAdvancing) return;
    const t = setTimeout(() => navigate('/browse'), NAVIGATE_AFTER_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [isAdvancing, navigate]);

  const handleClick = () => {
    if (isAdvancing) return;
    advance(true);
  };

  let nonSpaceIdx = 0;
  const letters = NAME.split('').map((ch, i) => {
    if (ch === ' ') return <span key={i} className="word-gap" />;
    const delay = nonSpaceIdx * LETTER_DELAY_MS;
    nonSpaceIdx++;
    return (
      <span
        key={i}
        className="intro-letter"
        style={{ animationDelay: `${delay}ms` }}
      >
        {ch}
      </span>
    );
  });

  return (
    <div className="netflix-container" onClick={handleClick}>
      <div className={`intro-content ${isAdvancing ? 'animate' : ''}`}>
        <div className="flash-overlay" />
        <div className="name-wrapper">{letters}</div>
        <div
          className="tagline"
          style={{ animationDelay: `${LETTER_REVEAL_TOTAL_MS}ms` }}
        >
          DevOps Engineer
        </div>
        <div className="sound-bar">
          <span className="bar" style={{ height: '12px', animationDelay: '0s' }} />
          <span className="bar" style={{ height: '28px', animationDelay: '0.1s' }} />
          <span className="bar" style={{ height: '20px', animationDelay: '0.2s' }} />
          <span className="bar" style={{ height: '36px', animationDelay: '0.05s' }} />
          <span className="bar" style={{ height: '16px', animationDelay: '0.15s' }} />
          <span className="bar" style={{ height: '30px', animationDelay: '0.25s' }} />
          <span className="bar" style={{ height: '22px', animationDelay: '0.1s' }} />
        </div>
      </div>
    </div>
  );
};

export default NetflixIntro;
