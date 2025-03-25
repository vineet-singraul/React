


import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addItems, deleteIcon, completeChange } from "./todoSlice";

const App = () => {
  const [getdata, InpGetData] = useState("");
  const value = useSelector((state) => state.todoTask.todoTask);
  const dispatch = useDispatch();

  const addClickItems = () => {
    dispatch(addItems(getdata));
    InpGetData("");
  };

  const ANS = value.map((key, index) => {
    let taskElement;
    if (key.status === "Complete") {
      taskElement = (
        <span style={{ color: "red", textDecoration: "line-through" }}>
          {key.Task}
        </span>
      );
    } else {
      taskElement = (
        <span style={{ color: "green" }}>
          {key.Task}
        </span>
      );
    }

    return (
      <tr key={key.id}>
        <td>{index + 1}</td>
        <td>{taskElement}</td>
        <td onClick={() => dispatch(deleteIcon({ id: key.id }))} style={{ cursor: "pointer" }}>🚮</td>
        <td onClick={() => dispatch(completeChange({ id: key.id }))} style={{ cursor: "pointer" }}>✅</td>
      </tr>
    );
  });

  return (
    <>
      <center>
        <h1>Hello, This is the App Component</h1>
        <br />
        <hr />
        <br />
        <input
          type="text"
          placeholder="Enter and add todos"
          value={getdata}
          onChange={(e) => InpGetData(e.target.value)}
        />
        <button onClick={addClickItems}>Add Todos</button>

        <br />
        <hr />
        <br />

        <table border="1">
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