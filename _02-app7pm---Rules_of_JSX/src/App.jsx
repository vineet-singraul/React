import Bhopal from "./Bhopal";
import Cybrom from "./Cybrom";



// const name = "Vineet"
// const age = 20

// const subject = <ul>
//      <li>C++</li>
//      <li>PYTHON</li>
//      <li>JAVA</li>
//      <li>HTML</li>
//      <li>C</li>
// </ul>

const App = () => {
  return (
    // exprssion define ker sakte hai  R-1
    // <h1>Welcome to Bhopal My Name Is {name} My Age is {age}</h1>

    // ek variable me block of code likh sakte hai  R-2
    // <h1>Subject is {subject}</h1>



    //  Element must be closec element close hona cahiye   R-4
    // <></>  thise thing happen close


    // Return single unit return karta hai  sigle element hi return karta hai 
    // Fragment -->   <></> hai ye  extra memory create  karne se bacata hai ya node esliye div ye koi or tag nhi lete   R-3
    // <>
    //   <h1>Welcome to bhopal</h1>
    //   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, omnis porro. Nemo nam dicta voluptate consequatur eaque, sapiente minima ducimus!</p>
    //   <h3>hello</h3>

    // </>


    //  R-5  -->  Sigle tag bhi close ho  like <br> <input>  ---->  <br/>  <input/>
    <>
       {/* <h1>Hello I an Vineet</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea.</p>
       <br/>
       <label>Enter Your Name</label>
       <input type="text"/>
       <br/>
       <label>Enter Your City Name</label>
       <input type="text"/> */}


     {/* R - 6 ye hai ki css dene ke liye class nhi className Dete hai Kyoki ye class keyword hai */}
      <div className="Data" id="DataName"></div>




      {/* Call Component Hare */}
            <Bhopal/>


      {/* Call Componet Cybrom Hare */}
            <Cybrom/>
    </>

  )
}


export default App;