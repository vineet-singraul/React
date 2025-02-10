import EmpDetailsList from "./EmpDetailsList";
import "./EmployeeCard.css";  // ✅ CSS ko import kiya

const card = EmpDetailsList.map((key) => {
  return (
    <div className="MainCard">
      <div className="namediv">
        <h1 className="name">{key.EmpName}</h1>
      </div>
      <div className="details">
        <strong>Email</strong>
        <p className="data">{key.EmpEmail}</p>
      </div>
      <div className="details">
        <strong>Number</strong>
        <p className="data">{key.EmpNumber}</p>
      </div>
      <div className="details">
        <strong>Date Of Joining</strong>
        <p className="data">{key.EmpJoining}</p>
      </div>
      <div className="details">
        <strong>Salary</strong>
        <p className="data">{key.EmpSalary}</p>
      </div>
    </div>
  );
});

const App = () => {
  return (
    <div className="Dis">
      {card}
    </div>
  );
};

export default App;
