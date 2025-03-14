






// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTask, deleteTask,taskComplit } from "./todoSlice";

// const App = () => {
//   const [txtVal, setTxtVal] = useState("");
//   const dispatch = useDispatch();
//   const myTasks = useSelector((state) => state.mytodo.task);

//   console.log(myTasks);

//   let sno = 0;
//   const ans = myTasks.map((key) => {
//     sno++;
//     return (
//       <tr key={key.id}> 
//         <td>{sno}</td>
//         <td>{key.work}</td>
//         <td> ✏️ </td>
//         <td onClick={() => dispatch(deleteTask({ id: key.id }))}>🗑️</td>
//         <td onClick={() => dispatch(taskComplit({ id: key.id }))}>Compltete</td>
//         <td onClick={() => dispatch(taskComplit({ id: key.id }))}>Compltete</td>
//       </tr>
//     );
//   });

//   return (
//     <div className="app-container">
//       <h1>Welcome To My ToDo App!</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           value={txtVal}
//           onChange={(e) => setTxtVal(e.target.value)}
//           placeholder="Enter your task"
//         />
//         <button onClick={() => dispatch(addTask({ work: txtVal, id: Date.now() , status: 'incomplete' }))}>Add</button>
//       </div>
//       <hr />
//       <table className="task-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>My Task</th>
//             <th>Edit</th>
//             <th>Delete</th>
//             <th>Complit</th>
//             <th>Incomplit</th>
//           </tr>
//         </thead>
//         <tbody>{ans}</tbody>
//       </table>
//     </div>
//   );
// };

// export default App;




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
