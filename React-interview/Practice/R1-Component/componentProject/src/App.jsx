import Codding from "./Codding";
import Cybrom from "./Cybrom";

const App = () => {
  let data = 'Codding';

  if (data === 'Cybrom') {
    return (
      <>
        <Cybrom />
      </>
    );
  } else if (data === 'Codding') {
    return (
      <>
        <Codding />
      </>
    );
  }
};

export default App;
