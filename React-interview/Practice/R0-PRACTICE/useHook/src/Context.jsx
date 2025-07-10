import { Children, useState,createContext  } from "react";
export const CounterContext = createContext(null)

const ContextProvider = ({children}) => {
    const [values , setValues] = useState(8)
    const [color ,setColor] = useState('')
    return (
        <>
          <CounterContext.Provider value={{values,setValues,color,setColor}}>
            {children}
          </CounterContext.Provider>
        </>
    )
}
export default ContextProvider;