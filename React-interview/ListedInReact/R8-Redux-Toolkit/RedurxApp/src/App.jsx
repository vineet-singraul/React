import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo ,deleteTask} from "./todoSlice";

const App = () => { 
  const todos = useSelector(state => state.mytodo.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === "") {
      return;
    } else {
      dispatch(addTodo({ id: Date.now(), task: input }));  
      setInput("");  
    }
  };

  return (
    <center>
      <h1>This is App Component:</h1>
      Enter Your Task:{" "}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <br /><br />
      <button onClick={addTask}>Add Task</button>
      
      <h2>Todo List:</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((key, index) => (
            <tr key={key.id}>
              <td>{key.task}</td>
              <td><button onClick={()=>dispatch(deleteTask({id:key.id }))}>Delete</button></td> 
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default App;
