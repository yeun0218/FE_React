import { useState } from 'react';
import './App.css';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

function App() {

  //number 에 초기 값 주기
  const [number, setnumber] = useState(0);

  //number 값 수정을 위한 함수
  const handleAddNumber = (size) => {
    setnumber(number + Number(size));
  }

  return (
    <div className="App">
      <h1>메인</h1>
      {/*props로 이벤트 핸들러 전달 */}
      <AddNumberSuper onClick={handleAddNumber} />
      AddNumber : {number} 
      <br/>
      {/*props로 number 값 넘기기 */}
      <ShowNumberSuper number={number} />
    </div>
  );
}

export default App;
