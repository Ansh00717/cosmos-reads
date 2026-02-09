import React, { useState, useEffect } from 'react';
import { Starfield } from './components/Starfield';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './components/Home';
import { Catalogue } from './components/Catalogue';
import { AppView, ThemeColors } from './types';
import { THEMES } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState<ThemeColors>(() => THEMES[Math.floor(Math.random() * THEMES.length)]);
  const [isWarping, setIsWarping] = useState(false);

  // Transition Handler
  const handleTransition = (targetView: AppView) => {
    if (isTransitioning) return;

    // 1. Start Warp
    setIsTransitioning(true);
    setIsWarping(true);

    // 2. Wait for warp acceleration (screen shake / blur handled via CSS classes)
    setTimeout(() => {
        // 3. Switch Content & Theme in the middle of warp
        setView(targetView);
        
        // Removed theme randomization to keep theme in sync between pages
        
        // Scroll to top
        window.scrollTo(0, 0);

        // Scroll to top
        window.scrollTo(0, 0);

        // 4. End Warp logic
        setTimeout(() => {
            setIsWarping(false);
            setIsTransitioning(false);
        }, 800); 

    }, 1200); // Duration of "enter warp" phase
  };

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_#1B2735_0%,_#000000_100%)] bg-fixed overflow-hidden font-sans selection:bg-white/30 selection:text-white">
      
      {/* Background */}
      <Starfield isWarping={isWarping} />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* View Container with CSS Blur/Shake transitions */}
      <div 
        className={`
            relative z-10 transition-all duration-1000 ease-in-out
            ${isTransitioning ? 'opacity-0 scale-110 blur-md' : 'opacity-100 scale-100 blur-0'}
        `}
      >
        {view === AppView.HOME ? (
          <Home 
            onEnter={() => handleTransition(AppView.CATALOGUE)} 
            accentColor={theme} 
          />
        ) : (
          <Catalogue 
            onBack={() => handleTransition(AppView.HOME)} 
            accentColor={theme} 
          />
        )}
      </div>

      {/* Screen Shake / Hyperloop Overlay Effect */}
      <div 
        className={`
            fixed inset-0 pointer-events-none z-50 transition-opacity duration-500
            bg-gradient-to-r from-transparent via-white/5 to-transparent
            mix-blend-overlay
            ${isWarping ? 'opacity-100 animate-shake' : 'opacity-0'}
        `}
      />

      <style>{`
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        .animate-shake {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite;
        }
      `}</style>
    </div>
  );
};

export default App;