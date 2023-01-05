import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Ex2 from './components/Ex2';
import StateAndVariable from './components/StateAndVariable';
import ArrState from './components/ArrState';
import ClassState from './components/ClassState';
import ObjState from './components/ObjState';

function App() {
  // let [teacher, setTeacher] = useState('이채연');

  // function customSetTeacher() {
  //   setTeacher('Elly');
  //   console.log(teacher);
  // }

  // function inEnglish() {
  //   const spanEl = document.querySelector('.App > span');
  //   spanEl.innerHTML = 'elly';
  //   // teacher = 'elly';
  //   // console.log(teacher);
  // }
  return (
    <div className="App">
      {/* <button onClick={customSetTeacher}>영어로!</button>
      <br />
      <span>{teacher}</span> */}
      <ObjState />
    </div>
  );
}

export default App;
