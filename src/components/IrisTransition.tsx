import { useEffect, useState } from 'react';

type Props = {
  centerX: number;
  centerY: number;
  durationMs: number;
};

const IrisTransition = ({ centerX, centerY, durationMs }: Props) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black pointer-events-none"
      style={{
        clipPath: expanded
          ? `circle(150% at ${centerX}px ${centerY}px)`
          : `circle(0% at ${centerX}px ${centerY}px)`,
        transition: `clip-path ${durationMs}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    />
  );
};

export default IrisTransition;
