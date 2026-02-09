import React, { useState, memo, useCallback } from 'react';
import { Book, ThemeColors } from '../types';
import './Navigation.css';
import './BookCover.css';

interface BookRowProps {
  title: string;
  books: Book[];
  theme: ThemeColors;
}

// Memoized BookRow to prevent unnecessary re-renders
export const BookRow: React.FC<BookRowProps> = memo(({ title, books, theme }) => {
  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_PAGE = 5;

  const handleNext = useCallback(() => {
    setStartIndex(prev => {
      if (prev + ITEMS_PER_PAGE < books.length) {
        return prev + ITEMS_PER_PAGE;
      }
      return prev;
    });
  }, [books.length]);

  const handlePrev = useCallback(() => {
    setStartIndex(prev => {
      if (prev - ITEMS_PER_PAGE >= 0) {
        return prev - ITEMS_PER_PAGE;
      }
      return prev;
    });
  }, []);

  const visibleBooks = books.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const showNext = startIndex + ITEMS_PER_PAGE < books.length;
  const showPrev = startIndex > 0;

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-light text-white mb-2 pl-2 border-l-4" style={{ borderColor: theme.primary }}>
        {title}
      </h3>
      
      <div className="flex items-center justify-between px-4">
        
        {/* Left Arrow Button */}
        <div className="w-24 flex justify-center flex-shrink-0">
          <button 
            className="button-3d" 
            onClick={handlePrev} 
            disabled={!showPrev}
            style={{ opacity: showPrev ? 1 : 0.3, cursor: showPrev ? 'pointer' : 'default' }}
          >
            <div className="button-top">
              <span className="text-xl">❮</span>
            </div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
          </button>
        </div>

        {/* Books Container */}
        <div 
          className="flex flex-1 justify-center space-x-8 pt-12 pb-12"
        >
          {visibleBooks.map((book) => (
            <div 
              key={book.id}
              data-interactive="true"
              className="flex-shrink-0 relative group"
              style={{ 
                width: '200px',
                willChange: 'transform',
                transition: 'transform 0.5s ease-out'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-16px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* Book Cover with Glow Effect */}
              <div 
                className="w-full aspect-[2/3] rounded-lg overflow-hidden relative book-cover-glow"
                style={{ 
                  '--glow-color': theme.glow,
                  '--primary-color': theme.primary,
                  transition: 'box-shadow 0.3s ease-out'
                } as React.CSSProperties}
              >
                <img 
                  src={book.coverImage} 
                  alt={book.title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Book Info */}
              <div className="mt-4 text-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-bold truncate text-lg">{book.title}</h4>
                <p className="text-gray-400 text-sm truncate">{book.author}</p>
              </div>
            </div>
          ))}
          
          {/* Fill empty spots if less than ITEMS_PER_PAGE on last page */}
          {visibleBooks.length < ITEMS_PER_PAGE && 
             Array.from({ length: ITEMS_PER_PAGE - visibleBooks.length }).map((_, i) => (
               <div key={`empty-${i}`} style={{ width: '200px' }} />
             ))
          }
        </div>

        {/* Right Arrow Button */}
        <div className="w-24 flex justify-center flex-shrink-0">
          <button 
            className="button-3d" 
            onClick={handleNext} 
            disabled={!showNext}
            style={{ opacity: showNext ? 1 : 0.3, cursor: showNext ? 'pointer' : 'default' }}
          >
            <div className="button-top">
              <span className="text-xl">❯</span>
            </div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
          </button>
        </div>

      </div>
    </div>
  );
});