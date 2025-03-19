






import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, taskComplete, taskIncomplete } from "./todoSlice";

const App = () => {
  const [txtVal, setTxtVal] = useState("");
  const dispatch = useDispatch();
  const myTasks = useSelector((state) => state.mytodo.task);

  return (
    <div className="app-container">
      <h1>Welcome To My To-Do App!</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={txtVal}
          onChange={(e) => setTxtVal(e.target.value)}
          placeholder="Enter your task"
        />
        <button 
          onClick={() => {
            if (txtVal.trim() !== "") {
              dispatch(addTask({ work: txtVal, id: Date.now(), status: "Incomplete" }));
              setTxtVal("");
            }
          }}>
          Add Task
        </button>
      </div>

      <hr />

      <table className="task-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Complete</th>
            <th>Incomplete</th>
          </tr>
        </thead>
        <tbody>
          {myTasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>

              <td className={task.status === "Complete" ? "completed-task" : ""}>
                {task.work}
              </td>
              <td>✏️</td>
              <td onClick={() => dispatch(deleteTask({ id: task.id }))}>🗑️</td>
              <td onClick={() => dispatch(taskComplete({ id: task.id }))}>✅</td>
              <td onClick={() => dispatch(taskIncomplete({ id: task.id }))}>❌</td>
              <td onClick={() => dispatch(taskIncomplete({ id: task.id }))}>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
