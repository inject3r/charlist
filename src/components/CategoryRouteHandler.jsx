import { useState, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Layout/Header";
import CharGrid from "./UI/CharGrid";
import { dataMap, categories, getAllData } from "../config/dataConfig";

const CategoryRouteHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allCharsCache] = useState(() => {
    const allData = getAllData();
    return allData.chars || [];
  });

  const currentTab = useMemo(() => {
    if (location.pathname === "/") return "all";
    const tab = location.pathname.replace(/^\//, "");
    return dataMap[tab] ? tab : "all";
  }, [location.pathname]);

  const handleTabChange = useCallback(
    (tabId) => {
      navigate(tabId === "all" ? "/" : `/${tabId}`);
      setSearchQuery("");
      setSelectedCategory(tabId);
    },
    [navigate],
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = useCallback(
    (categoryId) => {
      setSelectedCategory(categoryId);
      navigate(categoryId === "all" ? "/" : `/${categoryId}`);
    },
    [navigate],
  );

  const filteredData = useMemo(() => {
    let data = dataMap[currentTab]?.chars || [];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      data = allCharsCache.filter((item) => {
        const char = typeof item === "string" ? item : item.char;
        const name = typeof item === "string" ? "" : item.name || "";
        return (
          char.toLowerCase().includes(query) ||
          name.toLowerCase().includes(query)
        );
      });
    }

    return data;
  }, [currentTab, searchQuery, allCharsCache]);

  const getCategoryName = useCallback(() => {
    if (currentTab === "all") return "All Characters";
    const category = categories.find((cat) => cat.id === currentTab);
    return category ? category.label : "All Characters";
  }, [currentTab]);

  return (
    <>
      <Header
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        categories={categories}
        selectedCategory={selectedCategory}
        activeTab={currentTab}
        onTabChange={handleTabChange}
      />
      <main className="max-w-7xl mx-auto px-2 md:px-4 py-8">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center mx-3 md:px-0 gap-4 sm:gap-6 mb-8 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-2xl font-light tracking-tight text-white">
                {searchQuery ? "Search Results" : getCategoryName()}
              </h2>
              <p className="text-gray-500 text-sm mt-1 font-light tracking-wide">
                {filteredData.length} character
                {filteredData.length !== 1 ? "s" : ""} available
              </p>
            </div>
            {searchQuery && (
              <div className="text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 inline-block">
                <span className="tracking-wide">
                  Searching all categories for "
                </span>
                <span className="text-gray-300">{searchQuery}</span>
                <span className="tracking-wide">"</span>
              </div>
            )}
          </div>
          <CharGrid chars={filteredData} searchQuery={searchQuery} />
        </div>
      </main>
    </>
  );
};

export default CategoryRouteHandler;
