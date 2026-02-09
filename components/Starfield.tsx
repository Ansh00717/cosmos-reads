import React, { useRef, useEffect, memo } from 'react';

interface StarfieldProps {
  isWarping: boolean;
}

interface Star {
  x: number;
  y: number;
  z: number;
}

// Memoize to prevent unnecessary re-renders from parent
export const Starfield: React.FC<StarfieldProps> = memo(({ isWarping }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0, cx: 0, cy: 0 });

  // Initialize stars
  const initStars = (count: number, width: number, height: number): Star[] => {
    const stars: Star[] = new Array(count);
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    for (let i = 0; i < count; i++) {
      stars[i] = {
        x: Math.random() * width - halfWidth,
        y: Math.random() * height - halfHeight,
        z: Math.random() * width,
      };
    }
    return stars;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let resizeTimeout: number | null = null;
    
    // Resize handler with debounce
    const handleResize = () => {
      if (resizeTimeout) {
        cancelAnimationFrame(resizeTimeout);
      }
      resizeTimeout = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        dimensionsRef.current = {
          width,
          height,
          cx: width / 2,
          cy: height / 2
        };
      });
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    dimensionsRef.current = { width, height, cx: width / 2, cy: height / 2 };
    
    // Reduced star count for better performance (500 instead of 800)
    starsRef.current = initStars(500, width, height);

    const render = () => {
      const { width, height, cx, cy } = dimensionsRef.current;
      const stars = starsRef.current;
      const starCount = stars.length;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Pre-calculate values used in loop
      const speed = isWarping ? 50 : 2;
      const streakLength = 30;

      // Use traditional for loop (faster than forEach)
      for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        
        // Move star closer
        star.z -= speed;

        // Reset if passed viewer
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - cx;
          star.y = Math.random() * height - cy;
        }

        // Pre-calculate division (expensive operation)
        const invZ = 1 / star.z;
        
        // Project 3D coordinates to 2D
        const x = star.x * invZ * width + cx;
        const y = star.y * invZ * height + cy;

        // Skip if outside viewport
        if (x < -10 || x > width + 10 || y < -10 || y > height + 10) continue;

        // Calculate size and alpha based on depth
        const depthRatio = 1 - star.z / width;
        const size = depthRatio * 3;
        const alpha = 0.5 + depthRatio * 0.5;

        if (isWarping) {
          // Warp effect: Draw lines
          const prevInvZ = 1 / (star.z + streakLength);
          const prevX = star.x * prevInvZ * width + cx;
          const prevY = star.y * prevInvZ * height + cy;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(210, 230, 255, ${alpha})`;
          ctx.lineWidth = size * 0.5;
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        } else {
          // Normal starfield
          ctx.beginPath();
          ctx.fillStyle = `rgba(210, 230, 255, ${alpha})`;
          ctx.arc(x, y, size > 0 ? size : 0.5, 0, 6.283185); // Use constant for PI*2
          ctx.fill();
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isWarping]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ willChange: 'transform' }}
    />
  );
});