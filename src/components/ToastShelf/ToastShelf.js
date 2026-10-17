import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, handleDismiss } = useToast();
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper}>
          <Toast
            variant={variant}
            handleDismiss={() => handleDismiss(id)}
            message={message}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
