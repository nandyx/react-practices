import { useState } from 'react';

type Options = {
  initialValue?: number;
};

export function useCounter({ initialValue = 0 }: Options) {
  const [counter, setCounter] = useState<number>(initialValue);

  const add = () => {
    setCounter((prev) => prev + 1);
  };
  const sub = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return {
    counter,
    add,
    sub,
  };
}
