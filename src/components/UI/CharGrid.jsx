import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { FixedSizeGrid } from "react-window";
import CharCard from "./CharCard";

const CharGridSkeleton = () => {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 lg:grid-cols-12 xl:grid-cols-14 2xl:grid-cols-16 gap-2 sm:gap-3 p-2 sm:p-4 max-w-7xl mx-auto">
      {[...Array(50)].map((_, index) => (
        <div
          key={index}
          className="aspect-square bg-[#14141e] border border-white/5 rounded-xl animate-pulse"
        />
      ))}
    </div>
  );
};

const BREAKPOINTS = [
  { minWidth: 1536, columns: 16 },
  { minWidth: 1280, columns: 14 },
  { minWidth: 1024, columns: 12 },
  { minWidth: 768, columns: 11 },
  { minWidth: 640, columns: 8 },
  { minWidth: 0, columns: 6 },
];

const getColumnsForWidth = (width) => {
  const match = BREAKPOINTS.find((bp) => width >= bp.minWidth);
  return match ? match.columns : 6;
};

const GAP = 12;

const useContainerWidth = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(ref.current);
    setWidth(ref.current.offsetWidth);
    return () => observer.disconnect();
  }, []);

  return [ref, width];
};

const CharGrid = ({ chars, searchQuery }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [containerRef, containerWidth] = useContainerWidth();

  const filteredChars = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return chars.filter((item) => {
      const char = typeof item === "string" ? item : item.char;
      const name = typeof item === "string" ? "" : item.name || "";
      return (
        char.toLowerCase().includes(query) || name.toLowerCase().includes(query)
      );
    });
  }, [chars, searchQuery]);

  const previousSearchQueryRef = useRef(searchQuery);
  const previousCharsRef = useRef(chars);
  const timeoutRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setIsLoading(false);
      return;
    }

    const searchChanged = searchQuery !== previousSearchQueryRef.current;
    const charsChanged = chars !== previousCharsRef.current;

    if (searchChanged || charsChanged) {
      previousSearchQueryRef.current = searchQuery;
      previousCharsRef.current = chars;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setIsLoading(true);
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchQuery, chars]);

  const columnCount = getColumnsForWidth(containerWidth);
  const rowCount = Math.ceil(filteredChars.length / columnCount);
  const columnWidth = columnCount > 0 ? containerWidth / columnCount : 90;
  const rowHeight = columnWidth;

  const Cell = useCallback(
    ({ columnIndex, rowIndex, style }) => {
      const index = rowIndex * columnCount + columnIndex;
      if (index >= filteredChars.length) return null;
      const item = filteredChars[index];
      const char = typeof item === "string" ? item : item.char;
      const name = typeof item === "string" ? "" : item.name || "";

      const adjustedStyle = {
        ...style,
        left: style.left + GAP / 2,
        top: style.top + GAP / 2,
        width: style.width - GAP,
        height: style.height - GAP,
      };

      return (
        <div style={adjustedStyle}>
          <CharCard char={char} name={name} />
        </div>
      );
    },
    [filteredChars, columnCount],
  );

  if (isLoading) {
    return <CharGridSkeleton />;
  }

  if (filteredChars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-16 h-16 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p className="text-gray-400 text-lg font-light tracking-wide">
          No characters found
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Try adjusting your search term
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto p-2 sm:p-4">
      {containerWidth > 0 && (
        <FixedSizeGrid
          columnCount={columnCount}
          columnWidth={columnWidth}
          rowCount={rowCount}
          rowHeight={rowHeight}
          width={containerWidth}
          height={Math.min(rowCount * rowHeight, window.innerHeight * 0.75)}
        >
          {Cell}
        </FixedSizeGrid>
      )}
      <div className="text-center text-xs text-gray-500 mt-2">
        {filteredChars.length} characters
      </div>
    </div>
  );
};

export default CharGrid;
