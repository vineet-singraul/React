import Comp2 from "./Comp2";
const Comp1 =({user})=>{
    return(
      <>
        <h1>Hello My Comp1</h1>
        <h1>Hello My Comp2</h1>
        <h1>Hello My Comp3</h1>
        <Comp2 user={user}/>
      </>
    )
  }
  
  export default Comp1;