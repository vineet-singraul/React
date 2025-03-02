import { createContext, useState } from "react";

export const CounterContext = createContext(0);

const Context = ({ children }) => {
    const [count, setCount] = useState(0);
    
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export default Context;
