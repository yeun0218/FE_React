//* eslint-disable  warning 안보여줘 */
import './App.css';
import React, {useState} from "react";


function App() {
  const irum = "예은이의 JSX 사용법";
  let title = "이건 제목 : "; // js함수의 지역변수(일반메소드) state 아님
  // -> rerendering 대상이 아님
  
  const[jemok, setJemokFunc] = useState("자바스크립트"); 
  // state에 들어갈 수 있는거(저장객체) : 문자, 숫자, 배열, 객체...
  const [jemok2, setJemokFunc2] = useState(["리액트", "자바", "스프링부트"]);
  
  // 이벤트 처리용 함수
  const dataUpdate = () => { // 내부함수
    //alert("a");
    title = "타이틀을 바꾸자"; // virtual DOM이 rerendering되지 않음 
    setJemokFunc('오라클');
  }

  const dataUpdate2 = () => { // 값에 변화가 일어나면 리랜더링
    let newArr = [...jemok2]; // ... : 전개 연산자
    console.log(newArr);
    newArr[1] = "백엔드 프로그램의 왕";
    setJemokFunc2(newArr); // rerendering
  }

  // 이벤트 처리 계속 ...
  const [count, setCount] = useState(0); // 버튼클릭횟수

  return (
    <div className="App">
      <div className='redbar'>
        <h2>리액트의 이해</h2>
      </div>
      <div className='list'>
        <h3>이름은 {irum}</h3>
        <p>state 변수 확인</p>
        <span><b>(일반변수 _ ){title}</b></span><br/>
        <span><b>(state _ ){jemok}</b></span><br/>
        <button onClick={dataUpdate}>title, jemok 변경 </button>
        <hr/>
        <div>{jemok2[0]}</div>
        <div>{jemok2[1]}</div>
        <div>{jemok2[2]}</div>
        <button onClick={dataUpdate2}>jemok2(목록) 변경</button>
        <hr/>
        그림 클릭 : <span onClick={() => {setCount(count+1)}}>🤦‍♀️😒🤷‍♀️</span>
        {count}
      </div>
    </div>
  );
}

export default App;
