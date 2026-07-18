const Logo = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 group">
      <svg
        width="40"
        height="40"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-500 group-hover:scale-105 w-8 h-8 sm:w-[52px] sm:h-[52px]"
      >
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="4"
              floodColor="#000000"
              floodOpacity="0.15"
            />
          </filter>
        </defs>

        <g opacity="0.15">
          <line
            x1="26"
            y1="4"
            x2="26"
            y2="12"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="26"
            y1="40"
            x2="26"
            y2="48"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="26"
            x2="12"
            y2="26"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="26"
            x2="48"
            y2="26"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <line
            x1="10"
            y1="10"
            x2="16"
            y2="16"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="36"
            x2="42"
            y2="42"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="42"
            y1="10"
            x2="36"
            y2="16"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="10"
            y1="42"
            x2="16"
            y2="36"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        <g opacity="0.25">
          <line
            x1="26"
            y1="7"
            x2="26"
            y2="15"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="26"
            y1="37"
            x2="26"
            y2="45"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="7"
            y1="26"
            x2="15"
            y2="26"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="37"
            y1="26"
            x2="45"
            y2="26"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        <circle
          cx="26"
          cy="26"
          r="22"
          className="stroke-gray-400 dark:stroke-gray-500"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          opacity="0.3"
        />
        <circle
          cx="26"
          cy="26"
          r="18"
          className="stroke-gray-500 dark:stroke-gray-400"
          strokeWidth="0.6"
          strokeDasharray="4 8"
          opacity="0.25"
        />
        <circle
          cx="26"
          cy="26"
          r="14"
          className="stroke-gray-600 dark:stroke-gray-300"
          strokeWidth="0.5"
          opacity="0.2"
        />

        <circle
          cx="26"
          cy="26"
          r="8"
          className="fill-gray-900 dark:fill-white"
          opacity="0.05"
        />
        <circle
          cx="26"
          cy="26"
          r="5"
          className="fill-gray-800 dark:fill-gray-200"
          opacity="0.08"
        />

        <circle
          cx="26"
          cy="26"
          r="3"
          className="fill-gray-900 dark:fill-white"
          filter="url(#shadow)"
        />
        <circle
          cx="26"
          cy="26"
          r="4.5"
          className="stroke-gray-700 dark:stroke-gray-300"
          strokeWidth="1"
          opacity="0.3"
        />

        <g opacity="0.6">
          <circle
            cx="16"
            cy="16"
            r="1.8"
            className="fill-gray-700 dark:fill-gray-300"
          />
          <circle
            cx="36"
            cy="16"
            r="1.5"
            className="fill-gray-700 dark:fill-gray-300"
          />
          <circle
            cx="16"
            cy="36"
            r="1.3"
            className="fill-gray-700 dark:fill-gray-300"
          />
          <circle
            cx="36"
            cy="36"
            r="1.7"
            className="fill-gray-700 dark:fill-gray-300"
          />

          <circle
            cx="20"
            cy="12"
            r="1"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
          <circle
            cx="32"
            cy="12"
            r="1.2"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
          <circle
            cx="12"
            cy="20"
            r="1.1"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
          <circle
            cx="40"
            cy="20"
            r="0.9"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
          <circle
            cx="12"
            cy="32"
            r="1"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
          <circle
            cx="40"
            cy="32"
            r="1.3"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
          <circle
            cx="20"
            cy="40"
            r="0.8"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
          <circle
            cx="32"
            cy="40"
            r="1.1"
            className="fill-gray-500 dark:fill-gray-400"
            opacity="0.6"
          />
        </g>

        <g opacity="0.3">
          <circle
            cx="14"
            cy="10"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />
          <circle
            cx="38"
            cy="10"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />
          <circle
            cx="10"
            cy="14"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />
          <circle
            cx="42"
            cy="14"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />
          <circle
            cx="10"
            cy="38"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />
          <circle
            cx="42"
            cy="38"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />
          <circle
            cx="14"
            cy="42"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />
          <circle
            cx="38"
            cy="42"
            r="0.6"
            className="fill-gray-400 dark:fill-gray-500"
          />

          <circle
            cx="18"
            cy="8"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <circle
            cx="34"
            cy="8"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <circle
            cx="8"
            cy="18"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <circle
            cx="44"
            cy="18"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <circle
            cx="8"
            cy="34"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <circle
            cx="44"
            cy="34"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <circle
            cx="18"
            cy="44"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <circle
            cx="34"
            cy="44"
            r="0.4"
            className="fill-gray-300 dark:fill-gray-600"
          />
        </g>

        <g opacity="0.15">
          <polygon
            points="26,8 29,14 23,14"
            className="fill-gray-800 dark:fill-gray-200"
          />
          <polygon
            points="26,44 29,38 23,38"
            className="fill-gray-800 dark:fill-gray-200"
          />
          <polygon
            points="8,26 14,23 14,29"
            className="fill-gray-800 dark:fill-gray-200"
          />
          <polygon
            points="44,26 38,23 38,29"
            className="fill-gray-800 dark:fill-gray-200"
          />
        </g>

        <g opacity="0.2">
          <line
            x1="26"
            y1="17"
            x2="26"
            y2="20"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="26"
            y1="32"
            x2="26"
            y2="35"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="17"
            y1="26"
            x2="20"
            y2="26"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="32"
            y1="26"
            x2="35"
            y2="26"
            className="stroke-gray-600 dark:stroke-gray-400"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <span className="text-xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-all duration-300 group-hover:opacity-70">
        CharList
      </span>
    </div>
  );
};

export default Logo;
