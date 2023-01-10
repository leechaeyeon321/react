import React, { Component } from 'react'
import PropTypes from "prop-types"

class Props3 extends Component {
    static defaultProps = {
        text: '이건 기본 text props입니다.'
    }
    static propTypes = {
        text: PropTypes.string.isRequired
    }
    // valid() {
    //     console.log("콘솔 띄우기 성공!")
    // }
  render() {
    const {text, valid} = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    )
  }
}

export default Props3