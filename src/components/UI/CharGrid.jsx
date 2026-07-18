import { useState, useEffect, useRef } from "react";
import CharCard from "./CharCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const CharGrid = ({ chars, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 500;

  const filteredChars = chars.filter((item) => {
    const char = typeof item === "string" ? item : item.char;
    const name = typeof item === "string" ? "" : item.name || "";
    const query = searchQuery.toLowerCase();

    return (
      char.toLowerCase().includes(query) || name.toLowerCase().includes(query)
    );
  });

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
        if (currentPage !== 1) {
          setCurrentPage(1);
        }
      }, 300);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchQuery, chars]);

  const totalItems = filteredChars.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filteredChars.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

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

  const showPagination = totalItems > itemsPerPage;

  return (
    <div>
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 lg:grid-cols-12 xl:grid-cols-14 2xl:grid-cols-16 gap-2 sm:gap-3 p-2 sm:p-4 max-w-7xl mx-auto">
        {currentItems.map((item, index) => {
          const char = typeof item === "string" ? item : item.char;
          const name = typeof item === "string" ? "" : item.name || "";
          const globalIndex = startIndex + index;
          return (
            <CharCard key={`${char}-${globalIndex}`} char={char} name={name} />
          );
        })}
      </div>

      {showPagination && (
        <div className="flex items-center justify-center gap-2 mt-6 mb-4 px-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${
                currentPage === 1
                  ? "text-gray-600 cursor-not-allowed opacity-50"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1">
            {getPageNumbers()[0] > 1 && (
              <>
                <button
                  onClick={() => goToPage(1)}
                  className="px-3 py-1.5 text-sm rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  1
                </button>
                {getPageNumbers()[0] > 2 && (
                  <span className="text-gray-600">…</span>
                )}
              </>
            )}

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`
                  px-3 py-1.5 text-sm rounded-lg transition-all duration-300
                  ${
                    currentPage === page
                      ? "bg-white/10 text-white font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {page}
              </button>
            ))}

            {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
              <>
                {getPageNumbers()[getPageNumbers().length - 1] <
                  totalPages - 1 && <span className="text-gray-600">…</span>}
                <button
                  onClick={() => goToPage(totalPages)}
                  className="px-3 py-1.5 text-sm rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${
                currentPage === totalPages
                  ? "text-gray-600 cursor-not-allowed opacity-50"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {showPagination && (
        <div className="text-center text-xs text-gray-500 mt-2">
          Showing {startIndex + 1} - {endIndex} of {totalItems} characters (Page{" "}
          {currentPage} of {totalPages})
        </div>
      )}
    </div>
  );
};

export default CharGrid;
