import React from 'react';
import { useRef } from 'react';

export default function ColorInput() {
  const divEl = useRef();
  const userInput = useRef();

  const adjustCss = () => {
    divEl.current.style.backgroundColor = userInput.current.value;
    /* input태그에 있는 값을 넣어주면 됨. */
  };
  return (
    <div className="divStyle" ref={divEl}>
      <input ref={userInput} type="text" />
      <br />
      <br />
      <button onClick={adjustCss}>색 적용</button>
    </div>
  );
}
