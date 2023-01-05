import React, { useState } from 'react';

export default function Ex1() {
  let [count, setCount] = useState(0);
  //   let cnt;
  //   function customSetNumber1() {
  //     cnt--;
  //     setNumber(number - 1);
  //   }
  //   function customSetNumber2() {
  //     cnt++;
  //     setNumber(number + 1);
  //   }
  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
