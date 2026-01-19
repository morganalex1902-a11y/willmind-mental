import React, { useEffect, useRef } from 'react';

const SnowParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Snowflake array
    interface Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      windOffsetX: number;
    }

    const snowflakes: Snowflake[] = [];
    const snowflakeCount = 100;

    // Create snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 1,
        windOffsetX: 0,
      });
    }

    let windX = 0;
    let windDirection = 1;
    let frameCount = 0;

    const animate = () => {
      // Clear canvas with semi-transparent white
      ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update wind effect
      frameCount++;
      if (frameCount % 50 === 0) {
        windDirection = Math.random() > 0.5 ? 1 : -1;
      }
      windX += windDirection * 0.05;

      // Draw and update snowflakes
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      snowflakes.forEach((flake) => {
        // Update position
        flake.y += flake.speed;
        flake.x += windX * 0.3;
        flake.windOffsetX += windX * 0.1;

        // Wrap around edges
        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) {
          flake.x = 0;
        }
        if (flake.x < 0) {
          flake.x = canvas.width;
        }

        // Draw snowflake as a circle
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        background: 'transparent',
      }}
    />
  );
};

export default SnowParticles;
