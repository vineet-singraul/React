import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './nameSlice';

const App = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(changeName());
  };

  return (
    <div>
      <h2>Welcome: {username}</h2>
      <button onClick={handleButtonClick}>
        Change User
      </button>
    </div>
  );
};

export default App;