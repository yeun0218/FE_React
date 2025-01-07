
import React, {useState} from 'react';
import Child from './Child';

function App() {
  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  const changeFatherAge = () => { // 부모나이 변경할 수 있는 함수
    setFatherAge(fatherAge+1); // 부모나이 변경 핸들러 이벤트
  }
  
  const changeChildAge = () => {
    setChildAge(childAge+1); // 자식 나이 변경 핸들러 이벤트
  }

  console.log("부모 나이가 변경됨(리랜더링)");
  
  const boxStyle = {border:"1px solid", padding:"10px"};
  
  return (
    <div style={boxStyle}>
     <h2>🥸아빠 (신기해)님 </h2>
     <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
     <button onClick={changeFatherAge}>아빠 나이 변경</button>

     <hr/>
     <Child irum={"신통해"} nai={childAge}/>
     <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
