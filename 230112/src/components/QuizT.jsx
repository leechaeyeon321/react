import React, { useRef, useState } from 'react'

export default function QuizT() {
    const firstRandomNumber = Math.floor(Math.random() * 10);
    const secondRandomNumber = Math.floor(Math.random() * 10);
    const arithmeticArr = ['+', '-', 'X'];
    const arithmetic = Math.floor(Math.random() * 3);

    let answer = 0;
    
    if(arithmetic === 0) {
        answer = firstRandomNumber + secondRandomNumber;
    } else if (arithmetic === 1) {
        answer = firstRandomNumber - secondRandomNumber;
    } else {
        answer = firstRandomNumber * secondRandomNumber;
    }

    const answerInput = useRef();
    const [again, setAgain] = useState(false);

    const checkAnswer = () => {
        if(answer === Number(answerInput.current.value)) {
            alert('정답 입니다!');
            answerInput.current.value = '';
            answerInput.current.focus();
            setAgain(!again);
        } else {
            alert('틀렸습니다. 다시 입력해 주세요!');
            answerInput.current.value = '';
            answerInput.current.focus();
        }
    }
    return (
    <div>
        <h1>{firstRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumber}</h1>
        <input type="text" ref={answerInput}/>
        <button onClick={checkAnswer}>정답 제출</button>
    </div>
  )
}
