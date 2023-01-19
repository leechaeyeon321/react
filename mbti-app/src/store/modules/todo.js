//초기 상태 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

//문제 해결(키값 겹치는 문제)
let counts = initState.list.length;
initState['nextID'] = counts;
/* initState.nextID와 동일 */

//액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

//액션 생성 함수 설정 (내부에서 실행하고 외부에서 가져다 쓸 수 있도록 export 사용)
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

//Reducer
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state /* 배열 또는 객체에서 기존의 값을 그대로 return 할때 다음과 같은 전개연산자 사용 */,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
// switch에는 기본으로 default 설정해줘야 함.
