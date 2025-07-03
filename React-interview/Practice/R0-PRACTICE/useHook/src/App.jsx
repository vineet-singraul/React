import { CounterContext } from "./Context";
import { useContext } from "react";
import Counter from "./Counter";
const App = () => {
  const useVal = useContext(CounterContext)
  const col = useVal.color;
  return (
    <>
      <center>
        <br />
        <h1>App Component</h1><br />
        <h1>Count : {useVal.value}</h1><br />
        <div id="div" style={{background:useVal.color}}>
           hello
        </div>
        <Counter/>
      </center>
    </>
  );
};

export default App;
