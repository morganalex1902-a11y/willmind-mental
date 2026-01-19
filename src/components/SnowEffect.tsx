import React from 'react';
import './SnowEffect.css';

const SnowEffect: React.FC = () => {
  // Generate array of snow particles with random positions and animation delays
  const snowParticles = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: Math.random() * 6 + 14,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2.5,
  }));

  return (
    <div className="snow-container">
      {snowParticles.map((particle) => (
        <div
          key={particle.id}
          className="snow-dot"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            '--duration': `${particle.duration}s`,
            '--size': `${particle.size}px`,
            opacity: Math.random() * 0.6 + 0.4,
          } as React.CSSProperties & { '--duration': string; '--size': string }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
