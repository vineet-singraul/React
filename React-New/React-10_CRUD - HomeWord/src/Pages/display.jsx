import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
  const [myData, setMyData] = useState([]);

  const LoadData = async () => {
    let api = "http://localhost:3000/Employee";
    let response = await axios.get(api);
    setMyData(response.data);
  };

  useEffect(() => {
    LoadData();
  }, []);

  const ANS = myData.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.Name}</td>
        <td>{item.City}</td>
        <td>{item.Designation}</td>
        <td>{item.Salary}</td>
      </tr>
    );
  });

  return (
    <>
      <center>
        <h1>This is the Display Page</h1>
        <br /><br /><hr /><br /><br />

        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {ANS}
          </tbody>
        </table>
      </center>


    </>
  );
};

export default Display;
