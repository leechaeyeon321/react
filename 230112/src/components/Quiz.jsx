import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function Quiz() {
    const first = Math.floor(Math.random()*10);
    const second = Math.floor(Math.random()*10);
    function RandArray(array){
        var rand = Math.random()*array.length | 0;
        var rValue = array[rand];
        return rValue;
    }
    const strArray = ['+','-','*'];
    const randomValue = RandArray(strArray);
    const inputEl = useRef();

    const [test, setTest] = useState(false);

    const answerA = () => {
        console.log(randomValue, first, second)
        if(randomValue=='+' && (first+second) == inputEl.current.value){
            alert('정답입니다')
            setTest(!test)
            inputEl.current.value = '';
        } else if(randomValue=='-'&& (first-second) ==inputEl.current.value){
            alert('정답입니다')
            setTest(!test)
            inputEl.current.value = '';
        }  else if(randomValue=='*'&&(first*second)==inputEl.current.value){
            alert('정답입니다')
            setTest(!test)
            inputEl.current.value = '';
        } else {
            alert('틀렸습니다. 다시 입력해 주세요')
            setTest(test)
        }
        console.log(inputEl.current.value)
    }

  return (
    <div>
        <h1>{first}{randomValue}{second}</h1>
        <input type="text" ref={inputEl}/>
        <button onClick={answerA}>정답제출</button>
    </div>
  )
}
