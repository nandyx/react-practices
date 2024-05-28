import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter((prev) => prev + 1);
  };
  const sub = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <div>
        <button onClick={add}>+1</button>
        &nbsp;
        <button onClick={sub}>-1</button>
      </div>
    </>
  );
}
