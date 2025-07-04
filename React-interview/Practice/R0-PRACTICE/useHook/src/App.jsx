import data from "./db.json"; // make sure db.json is in src or imported correctly

const App = () => {
  const ANS = data.data.map((key, index) => {
    return (
      <tr key={index}>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.email}</td>
        <td>{key.designation}</td>
      </tr>
    );
  });

  return (
    <center>
      <br />
      <h1>App Component :</h1>
      <br /><br />

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Designations</th>
          </tr>
        </thead>
        <tbody>{ANS}</tbody>
      </table>
    </center>
  );
};

export default App;
