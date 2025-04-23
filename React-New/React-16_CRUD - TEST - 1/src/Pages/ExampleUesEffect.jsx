import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const ExampleUesEffect = () => {
  return (
    <>
      <h1>Example Of useEffect App</h1>
      {/* Render the Counter component here */}
      <Counter />
    </>
  );
}

export default ExampleUesEffect;
