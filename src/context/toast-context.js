import { createContext, useContext } from "react";
import { Check, AlertCircle, Info, AlertTriangle } from "lucide-react";

export const ToastContext = createContext(null);

export const TOAST_TYPES = {
  success: {
    icon: Check,
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    progress: "bg-emerald-400",
  },
  error: {
    icon: AlertCircle,
    color: "text-red-400",
    border: "border-red-500/20",
    progress: "bg-red-400",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-yellow-400",
    border: "border-yellow-500/20",
    progress: "bg-yellow-400",
  },
  info: {
    icon: Info,
    color: "text-blue-400",
    border: "border-blue-500/20",
    progress: "bg-blue-400",
  },
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
