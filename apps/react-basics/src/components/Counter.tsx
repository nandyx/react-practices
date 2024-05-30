import { useCounter } from '../hooks';

export function Counter() {
  const { add, counter, sub } = useCounter({});
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
