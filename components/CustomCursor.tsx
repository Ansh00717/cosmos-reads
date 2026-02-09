import React, { useEffect, useRef, useCallback } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Use direct DOM manipulation to avoid React re-renders
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Check if hovering over an interactive element
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('[data-interactive="true"]');
      
      const nowHovering = !!isInteractive;
      
      // Only update classes if hover state changed
      if (nowHovering !== isHoveringRef.current) {
        isHoveringRef.current = nowHovering;
        
        if (innerRef.current) {
          if (nowHovering) {
            innerRef.current.classList.add('scale-150', 'rotate-90');
            innerRef.current.classList.remove('scale-100', 'rotate-0');
          } else {
            innerRef.current.classList.remove('scale-150', 'rotate-90');
            innerRef.current.classList.add('scale-100', 'rotate-0');
          }
        }
        
        if (ringRef.current) {
          if (nowHovering) {
            ringRef.current.classList.add('w-12', 'h-12', 'opacity-100');
            ringRef.current.classList.remove('w-0', 'h-0', 'opacity-0');
          } else {
            ringRef.current.classList.remove('w-12', 'h-12', 'opacity-100');
            ringRef.current.classList.add('w-0', 'h-0', 'opacity-0');
          }
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
    >
      {/* The Plus Sign */}
      <div 
        ref={innerRef}
        className="relative -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out scale-100 rotate-0"
      >
        <div className="absolute w-[20px] h-[2px] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"></div>
        <div className="absolute w-[2px] h-[20px] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"></div>
      </div>
      
      {/* Outer Ring on Hover */}
      <div 
        ref={ringRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full transition-all duration-300 ease-out w-0 h-0 opacity-0"
      />
    </div>
  );
};
