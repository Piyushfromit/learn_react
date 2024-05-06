
import React from 'react';



function App() {
  const [count, setCount] = React.useState(0);
  // count is Curent count value
  // setCount is update function / dispacher function, which will update the count
  return (
    <div className="App">
         <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>INC</button>
        <button onClick={() => setCount(count - 1)}>dec</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;


// lecture 3, 00:50
