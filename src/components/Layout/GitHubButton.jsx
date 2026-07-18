import { GitHubIcon } from "../Icons";

const GitHubButton = () => {
  return (
    <a
      href="https://github.com/inject3r/charlist"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-white/20 flex-shrink-0"
      aria-label="GitHub Repository"
    >
      <GitHubIcon className="w-4 h-4" />
      <span className="text-xs font-medium tracking-wide">GitHub</span>
    </a>
  );
};

export default GitHubButton;
