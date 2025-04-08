import { useState } from "react";

useState

const App = () => {
  const [inp, setInp] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInp({
      ...inp,
      [name]: value,
    });
  };

  return (
    <>
      <input type="text" name="name" onChange={handleInput} /><br /><br />
      <input type="text" name="city" onChange={handleInput} /><br /><br />
      <input type="text" name="num" onChange={handleInput} /><br /><br />
      <input type="text" name="fee" onChange={handleInput} /><br /><br />
      <button>Save</button>
    </>
  );
};


export default App