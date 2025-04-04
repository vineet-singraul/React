const App = () => {

  const Start = (nm) => {
    alert(`This is ${nm}`);
  }

  const ShowEventSecond = (e) => {
    console.log(e);
    alert("Type: " + e.type + "\nName: " + e.target.name + "\nValue: " + e.target.value);
  }

  const InpShowPart = (e) => {
    console.log("Name : ", e.target.name);
    console.log("Value : ", e.target.value);
  }

  const DataShowMe = (nm, e) => {
    // Corrected alert with proper string concatenation
    alert("Name : " + e.target.name + " Value IS : " + e.target.value);
  }

  return (
    <>
      <center>
        <h1>This is App</h1>

        {/* Part - 1 Event */}
        <button onClick={() => Start("Vineet")}>Click</button><br /><br />

        {/* Part - 2 Event */}
        <button name="Button" value="MyBTN" onClick={ShowEventSecond}>Second Event</button><br /><br />

        {/* Part - 3 Event */}
        <input type="text" value="Vineet" onClick={InpShowPart} name="inp1" /><br /><br />

        {/* Part - 4 Event */}
        <button onClick={(e) => { DataShowMe("Vineet", e) }} name="Event-4">Show me More</button>
      </center>
    </>
  );
}

export default App;
