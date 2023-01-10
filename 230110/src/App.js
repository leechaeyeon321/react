// import './App.css';
import Event_ex from './ex/Event_ex';
// import State1 from './components/State1';
// import State2 from './components/State2';
// import Handler_ex from './ex/Handler_ex';
// import Props1 from './components/Props1';
// import Props2 from './components/Props2';
// import Props3 from './components/Props3';
// import Test from './components/Test';
// import Test2 from './components/Test2';
// import Ex3 from './components/Ex3';
// import Ex4 from './components/Ex4';
// import Ex5 from './components/Ex5';
// import Ex6 from './components/Ex6';

function App() {
  // function valid() {
  //   console.log("콘솔 띄우기 성공!")
  // }
  return (
    <div className="App">
      {/* <Ex6 /> */}
      {/* <Ex5 /> */}
      {/* <Ex4 /> */}
      {/* <Ex3/> */}
      {/* <Test /> */}
      {/* <Test2 /> */}
      {/* <Props1 /> */}
      {/* <Props2 /> */}
      {/* <Props3 text={"App컴포넌트에서 넘겨준 text props입니다."} valid={valid} /> */}
      {/* <State1 /> */}
      {/* <State2 /> */}
      {/* <Handler_ex /> */}
      <Event_ex />
    </div>
  );
}
// const MyComponent = props => {
//   const {name, children} = props;
//   return (
//     <div>안녕하세요, 제 이름은 {name}입니다. 
//       <br />
//       children 값은 {children} 입니다.
//     </div>
//   );
// }

// MyComponent.defaultProps = {
//   name: '기본 이름'
// }
// const App = () => {
//   return <MyComponent>리액트</MyComponent>;
// }

export default App;
