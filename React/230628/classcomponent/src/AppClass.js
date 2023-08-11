// 클래스 컴포넌트 -> 지금은 안쓰지만 예전 코드를 볼줄은 알아야되니까
// 함수형과 비교
import React, { Component } from 'react'
import BoxClass from './BoxClass'
// import { useState } from 'react'
// -> useState는 함수형 컴포넌트에서만 사용가능 단, 불러오긴 가능함

export default class AppClass extends Component {
  componentWillUnmount() {
    console.log("byebye");
  }
  constructor(props) {
    super(props)
    this.state = {
      counter2: 0,
      num: 1,
      value: 0
    }
  }

  increase = () => {
    this.setState({ // setState따로 정의
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1
    })
  }

  render() {
    return (
      <div>
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value}/>}
        {/* counter2가 3이상이 되면 BoxClass가 사라지게해라 */}
      </div>
    )
  }
}
