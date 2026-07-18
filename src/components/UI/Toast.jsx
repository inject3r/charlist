import React from "react";
import { useToast } from "../../context/toast-context";

const Toast = ({ message, isVisible, onHide, duration = 2000 }) => {
  const { showToast } = useToast();

  React.useEffect(() => {
    if (isVisible) {
      showToast(message, "success", duration);
      onHide();
    }
  }, [isVisible, message, duration, showToast, onHide]);

  return null;
};

export default Toast;
