import { children, createContext, useState } from "react";

export const CounterContext = createContext(0)

const ContextProvider = ({children}) => {
    const [valuee , setValue] = useState(8)
    return(
        <>
           <CounterContext.Provider value={{valuee , setValue}}>
             {children}
           </CounterContext.Provider>
        </>
    )
}
export default ContextProvider;