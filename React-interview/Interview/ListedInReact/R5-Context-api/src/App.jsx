import { useContext } from "react";
import Counter from "./Counter";
import { CounterContext } from "./Contexts";

const App = () => {
  const Contextvalue = useContext(CounterContext);
  console.log(Contextvalue);

  return (
    <>
      <center>
        <h1>Counter App : {Contextvalue.value}</h1>
        <Counter />
      </center>
    </>
  );
};

export default App;
