import React from 'react';
import './ReturnButton.css';

interface ReturnButtonProps {
  onClick: () => void;
}

export const ReturnButton: React.FC<ReturnButtonProps> = ({ onClick }) => {
  return (
    <button className="return-btn" type="button" onClick={onClick}>
      <div className="btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="20px" width="20px">
          <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="white"></path>
          <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="white"></path>
        </svg>
      </div>
      <p className="btn-text">Return</p>
    </button>
  );
};
