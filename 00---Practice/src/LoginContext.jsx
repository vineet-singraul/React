import { createContext, useState } from "react";

export const LoginContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ user: "" });

    const login = (nm) => {
        setUser({ user: nm });
    };

    const logOut = () => {
        setUser({ user: "" }); // Resets user on logout
    };

    return (
        <LoginContext.Provider value={{ user, login, logOut }}>
            {children}
        </LoginContext.Provider>
    );
};

export default ContextProvider;
