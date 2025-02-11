const EmpDataDetails = (props) =>{
  return(
    <>
      <tr>
         <td>{props.EID}</td>
         <td>{props.EN}</td>
         <td>{props.EP}</td>
         <td>{props.ES}</td>
         <td>{props.EJD}</td>
      </tr>
    </>
  )
}
export default EmpDataDetails;