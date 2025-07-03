import { createContext, useState } from "react";

export const CounterContext = createContext(null);

const Contextprovider = ({ children }) => {
  const [value, setValue] = useState(8);
  const [color , setColor] = useState('red')
  return (
    <CounterContext.Provider value={{ value, setValue,color,setColor }}>
      {children}
    </CounterContext.Provider>
  );
};

export default Contextprovider;
