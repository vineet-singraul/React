import Subject from "./emp";
const ans = Subject.map((key, index) => {
  return (
    <tr key={index}>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.rollNum}</td>
      <td>{key.City}</td>
      <td>{key.salry}</td>
    </tr> 
  );
});

const App = () => {
  return (
    <>
      <table border={1} style={{ borderCollapse: "collapse", width: "50%"}}>
        <thead>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>City</th>
            <th>Salary</th>
          </tr>
        </thead>
         {ans}
      </table>
    </>
  );
};

export default App;
