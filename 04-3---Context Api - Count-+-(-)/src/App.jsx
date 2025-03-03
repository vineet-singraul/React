import Counter from "./Counter";
import { useContext } from "react";
import { CounterContext } from "./Context";

const App = () => {
  const CounterState = useContext(CounterContext);

  return (
    <>
      <center>
        <h1>Hello, This Is the App Component</h1>
        <hr /><br />
        <h1>Count Is: {CounterState.count}</h1>
        <br /><hr />
        <Counter />
      </center>
    </>
  );
};

export default App;
