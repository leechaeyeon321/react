import React, { Component } from 'react'

class State1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
  render() {
    const {number} = this.state;
    return(
        <div>
        {number}
        <br />
        <button onClick={() => this.setState({number: number + 2})}>+2</button>
        <button onClick={() => this.setState({number: number - 1})}>-1</button>
        </div>
    )
   
  }
}

export default State1