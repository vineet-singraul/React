import Comp3 from "./Comp2";
const Comp3 =({user})=>{
    return(
      <>
        <h1>Hello My Comp3 :{user}</h1>
        <Comp3 user={user}/>
      </>
    )
  }
  
  export default Comp3;


  // proprs delling pass delling