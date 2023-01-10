import { Component } from 'react';


class Test extends Component {
  render() {
    const name = '이채연';
    const my_style = { padding: "12px", backgroundColor: "blue", color: "orange", fontSize: "40px"};
    return <div className='react' style={my_style}>{name}</div>
  }
}

export default Test;
