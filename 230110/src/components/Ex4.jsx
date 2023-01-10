import React from 'react'

export default function Ex4() {
    const a = 3
    const b = 2
  return (
    <div className='Ex4'>
        {a>b && <h1>a가 b보다 큽니다.</h1>}
    </div>
  )
}
