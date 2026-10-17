import React from "react";

const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleDismiss = React.useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const handleCreateToast = React.useCallback((e, message, variant) => {
    e.preventDefault();
    const newToast = { id: crypto.randomUUID(), message, variant };
    setToasts((current) => [...current, newToast]);
  }, []);

  const value = React.useMemo(
    () => ({ toasts, handleDismiss, handleCreateToast }),
    [toasts, handleDismiss, handleCreateToast]
  );
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
