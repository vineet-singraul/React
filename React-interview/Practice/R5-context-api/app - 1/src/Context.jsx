import { createContext , Children, useState } from "react";
export const CounterContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [input , setInput] = useState(0)
  return(
    <CounterContext.Provider value={{ input , setInput }}>
      {children}
    </CounterContext.Provider>
  )
}
