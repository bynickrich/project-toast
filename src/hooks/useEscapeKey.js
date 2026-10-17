import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key !== "Escape") return;

      callback(e);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}

export default useEscapeKey;
