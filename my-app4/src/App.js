import './App.css';
import {useState} from "react";
import MyComp1 from './mydir/Component1'
import MyComp2 from './mydir/Component2'

const App = () => {
  const [subject, setSubject] = useState({title:'웹문서', subtitle:'오늘 금요일'});
  const [friends] = useState([ // 배열 안에 멤버로 JSON
    {bun:1, irum:'몽이', nai:15},
    {bun:2, irum:'메모핑', nai:3} 
  ]);
  
  const handleChangeData = () => { // 이벤트핸들러 함수
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum} : 나이는 ${friend.nai}살이다.`);
    });
  };

  return (
    <div className="App">
      <h2>이벤트 연습</h2>
      <MyComp1 title={subject.title} subtitle={subject.subtitle}
        changeData = {handleChangeData} /> {/*자식에게 객체전달(이벤트핸들러) */}
      <br/>
      <MyComp2 title={subject.title} subtitle={subject.subtitle}
        friends = {friends}
        changeData = {handleChangeData}></MyComp2>
    </div>
  );
}

export default App;
