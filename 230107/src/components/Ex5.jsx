import React from 'react'
import ChangeObj from './ChangeObj'

export default function Ex5() {
    const pororoObjArr = [
        {
            name: '뽀로로',
            age: '5',
            nickName: '주인공'
        },
        {
            name: '루피',
            age: '4',
            nickName: '잔망 루피'
        },
        {
            name: '크롱이',
            age: '5',
            nickName: '용'
        }
    ]
  return (
    <div className='App'>
        <ChangeObj objArr={pororoObjArr} />
    </div>
  )
}