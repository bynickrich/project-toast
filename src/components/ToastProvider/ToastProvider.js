import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(id) {
    setToasts(toasts.filter((toasts) => toasts.id !== id));
  }

  function handleCreateToast(e, message, variant) {
    e.preventDefault();
    const newToast = { id: crypto.randomUUID(), message, variant };
    setToasts([...toasts, newToast]);
  }

  const value = { toasts, handleDismiss, handleCreateToast };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
