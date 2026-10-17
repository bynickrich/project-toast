import React from "react";

const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
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

export function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used with a ToastProvider");
  }

  return context;
}

export default ToastProvider;
