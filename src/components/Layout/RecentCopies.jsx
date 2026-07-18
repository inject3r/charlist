import { useToast } from "../../context/toast-context";

const RecentCopies = ({ copies, mobile = false }) => {
  const { showToast } = useToast();

  const handleCopy = async (char) => {
    try {
      await navigator.clipboard.writeText(char);
      showToast(`Copied "${char}"`, "success");

      const updated = [char, ...copies.filter((c) => c !== char)].slice(0, 6);
      localStorage.setItem("recentCopies", JSON.stringify(updated));
      window.dispatchEvent(
        new CustomEvent("recentCopiesUpdated", { detail: updated }),
      );
    } catch {
      showToast("Failed to copy", "error");
    }
  };

  if (!mobile) {
    return (
      <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
        <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
          Recent
        </span>
        {copies.length === 0 ? (
          <span className="text-xs text-gray-600">—</span>
        ) : (
          copies.map((char, index) => (
            <button
              key={index}
              onClick={() => handleCopy(char)}
              className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-200 flex items-center justify-center text-base hover:scale-110 text-white"
              title={`Copy "${char}"`}
            >
              {char}
            </button>
          ))
        )}
      </div>
    );
  }

  return (
    <div className="md:hidden">
      <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase block mb-1.5">
        Recent
      </span>
      {copies.length === 0 ? (
        <span className="text-xs text-gray-600">—</span>
      ) : (
        <div className="flex items-center gap-1.5 flex-wrap">
          {copies.map((char, index) => (
            <button
              key={index}
              onClick={() => handleCopy(char)}
              className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-200 flex items-center justify-center text-sm text-white"
              title={`Copy "${char}"`}
            >
              {char}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentCopies;
