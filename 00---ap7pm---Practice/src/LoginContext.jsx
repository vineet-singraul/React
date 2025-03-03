import { createContext, useState } from "react";

export const myContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: false });

  const login = (name) => {
    setUser({ name: name, auth: true });
  };

  const logout = () => {
    setUser({ name: "", auth: false });
  };

  return (
    <myContext.Provider value={{ user, login, logout }}>
      {children}
    </myContext.Provider>
  );
};

export default LoginContextProvider;
