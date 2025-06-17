import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let Name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [Name]: value }));
    setInput("")
  };

  const handleSubmit = () => {
    console.log("Submitted:", input);
  };

  // Example useEffect: Log input after 3 seconds when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Auto-Submit after 3s:", input);
    }, 3000);

  }); // Runs only once

  return (
    <>
      <center>
        <h1>App Component</h1>
        <br /><br />
        Enter Your Name : <input type="text" name="name" onChange={handleInput} /><br /><br />
        Enter Your Age  : <input type="text" name="age" onChange={handleInput} /><br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </center>
    </>
  );
};

export default App;
