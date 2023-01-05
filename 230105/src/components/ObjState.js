import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '이채연' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          state.teacher = 'Elly';
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
