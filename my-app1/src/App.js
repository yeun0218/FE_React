//작업 느낌이 다른데 넣어줘야 할때 fubction만들어서 넣어줘

import { Component } from "react";
import Navdata from "./mydir/Navdata"; // 확장자 생략 가능 

// 클래스 컴포넌트(작은 단위) : 하나의 조립식 부분 (유닛화)
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>머리글 : 웹문서</h1>
      </header>
    );
  }
}

function Welcome(props) { // js 부모컴포넌트 (props : 부모가 자식에게 넘겨주는 값값)
  let kbs = "공영방송"; // js
  return ( // JSX 
    <article>
      {props.who} 글 기사 내용<br/>
      {kbs}
    </article>
  );
}


function App() {
  // function내에서 return안에 들어와 있는건 JSX
  return ( // html이 아니라 JSX
    <div className="App"> {/* 바벨만나면 랜더링*/ }
       연습용
       <Subject></Subject>{/*컴포넌트 호출*/}
       <Subject></Subject>{/*또 호출 가능*/}
       <hr/>
       <Welcome who="홍길동"></Welcome>{/*부모가 넘겨준 값은 못건들여*/}
       <br/>
       <Navdata msg="부모가 정보 전달" msg2="전달2"></Navdata>
    </div>
    
  );
}

export default App;
