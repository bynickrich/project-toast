import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastProvider from "../ToastProvider/ToastProvider";

const ToastContext = React.createContext();

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;
