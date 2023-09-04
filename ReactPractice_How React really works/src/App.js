import React, { useState, useCallback } from "react";

import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggling, setAllowToggling] = useState(false);

  const allowTogglingHandler = useCallback(() => {
    if (allowToggling) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggling]);

  const toggleParagraphHandler = useCallback(() => {
    setAllowToggling(true);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowTogglingHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
