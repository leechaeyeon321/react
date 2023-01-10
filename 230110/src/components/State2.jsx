import React, { useState } from 'react';

export default function State2() {
  let [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count -2);
    }
  return (
    <div>
      {count}
      <br />
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
