import { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("white");
  const [text, setText] = useState("Initial Text");
  const [border, setBorder] = useState("none");
  // const [name, setName] = useState("");

  const handleBgChange = () => setBgColor("yellow");
  const handleTextChange = () => setText("Learn Java Script With React");
  const handleBorderChange = () => setBorder("2px solid red");

  return (
    <>
      <h1>Welcome</h1>
      <div
        style={{
          width:"200px",
          backgroundColor: bgColor,
          border: border,
          padding: "20px",
          marginBottom: "10px",
          borderRadius: "50%"
        }}
      >
        <h2>{text}</h2>
        {/* <p>Input Value: {name}</p> */}
      </div>
      {/* <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Rendering"
      /> */}
      <br /><br />
      <button onClick={handleBgChange}>Change Background</button>
      <button onClick={handleTextChange}>Change Text</button>
      <button onClick={handleBorderChange}>Add Border</button>
    </>
  );
};

export default App;
