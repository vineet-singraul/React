import EmpDetails from "./EmpDetails";
import EmpDataDetails from "./EmpDataDesigne";
const App = () => {

  // Data Gatting From Propes
  const Ans = EmpDetails.map((key) => <EmpDataDetails
       EID = {key.EmpId}
       EN = {key.Name}
       EP = {key.Post}
       ES = {key.Salary}
       EJD = {key["Joining Date"]}
  />)

  return (
    <>
        <table border={1} cellPadding={10} >
           <tr>
            <th>id</th>
            <th>Name</th>
            <th>Post</th>
            <th>Salary</th>
            <th>Joining Date</th>
           </tr>
           {Ans}
        </table>
    </>
  );
}

export default App;
