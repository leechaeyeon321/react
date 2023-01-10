import { Component } from 'react';
import logo from '../logo.svg'

class Test2 extends Component {
  render() {
    const style = { marginTop: "32px", color: "orange", fontSize: "40px"};
    return (
        <div className='react' style={style}>
            <h2>안녕하세요</h2>
            <img src={logo} alt="이미지"/>
        </div>
    )
  }
}

export default Test2;
