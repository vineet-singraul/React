import { createContext, useState } from "react";

export const CounterContext = createContext(null)

export const ContextProvider = ({children}) => {
    const [value ,setValue] = useState(7)
    return(
        <>
         <CounterContext.Provider value={{value ,setValue}}>
           {children}
         </CounterContext.Provider>
        </>
    )
}