import { useState, useCallback } from "react";
import { X } from "lucide-react";
import { TOAST_TYPES, ToastContext } from "../context/toast-context";

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-5 left-5 right-5 sm:left-5 sm:right-auto z-[9999] flex flex-col items-start gap-2.5 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

const ToastItem = ({ toast, onClose }) => {
  const { message, type, duration } = toast;
  const config = TOAST_TYPES[type] || TOAST_TYPES.success;
  const Icon = config.icon;
  return (
    <div
      className={`
        pointer-events-auto w-full sm:w-auto sm:min-w-[320px] sm:max-w-sm
        bg-[#1a1a2e] border ${config.border}
        rounded-xl shadow-xl shadow-black/50
        px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-start sm:items-center gap-2.5 sm:gap-3
        relative overflow-hidden
        animate-in
        hover:border-white/30 transition-all duration-200
      `}
    >
      <div className={`flex-shrink-0 mt-0.5 sm:mt-0 ${config.color}`}>
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white/90 text-xs sm:text-sm font-medium leading-snug break-words">
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-gray-500 hover:text-white/80 transition-colors duration-200 mt-0.5 sm:mt-0"
      >
        <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </button>
      <div className="absolute bottom-0 left-0 h-0.5 bg-white/5 w-full">
        <div
          className={`h-full ${config.progress} animate-progress`}
          style={{ animationDuration: `${duration}ms`, width: "100%" }}
        />
      </div>
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const showToast = useCallback(
    (message, type = "success", duration = 3000) => {
      const id = Date.now() + Math.random();
      const newToast = { id, message, type, duration };
      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    },
    [],
  );

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};
