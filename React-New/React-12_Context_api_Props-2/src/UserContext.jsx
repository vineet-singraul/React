// UserContext.jsx
import { useContext, createContext, useState } from "react";

const myContext = createContext();

const UserContext = ({ children }) => {
  const [name, setName] = useState("Ishika!!!");

  return (
    <myContext.Provider value={{ name }}>
      {children}
    </myContext.Provider>
  );
};

export default UserContext;
export { myContext };
