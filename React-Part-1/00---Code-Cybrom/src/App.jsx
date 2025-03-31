const App = () => {

    const ans = student.map((key)=>{
        return(
          <tr>
            <td>{key.roll}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
          </tr>
        )
    })
    return(
        <>
           <center>
           <h1>This Is App Component :</h1> <br /> <hr />
        
           <table border="3" width="400" cellPadding="20" bgcolor="aqua">
            <tr align="center" bgcolor="red">
                <th>Roll</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
           </table>

           </center>     
        </>
    );
}

export default App;
