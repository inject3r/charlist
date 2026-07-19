import { useState, useEffect } from "react";
import Logo from "../Logo";
import SearchBar from "../UI/SearchBar";
import { Menu, X } from "lucide-react";
import RecentCopies from "./RecentCopies";
import GitHubButton from "./GitHubButton";
import TabNavigation from "./TabNavigation";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Header = ({
  onSearch,
  onCategoryChange,
  categories,
  selectedCategory,
  activeTab,
  onTabChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [recentCopies, setRecentCopies] = useState(() => {
    const saved = localStorage.getItem("recentCopies");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "recentCopies") {
        try {
          setRecentCopies(JSON.parse(e.newValue) || []);
        } catch {
          setRecentCopies([]);
        }
      }
    };

    const handleCustomEvent = (e) => {
      setRecentCopies(e.detail);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("recentCopiesUpdated", handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("recentCopiesUpdated", handleCustomEvent);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center gap-3 py-2 sm:py-3">
          <Link to="/charlist">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center flex-1 gap-3">
            <div className="flex-1 max-w-md">
              <SearchBar
                onSearch={onSearch}
                onCategoryChange={onCategoryChange}
                categories={categories}
                selectedCategory={selectedCategory}
              />
            </div>
            <RecentCopies copies={recentCopies} />
          </div>

          <GitHubButton />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors ml-auto"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="md:hidden space-y-2 pb-2 sm:pb-3">
          <SearchBar
            onSearch={onSearch}
            onCategoryChange={onCategoryChange}
            categories={categories}
            selectedCategory={selectedCategory}
          />
          <RecentCopies copies={recentCopies} mobile />
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />

        <MobileMenu
          isOpen={mobileMenuOpen}
          activeTab={activeTab}
          onTabChange={onTabChange}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
