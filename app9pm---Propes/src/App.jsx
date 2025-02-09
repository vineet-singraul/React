const name = ["Vineet", "Raju", "Sanju"];

const ans = name.map((key) => {
  return (
     <>
       <h1>{key}</h1>
     </>
  );
});

// const subject = ["html", "css", "java"];
  
// const sub = subject.map((key)=>{
//    return(
//       <li>{key}</li>
//    )
// })

const App = () => {
  return (
    <>
      {ans}
        {/* <ol>{sub}</ol> */}
    </>
  );
}

export default App;
