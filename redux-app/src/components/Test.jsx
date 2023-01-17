import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => state);
  /* useSelector((state) => {return state}) 중괄호와 return은 생략 가능함 */
  /* 콜백으로 받아온 state 값을 return 해준다*/
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight}kg 입니다.</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        살 찌기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살 빼기
      </button>
    </>
  );
}
