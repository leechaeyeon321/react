import React from 'react'

export default function Item({item, price}) {
  return (
    <div>
        <h2>품목명: {item}</h2>
        <p>기격: {price}</p>
    </div>
  )
}
