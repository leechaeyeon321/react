import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from'axios';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
    const [dataArr, setDataArr] = useState([]);
    async function fetchData(){
        const resFetch = await axios.get('http://localhost:4000');

        if(resFetch.status !== 200) return alert('통신 에러');
        
        const data = resFetch.data;
        setDataArr(data);
        console.log(data);
    }

    useEffect(() => {
        fetchData();
        // axios.get('http://localhost:3000')
    }, []); /* return을 한번 그려놓고 그 이후에 실행이 됨. */
    
  return (
    <div>
        {dataArr.map((el, index) => {
            console.log(el);
            return <ProfileComponent
            key={index} 
            name = {el.name} 
            age={el.age} 
            nickName = {el.nickName} />
        })}
    </div>
  )
}
