import { useState } from "react";
import { Search, X, ChevronDown } from "lucide-react";

const SearchBar = ({
  onSearch,
  onCategoryChange,
  categories = [],
  selectedCategory = "all",
}) => {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  const handleCategorySelect = (categoryId) => {
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
    setIsDropdownOpen(false);
  };

  const getSelectedCategoryName = () => {
    if (selectedCategory === "all") return "All";
    if (!categories || categories.length === 0) return "All";
    const category = categories.find((cat) => cat.id === selectedCategory);
    return category ? category.label : "All";
  };

  return (
    <div className="relative group">
      <div className="flex items-center bg-[#1a1a2e] border border-white/5 rounded-lg focus-within:ring-1 focus-within:ring-white/20 focus-within:border-white/20 transition-all duration-300">
        <Search className="absolute left-3 text-gray-600 group-focus-within:text-gray-400 w-4 h-4 transition-colors duration-300" />

        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search characters..."
          className="w-full pl-10 pr-2 py-2.5 bg-transparent outline-none text-white placeholder-gray-600 text-sm"
        />

        {categories && categories.length > 0 && (
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 px-3 py-2.5 text-gray-400 hover:text-white transition-colors duration-300 border-l border-white/5 ml-2 flex-shrink-0"
          >
            <span className="text-xs font-medium tracking-wide">
              {getSelectedCategoryName()}
            </span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}

        {query && (
          <button
            onClick={handleClear}
            className="px-2 py-2.5 text-gray-600 hover:text-gray-400 transition-colors duration-300 flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isDropdownOpen && categories && categories.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a2e] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
          <div className="max-h-60 overflow-y-auto py-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`
                  w-full text-left px-4 py-2.5 text-sm transition-colors duration-200
                  ${
                    selectedCategory === category.id
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
