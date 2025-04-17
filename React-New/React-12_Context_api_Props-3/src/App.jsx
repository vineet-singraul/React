// App.jsx
import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { myContext } from "./LoginContext";

const App = () => {
  const { user } = useContext(myContext);

  return (
    <>
      <h1>Login System!!!</h1>
      {user.auth ? <AuthApp /> : <UnAuthApp />}
    </>
  );
};

export default App;
