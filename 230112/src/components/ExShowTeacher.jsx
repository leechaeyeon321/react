import React from 'react'
import { useState } from 'react'
import PracticeTimerTeacher from './PracticeTimerTeacher';

export default function ExShowTeacjer() {
    const [show, setShow] = useState(false);

  return (
    <div>
      {show && <PracticeTimerTeacher/>}
      <button onClick={() => {setShow(!show)}}>{show? '숨기기' : '보이기'}</button>
    </div>
  )
}
