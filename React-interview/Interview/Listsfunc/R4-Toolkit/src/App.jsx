import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,removeTask,taskComplite } from "./todoSlice";

const App = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === "") return;
      dispatch(addTodo({ task: input, id: Date.now(),states:'active'}));
      setInput(''); 
  };
  var l = todos.legnt
  console.log("ssss",l);
  const ANS = todos.map((key,index)=>{
     return(
       <tr key={index} >
         <td>{key.task}</td>
         <td onClick={()=>dispatch(removeTask({id:key.id}))}>Delete</td>
         
        <td style={{ textDecoration: key.states === "completed" ? "line-through" : "none" }}>
          {key.task}
         </td>
       </tr>
     )
  })

  // console.log(ANS);
  

  return (
    <>
      <center>
        <h1>App Component</h1>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>Add To Do</button>
        <br /><br /><hr />

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
           <tr>
            <th>Task</th>
            <th>Delete</th>
            <th>Complite</th>
           </tr>
           {ANS}
        </table>
      </center>
    </>
  );
};

export default App;
