import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const response = await axios.get("http://localhost:3000/Student");
    setMyData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);



  // ✅ Fixed Delete function
  const myDel = async (id) => {
    await axios.delete(`http://localhost:3000/Student/${id}`);
    alert("Data Deleted Successfully!");
    loadData();
  };


  // ✅ Fixed Edit function
  const myEdit = (id) => {
    alert("Data Edit Open Successfully!");
    navigate(`/editdata/${id}/`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#4A148C" }}>Hello, This is The Display Page:</h1>
      <table
        style={{
          border: "2px solid #424242",
          borderCollapse: "collapse",
          width: "70%",
          margin: "auto",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4A148C", color: "#ffffff" }}>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Name</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>City</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Email</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Number</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Roll Number</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>CGPA</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Delete</th>
            <th style={{ border: "2px solid #424242", padding: "10px" }}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((student, index) => (
            <tr
              key={student.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#EDE7F6" : "#E3F2FD",
              }}
            >
              <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>
                {student.Name}
              </td>
              <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>
                {student.City}
              </td>
              <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>
                {student.Email}
              </td>
              <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>
                {student.Number}
              </td>
              <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>
                {student.RollNumber}
              </td>
              <td style={{ border: "2px solid #424242", padding: "10px", color: "#212121" }}>
                {student.CGPA}
              </td>
              <td
                style={{
                  border: "2px solid #424242",
                  padding: "10px",
                  color: "#d32f2f",
                  cursor: "pointer",
                }}
                onClick={() => myDel(student.id)}
              >
                🗑️
              </td>
              <td
                style={{
                  border: "2px solid #424242",
                  padding: "10px",
                  color: "#d32f2f",
                  cursor: "pointer",
                }}
                onClick={() => myEdit(student.id)}
              >
                ✏️
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Update;
