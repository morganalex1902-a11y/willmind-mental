import React from 'react';
import './SnowEffect.css';

const SnowEffect: React.FC = () => {
  // Generate array of snowflakes with random positions and animation delays
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: Math.random() * 8 + 10,
    left: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
  }));

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}rem`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;
