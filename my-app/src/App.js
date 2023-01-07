// import logo from './logo.svg';
import './App.css';
import ImgComponent from './components/ImgComponent';
// import MainHeader from './components/MainHeader';

function App() {
  // function MainHeader() {
  //   return (
  //     <h1>함수형 내부 정의</h1>
  //   )
  // }
  // const str = "Hello, react world"
  // const str = "Hello, first exercise";
  // const inlineStyle = { marginTop: "32px", backgroundColor: "skyblue"};

  // function amazingJSX(){
  //   alert('AmazingJSX');
  // }
  return (
    <div className="App">
      {/* <div style={inlineStyle} onClick={()=>{alert("클릭 됨")}}>{str}</div> */}
      {/* {str}
      {amazingJSX()}
      <img src={logo} alt="로고"/> */}
      {/* <MainHeader /> */}
      <ImgComponent />
    </div>
  );
}

export default App;