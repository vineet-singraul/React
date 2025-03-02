import { useContext } from "react";
import { CounterContext } from "./Contaxt";  // ✅ Fixed import
import Counter from "./Counter";

const App = () => {
  const {count} = useContext(CounterContext);
  
  return (
    <center>
      <h1>Hello, this is App</h1>
      <hr />
      <h1>Count: {count}</h1>
      <hr />
      <Counter />
    </center>
  );
};

export default App;
