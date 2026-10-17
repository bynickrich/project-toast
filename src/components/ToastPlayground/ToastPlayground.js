import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");

  function handleDismiss(id) {
    setToasts(toasts.filter((toasts) => toasts.id !== id));
  }

  function handleCreateToast(e) {
    e.preventDefault();
    const newToast = { id: crypto.randomUUID(), message, variant };
    setToasts([...toasts, newToast]);
    setMessage("");
    setVariant("");
  }

  return (
    <section className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target?.value)}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <legend className={styles.label}>Variant</legend>
            {VARIANT_OPTIONS.map((choice) => (
              <label htmlFor={`variant-${choice}`}>
                <input
                  id={`variant-${choice}`}
                  type="radio"
                  name="variant"
                  value={choice}
                  onChange={() => setVariant(choice)}
                  checked={variant === choice}
                  required
                />
                {choice}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ToastPlayground;
