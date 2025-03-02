import { useContext } from "react";
import { CounterContext } from "./Contaxt";  // ✅ Fixed import

const Counter = () => {
    const { count, setCount } = useContext(CounterContext);

    return (
        <center>
            <h1>This Is the Counter Page</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </center>
    );
};

export default Counter;
