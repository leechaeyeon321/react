/* import React from 'react'
import { useState } from 'react';
import PracticeTwo from './PracticeTwo';

export default function PracticeOne() {
    const [condition, setCondition] = useState('1번');
    const onChange = () => {
        condition ==='1번' ? setCondition('2번') : setCondition('1번');
    }
    const ConditionalRender = condition == '2번' && <PracticeTwo props={condition}/>;
  return (
    <div>
        <h1>{condition}컴포넌트</h1>
        <button onClick={onChange}>{condition}</button>
    </div>
  )
}
 */

import React from 'react'

export default function PracticeOne({text}) {
  return (
    <div><h1>{text} 컴포넌트</h1></div>
  )
}
