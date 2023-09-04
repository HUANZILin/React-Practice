import { useState, useEffect } from "react";

const useCounter = (counterUpdate) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counterUpdate);
    }, 1000);

    return () => clearInterval(interval);
  }, [counterUpdate]);

  return counter;
};

export default useCounter;
