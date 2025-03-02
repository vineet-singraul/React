import axios from "axios";
import { useEffect, useState } from "react";

const Display = () => {
  const [myData, setmyData] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/Student";
    const responce = await axios.get(api);
    console.log(responce.data);
    setmyData(responce.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = myData.map((key, index) => {
    return (
      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#EDE7F6" : "#E3F2FD" }}>
        <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>{key.Name}</td>
        <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>{key.City}</td>
        <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>{key.Email}</td>
        <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>{key.Number}</td>
        <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>{key.RollNumber}</td>
        <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>{key.CGPA}</td>
      </tr>
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#4A148C" }}>Hello, This is The Display Page:</h1>
      <table style={{ border: "2px solid #424242", borderCollapse: "collapse", width: "70%", margin: "auto", borderRadius: "10px", overflow: "hidden" }}>
        <thead>
          <tr style={{ backgroundColor: "#4A148C", color: "#ffffff" }}>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Name</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>City</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Email</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Number</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>RollNumber</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>CGPA</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default Display;
