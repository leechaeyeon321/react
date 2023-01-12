import React, { useRef } from 'react'
import { useState } from 'react'

export default function TestRef() {
    const [text, setText] = useState('안녕하세요');

    const inputValue = useRef();

    function onChangeText() {
        console.log(inputValue);
        const inputText = inputValue.current.value;
        /* input 태그까지: inputValue.current Dom 요소까지 접근. */
        setText(inputText); 
    }

    return (
        <div>
            <h1>{text}</h1>
            <input
            ref={inputValue}
            type="text" 
            onChange={() => {
                onChangeText();
                }} 
            />
        </div>
    )
}