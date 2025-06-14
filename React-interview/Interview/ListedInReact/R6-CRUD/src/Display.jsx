import axios from "axios";
import { useEffect, useState } from "react";

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const onLoad = async () => {
    let api = "http://localhost:3000/Data";
    let res = await axios.get(api);
    setMydata(res.data);
  };

  useEffect(() => {
    onLoad();
  });

  const res = mydata.map((key, index) => {
    return (
      <tr key={index}>
        <td>{key.name}</td>
        <td>{key.age}</td>
        <td><button onClick={() => { deleteData(key.id) }}>Delete</button></td>
      </tr>
    );
  });


  const deleteData = async (id) => {
    let api = `http://localhost:3000/Data/${id}`;

    let confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;
    let res = await axios.delete(api);
    alert("Data deleted successfully...");

  };


  return (
    <>
      <center>
        <h1>ALL Data Display Hare :</h1>
        <table border="2" cellSpacing="3px">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
          {res}
        </table>
      </center>
    </>
  );
};

export default Display;
