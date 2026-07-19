import { NavLink } from "react-router-dom";
import { tabs } from "../../config/tabsConfig";

const TabNavigation = ({ onTabChange }) => {
  const getTabPath = (tabId) =>
    tabId === "all" ? "/charlist" : `/charlist/${tabId}`;

  return (
    <div className="hidden md:flex items-center border-t border-white/5 pt-2">
      <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={getTabPath(tab.id)}
            className={({ isActive }) => `
              relative px-4 py-2.5 text-xs font-medium tracking-wide
              transition-all duration-300 whitespace-nowrap uppercase
              ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"}
            `}
            onClick={() => onTabChange(tab.id)}
          >
            {({ isActive }) => (
              <>
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-0.5 bg-white rounded-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
