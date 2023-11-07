import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function random() {
    setCount(Math.floor(Math.random() * 100));
  }
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={increment} className='bg-green-500'>
        Increment
      </button>
      <button onClick={random} className='bg-blue-500'>
        Random
      </button>
      <button onClick={decrement} className='bg-red-500'>
        Decrement
      </button>
    </div>
  );
}
