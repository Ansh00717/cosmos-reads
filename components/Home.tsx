import React from 'react';
import { ThemeColors } from '../types';
import { EnterButton } from './EnterButton';

interface HomeProps {
  onEnter: () => void;
  accentColor: ThemeColors;
}

export const Home: React.FC<HomeProps> = ({ onEnter, accentColor: theme }) => {
  return (
    <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center text-center p-6">
      
      <div className="space-y-6 max-w-4xl">
        <h1 
          className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl"
          style={{ 
            fontFamily: "'Orbitron', sans-serif", 
            textShadow: `0 0 30px ${theme.primary}80, 0 0 60px ${theme.primary}40` 
          }}
        >
          COSMOS READS
        </h1>
        
        <p 
          className="text-xl md:text-3xl text-gray-300 font-light tracking-widest uppercase"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Reading Beneath A Cosmic Universe
        </p>

        <div className="pt-12">
<EnterButton onClick={onEnter} accentColor={theme} />
        </div>
      </div>
    </div>
  );
};
