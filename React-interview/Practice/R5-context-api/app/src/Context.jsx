// Context.js
import { createContext, useState } from "react";

const CounterContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [input, setInput] = useState(7);
  return (
    <CounterContext.Provider value={{ input, setInput }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
