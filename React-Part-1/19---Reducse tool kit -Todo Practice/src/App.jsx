import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addItems, DeleteTask, taskComplete } from "./todoSlice"; // Fixed function name

const App = () => {
  const dispatch = useDispatch();
  const [inpData, setInpData] = useState("");
  const value = useSelector((state) => state.todoTask.todoTask);
  console.log(value);

  const addEnteredData = () => {
    if (inpData.trim().length !== 0) {
      dispatch(addItems(inpData));
      setInpData("");
    }
  };

  // Fetching Data From Array:
  const ANS = value.map((key, index) => {
    return (
      <tr key={key.Id}>
        <td>{index + 1}</td>

        {/* <td>{key.Task}</td> */}
        {(key.status === "Complete") ? (<><td style={{color:"red", textDecoration:"line-through"}}>{key.Task}</td></>) : (<><td>{key.Task}</td></>)}
        <td
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => dispatch(DeleteTask({ id: key.Id }))}>🚮
        </td>
        <td
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(taskComplete({ id: key.Id }))}>✅
        </td>
      </tr>
    );
  });

  return (
    <>
      <center>
        <h1>Hello, This is the App Component</h1>
        <br /><hr /><br />
        <input
          type="text"
          placeholder="Add items"
          onChange={(e) => setInpData(e.target.value)}
          value={inpData}
        />
        <button onClick={addEnteredData}>Add Data</button>

        <br /><br /><hr /><br /><br />

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Delete</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>{ANS}</tbody>
        </table>
      </center>
    </>
  );
};

export default App;
