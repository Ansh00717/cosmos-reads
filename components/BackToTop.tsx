import React from 'react';
import './BackToTop.css';

interface BackToTopProps {
  onClick: () => void;
  visible: boolean;
}

export const BackToTop: React.FC<BackToTopProps> = ({ onClick, visible }) => {
  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <button className="back-to-top-button" onClick={onClick}>
        <svg viewBox="0 0 384 512" className="back-to-top-svgIcon">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
