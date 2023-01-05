import React, { Component } from 'react';

export default class ClassState extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     teacher: '이채연',
  //   };
  // }
  //현재 버전
  state = {
    teacher: '이채연',
  };
  render() {
    const { teacher } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'Elly' })}>
          영어로!
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
