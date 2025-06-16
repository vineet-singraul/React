import data from "./db.json"; // default import (no curly braces)

const App = () => {

  const ans = data.map((key, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{key.name}</td>
                <td>{key.course}</td>
                <td>{key.age}</td>
              </tr>))

  return (
    <>
      <center>
        <h1>Component App</h1>
        <br /><br /><hr /><br /><br />
        <table border="1">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Course</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default App;
