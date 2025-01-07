
import './App.css';
import React, {useState} from "react";

function App() {
  const [gili, setGili] = useState('');
  const [result, setResult] = useState('');
  const inputUnit = event => {
    // input에 id줘서 getElementById("dkdlel").value
    setGili(event.target.value);
    console.log(event.target.value);
  }

  const showData = event => {
    setResult ({
      gili : gili,
      cgili : gili * 100
    });
  }
  //const showM = () => gili;
  //const showCm = () => gili ? gili * 100 : 0;

  return (
    <div className="App">
      <h3>📐길이 환산📏📏</h3>
      <input type="text" placeholder='미터 단위로 작성해주세요' 
      value={gili} onChange={inputUnit}></input>
      <button onClick={showData}>계산</button><br/>
      <span>미터 : {result.gili}</span><span>  센티미터 : {result.cgili}</span>
    </div>
  );
}

export default App;
