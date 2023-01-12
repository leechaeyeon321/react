import React from 'react'
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
    const [show, setShow] = useState(false);
    const [condition, setCondition] = useState('보이기');
    const onChange = () => {
        setShow(!show)
            condition === '보이기' ? setCondition('숨기기') : setCondition('보이기');
    }
  return (
    <div>
        {show && <PracticeTimer />}
        <button onClick={onChange}>{condition}</button>
    </div>
  )
}