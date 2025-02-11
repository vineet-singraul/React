import EmpDetails from "./EmpDetails";
import EmpDesigne from "./EmpDesigne";
const App = () => {

  const ans = EmpDetails.map((key) => <EmpDesigne
    Eid={key.EmpId}
    EN={key.Name}
    EP={key.Post}
    ES={key.Salary}
    EJ={key["Joining Date"]}
  />)

  return (
    <>
        <table border={1} cellPadding={10} >
           <tr>
            <td>id</td>
            <td>Name</td>
            <td>Post</td>
            <td>Salary</td>
            <td>Joining Date</td>
           </tr>
     
           {ans}
     
        </table>
    </>
  );
}

export default App;
