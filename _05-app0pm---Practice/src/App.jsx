import EmpDetails from "./EmpDetails";
const EmpResult = EmpDetails.map((key) => {
  return (
    <>
      <tr>
        <td>{key.EmpId}</td>
        <td>{key.Name}</td>
        <td>{key.Post}</td>
        <td>{key.Salary}</td>
        <td>{key["Joining Date"]}</td>
      </tr>
    </>
  )
})




const App = () => {
  return (
    <>
      <h1>Welcome To The Our Course</h1>
      <table border={2} cellPadding={20} align="center">
        <thead>
          <th cellPadding={5}>ID</th>
          <th>Name</th>
          <th>POST</th>
          <th>Salary</th>
          <th>Joining Date</th>

        </thead>
        <tbody>
          {EmpResult}
        </tbody>
      </table>
    </>
  );
}

export default App;
