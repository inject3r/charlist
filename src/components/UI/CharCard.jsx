import { useState } from "react";
import Toast from "./Toast";

const decodeHtmlEntities = (str) => {
  if (!str) return str;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
};

const CharCard = ({ char, name }) => {
  const [showToast, setShowToast] = useState(false);

  const decodedChar = decodeHtmlEntities(char);
  const decodedName = decodeHtmlEntities(name);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(decodedChar);
      setShowToast(true);

      const saved = localStorage.getItem("recentCopies");
      let recentCopies = saved ? JSON.parse(saved) : [];
      recentCopies = recentCopies.filter((item) => item !== decodedChar);
      recentCopies = [decodedChar, ...recentCopies].slice(0, 6);
      localStorage.setItem("recentCopies", JSON.stringify(recentCopies));

      window.dispatchEvent(
        new CustomEvent("recentCopiesUpdated", {
          detail: recentCopies,
        }),
      );
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getNameFontSize = () => {
    if (!decodedName) return "";
    if (decodedName.length <= 10) return "text-[8px] sm:text-[10px]";
    if (decodedName.length <= 15) return "text-[7px] sm:text-[9px]";
    if (decodedName.length <= 20) return "text-[6px] sm:text-[8px]";
    return "text-[5px] sm:text-[7px]";
  };

  const isLongName = decodedName && decodedName.length > 12;

  return (
    <>
      <div
        onClick={handleCopy}
        className="group relative bg-[#14141e] hover:bg-[#1a1a2e] border border-white/5 hover:border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-3 flex flex-col items-center justify-center aspect-square backdrop-blur-sm"
      >
        <span className="text-[1rem] sm:text-3xl font-light text-white group-hover:scale-110 group-hover:text-white transition-all duration-300">
          {decodedChar}
        </span>

        {decodedName && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full px-2">
            <span
              className={`
                ${getNameFontSize()} 
                text-gray-500 bg-black/60 px-2 py-0.5 rounded-md 
                block text-center leading-tight
                ${isLongName ? "break-words" : "whitespace-nowrap"}
                max-w-full
              `}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                wordBreak: "break-word",
              }}
            >
              {decodedName}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500" />
      </div>

      <Toast
        message={`Copied "${decodedChar}"${decodedName ? ` (${decodedName})` : ""}`}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </>
  );
};

export default CharCard;
