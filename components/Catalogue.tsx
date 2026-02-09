import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Book, Category, ThemeColors } from "../types";
import { BOOKS } from "../constants";
import { BookRow } from "./BookRow";
import { BackToTop } from "./BackToTop";
import { ReturnButton } from "./ReturnButton";
import { SocialsButton } from "./SocialsButton";
import "./SearchBar.css";
import "./Scrollbar.css";
import "./Navbar.css";

interface CatalogueProps {
  onBack: () => void;
  accentColor: ThemeColors;
}

export const Catalogue: React.FC<CatalogueProps> = ({
  onBack,
  accentColor: theme,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books based on search (title, author, category, or keywords)
  const filteredBooks = useMemo(() => {
    if (!searchTerm) return BOOKS;
    const term = searchTerm.toLowerCase();
    return BOOKS.filter(
      (b) =>
        b.title.toLowerCase().includes(term) ||
        b.author.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term) ||
        (b.keywords && b.keywords.some(k => k.toLowerCase().includes(term))),
    );
  }, [searchTerm]);

  // Group by category
  const booksByCategory = useMemo(() => {
    const grouped: Record<string, Book[]> = {};
    Object.values(Category).forEach((cat) => {
      grouped[cat] = filteredBooks.filter((b) => b.category === cat);
    });
    return grouped;
  }, [filteredBooks]);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const lastScrollTopRef = useRef(false);

  // Throttled scroll handler to reduce state updates
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return;
    
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      scrollTimeoutRef.current = null;
      if (containerRef.current) {
        const shouldShow = containerRef.current.scrollTop > 300;
        // Only update state if value changed
        if (shouldShow !== lastScrollTopRef.current) {
          lastScrollTopRef.current = shouldShow;
          setShowBackToTop(shouldShow);
        }
      }
    });
  }, []);

  // Cleanup scroll timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div 
      ref={containerRef}
      onScroll={handleScroll}
      className="relative z-10 w-full h-screen overflow-y-auto custom-scrollbar flex flex-col pt-24 pb-12 px-6 md:px-12"
      style={{
        '--theme-primary': theme.primary,
        '--theme-secondary': theme.secondary,
        '--theme-glow': theme.glow,
      } as React.CSSProperties}
    >
      <BackToTop onClick={scrollToTop} visible={showBackToTop} />

      {/* Header & Nav */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between glass-navbar">
        {/* Breadcrumb / Nav */}
        <div className="flex items-center space-x-4 text-white/60 font-mono text-sm tracking-widest uppercase">
          <ReturnButton onClick={onBack} />
          <span>/</span>
          <span className="text-white">Catalogue</span>
          <span>/</span>
          <span>Library</span>
        </div>

        {/* Socials Button - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
            <SocialsButton />
        </div>

        {/* Search Bar */}
        <div className="sb-container">
          <input
            type="text"
            name="text"
            className="sb-input"
            required
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="sb-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Search</title>
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-8 animate-fade-in">
        {Object.values(Category).map((category) => {
          const books = booksByCategory[category];
          if (books.length === 0) return null;
          return (
            <BookRow
              key={category}
              title={category}
              books={books}
              theme={theme}
            />
          );
        })}

        {/* Empty state */}
        {Object.values(booksByCategory).every((arr: Book[]) => arr.length === 0) && (
          <div className="text-center text-white/50 py-20">
            <p className="text-xl">
              No celestial records found matching your query.
            </p>
          </div>
        )}
      </div>

      {/* Inline Keyframes for fade in */}
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
