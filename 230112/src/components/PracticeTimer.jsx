import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function PracticeTimer() {
    const [text, setText] = useState(0);
    useEffect(()=>{
        const recordTime = setInterval(() => {
            console.log('타이머 실행 중');
        }, 1000);
        return(() => {
            clearInterval(recordTime);
        })
    }, [])
    const recordTime = () => {
        console.log(recordTime)
    }
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={recordTime}>시간</button>
    </div>

  )
}


