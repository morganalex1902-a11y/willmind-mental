import React from 'react';
import './SnowEffect.css';

const SnowEffect: React.FC = () => {
  // Generate array of snow particles with random positions and animation delays
  const snowParticles = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: Math.random() * 5 + 16,
    left: Math.random() * 100,
    size: Math.random() * 6 + 3,
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
            opacity: Math.random() * 0.3 + 0.8,
          } as React.CSSProperties & { '--duration': string; '--size': string }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
