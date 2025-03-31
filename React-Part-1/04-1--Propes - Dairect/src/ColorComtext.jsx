import { Children } from "react";
import { createContext , useState } from "react";

const myContext = createContext();
const  ColorContext=({Children})=>{

    const [color , setColor] = useState("Red");

    return(
        <>
          <myContext.Provider value={{color , setColor}}>
            {Children}
          </myContext.Provider>
        </>
    )
}

export default ColorContext;
export {myContext}