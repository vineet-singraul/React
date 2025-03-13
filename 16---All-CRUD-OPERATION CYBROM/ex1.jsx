// import axios from "axios";
// import { useState, useEffect } from "react";

// const Display = () => {
//   const [myData, setmyData] = useState([]);

//   const loadData = async () => {
//     let api = "http://localhost:3000/student";
//     const responce = await axios.get(api);
//     console.log(responce.data);
//     setmyData(responce.data);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const ans = myData.map((key, index) => {
//     return (
//       <tr key={index}>
//         <td>{key.Name}</td>
//         <td>{key.age}</td>
//         <td>{key.salary}</td>
//         <td>{key.city}</td>
//       </tr>
//     );
//   });

//   return (
//     <>
//       <h1>This is the Display Page</h1>
//       <table border="2">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Salary</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>{ans}</tbody>
//       </table>
//     </>
//   );
// };

// export default Display;





import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
  const [myData, setmyData] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/student";
    const responce = await axios.get(api);
    console.log(responce.data);
    setmyData(responce.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = myData.map((key, index) => {
    return (
      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff" }}>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{key.Name}</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{key.age}</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{key.salary}</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{key.city}</td>
      </tr>
    );
  });

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>This is the Display Page</h1>
      <table style={{ width: "80%", margin: "auto", borderCollapse: "collapse", border: "2px solid #4CAF50" }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Age</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Salary</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>City</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Display;
