import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { useToast } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { handleCreateToast } = useToast();
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");

  return (
    <section className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form
        className={styles.controlsWrapper}
        onSubmit={(e) => {
          handleCreateToast(e, message, variant);
          setMessage("");
          setVariant("");
        }}
      >
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
