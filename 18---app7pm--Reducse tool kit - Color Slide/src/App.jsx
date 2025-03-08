import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from './colorSlice';

const App = () => {
  const myClr = useSelector(state => state.mycolor.color);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome To Color Program</h1>
      <button onClick={() => dispatch(changeColor())}>Change color</button>
      <div 
        style={{
          width: "300px", 
          height: "300px", 
          backgroundColor: myClr
        }}
      >
      </div>
    </>
  );
}

export default App;
