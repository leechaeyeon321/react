import Contact from './Contact';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function App() {
  function reducer(state = [], action) {
    if (action.type === 'ADD') {
      return [...state, action.payload];
      //만약 push로 넣게 되면 같은 주소로 인식해서 넣을 수 없다.
      //새로 생성해서 새로운 주소에 ...state 내용과 새로운 내용을 만든다.
      //var newState = Object.assign(state);
      //newState.push(action.payload)
      //return newState.push();
      //위의 세 줄과 같음.
    }
    return state;
  }
  const store = createStore(reducer);
  const [list, setList] = useState([]);
  return (
    <>
      <Provider store={store}>
        현재 개수: {list.length}
        <br />
        <Contact />
      </Provider>
    </>
  );
}
//Provider? 스테이트를 관리할 상위에 있으면 된다. 꼭 최상위가 아니어도 내가 스토어에 접근할 수 있는 것을 모두 감싸면 된다.
//Provider에게 너가 관리할 스토어가 이거다. 라며 알려주면 된다.
//실제로 스테이트를 변경할 함수를 스토어를 만들 때 전달을 해준다.function reducer
