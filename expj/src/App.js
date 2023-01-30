import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';
// import UseEffectFetch from './components/UseEffectFetch';

import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <UseEffectFetch /> */}
      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="/board/boardID/:boardID" />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Date />
    </div>
  );
}
//9ee15f4b701050d4006958620f3cedec
export default App;
