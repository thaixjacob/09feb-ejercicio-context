import React from "react";

import "./App.css";
import Button from "./component/Button/Button";
import PrintValue from "./component/PrintValue/PrintValue";
import PrintSquareValue from "./component/PrintSquareValue/PrintSquareValue";
import MyContextProvider from "./store/contexts/demo-provider.provider";

function App() {
  return (
    <>
      <MyContextProvider>
        <Button />
        <PrintValue />
        <PrintSquareValue />
      </MyContextProvider>
    </>
  );
}

export default App;
