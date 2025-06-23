import data from "./db.json"
const App = () => {
  const ANS = data.data.map((key,index)=>{
    return(
      <tr key={index}>
          <td>{index}</td>
         <td>{key.name}</td>
         <td>{key.city}</td>
         <td>{key.Course}</td>
      </tr>
    )
  })

  return(
    <center>
      <h1>App Component : </h1>     
      <table border="1">
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Course</th>
        </tr>
        {ANS}
      </table>
    </center>
  )
}
export default App;