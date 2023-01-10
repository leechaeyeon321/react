import React, { Component } from 'react'

class Handler_ex extends Component {
    state = {
        text: 'Hello World!'
    }
  render() {
    const {text} = this.state;
    return(
        <div>
        <span>{text}</span>
        <br />
        <button onClick={() => this.setState({text: 'Goodbye World!'})}>클릭</button>
        </div>
    )
   
  }
}

export default Handler_ex