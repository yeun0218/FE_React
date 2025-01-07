/* 클래스 타입

import {Component} from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2.js";

class App extends Component{
  state = {
    count:0, // 지역변수 (private 멤버필드) : state상태 변수 - 컴포넌트 내부에서
    // 사용(관리)하는 동적인 데이터 
    // props 값을 받으면 리랜더링(값이 변화하면)
    // DOM에 전달할때 전체 다 넘기는게 아니라 변화한 값만 넘겨줘
  };
  countUpdate(n) {
    this.setState({count : n}); // 배열이니까 중괄호로 감싸줘 
  }
  render() {
    const {count} = this.state; {/*버츄얼돔이 리랜더링 *}
    return(
      <div>
        <h2>지역 변수 state</h2>
        number : {count}&nbsp;&nbsp;
        <button onClick={() => {  {/*버튼 누를때마다 버츄얼돔이 리랜더링{count}값만 리랜더링 *}
          this.countUpdate(count+1);
        }}>증가1</button>
        <hr/>
        <HookTest />
        <hr/>
        <HookTest2 />
      </div>
    );
  }
}
*/

// 함수 타입
import { useState, useEffect } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2.js";

const App = () => {
  const [count, setCount] = useState(0); // 함수에서 state선언 (HOOK이 지원)

  const countUpdate = (n) => {
    setCount(n);
  };

  useEffect(() => { // 컴포넌트가 리랜더링 될 때 실행 
    let a = 1;
    console.log(a);
  }, []);
  return(
    <div>
       <h2>지역 변수 state(함수형)</h2>
        number : {count}&nbsp;&nbsp;
        <button onClick={() => {  {/*버튼 누를때마다 버츄얼돔이 리랜더링{count}값만 리랜더링 */}
          countUpdate(count+1);
        }}>증가1</button>
        <hr/>
        <HookTest />
        <hr/>
        <HookTest2 />
      </div>
  );
}

export default App;
