import { useRef } from "react";
const App = () => {
    let useDiv = useRef()
    const changeColor= () => {
      useDiv.current.style.backgroundImage = "linear-gradient(45deg, blue, red)"
    }
  return (
    <>
      <center>
        <h1>App Component:</h1><br /><br />
        <div id="div" ref={useDiv}>
          Vineet
        </div>
        <br /><br />
        <button onClick={changeColor}>Change Color</button>
        <br /><br />
        butt
      </center>
    </>
  );
};

export default App;
