import './App.css';
import Board from './components/Board';
import FancyBorder from './components/FancyBorder';
import Image from './components/Image';
import Profile from './components/Profile';
// import AppCopy from './components/StyledApp';
// import TestStyled from './components/TestStyled';
// import InlineCss from './components/InlineCss';
import TestCss from './components/TestCss';
// import UseEffectFetch from './components/UseEffectFetch';

import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      {/* <UseEffectFetch /> */}
      {/* <InlineCss /> */}
      {/* <TestCss /> */}
      {/* <TestStyled /> */}
      {/* <AppCopy /> */}
      {/* <Image /> */}
      {/* FancyBorder내용 */}
      {/*       <FancyBorder color="orange"> */}
      {/* <h1>Hello, props.children</h1>
        <span>이건 유용합니다!</span> */}
      {/*         <TestCss />
      </FancyBorder> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        {/* <Route path='/board/boardID/:boardID'/> 안전하게 하는 방법 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
