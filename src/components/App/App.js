import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";

const ToastContext = React.createContext();

function App() {
  return (
    <>
      <ToastContext.Provider>
        <ToastPlayground />
        <Footer />
      </ToastContext.Provider>
    </>
  );
}

export default App;
