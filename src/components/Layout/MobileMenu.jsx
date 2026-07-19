import { NavLink } from "react-router-dom";
import { tabs } from "../../config/tabsConfig";
import { GitHubIcon } from "../Icons";

const MobileMenu = ({ isOpen, onTabChange, onClose }) => {
  if (!isOpen) return null;

  const getTabPath = (tabId) => (tabId === "all" ? "/" : `/${tabId}`);

  return (
    <div className="md:hidden py-3 sm:py-4 border-t border-white/5 mt-2">
      <div className="grid grid-cols-2 gap-1">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={getTabPath(tab.id)}
            className={({ isActive }) => `
              text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium
              transition-all duration-200
              ${isActive ? "bg-white/5 text-white" : "text-gray-500 hover:text-white hover:bg-white/5"}
            `}
            onClick={() => {
              onClose();
              onTabChange(tab.id);
            }}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      
        href="https://github.com/inject3r/charlist"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 mt-3 border-t border-white/5 pt-3"
      >
        <GitHubIcon className="w-5 h-5" />
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default MobileMenu;
