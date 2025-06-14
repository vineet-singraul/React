const Cybrom = ({Greet}) => {
  return (
    <>
       <h1>Cybrom : {Greet}</h1>
       <button onClick={()=>{Greet()}}>Click Me !</button>
    </>
  )
}
export default Cybrom