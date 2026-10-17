import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
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
