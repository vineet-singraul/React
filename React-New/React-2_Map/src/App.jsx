import EmpData from "./EmpData"
import EmpDesigne from "./EmpDesigne"

const App = () => {

  const Ans = EmpData.map((key) => (
    <EmpDesigne RL={key.roll} NM={key.name} CT={key.city} FS={key.fees} />
  ))

  return (
    <>
      <center>
        <h1>Thise Is App Component : </h1> <br /><hr /><br />

        <table border="1" width="400">
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
          {Ans}
        </table>
      </center>
    </>
  )
}

export default App
