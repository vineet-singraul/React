import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import UnAuthApp from "./UnAuthApp";
import AuthApp from "./AuthApp";

const App = () => {
    const { user } = useContext(LoginContext);

    return (
        <>
            <center>
                <h1>Welcome To App Page: {user?.user || "Guest"}</h1>
                <hr /><br /><br />
                {!user?.user ? <UnAuthApp /> : <AuthApp />}
                <hr />
            </center>
        </>
    );
};

export default App;
