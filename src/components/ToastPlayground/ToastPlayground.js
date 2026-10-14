import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);

  function handleDismiss() {
    setShowToast(false);
    setMessage("");
    setVariant("");
  }

  return (
    <section className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast
          message={message}
          variant={variant}
          handleDismiss={handleDismiss}
        />
      )}

      <div className={styles.controlsWrapper}>
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
            />
          </div>
        </div>

        <div className={styles.row}>
          <fieldset className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
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
                />
                {choice}
              </label>
            ))}
          </fieldset>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToastPlayground;
