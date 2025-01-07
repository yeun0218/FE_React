import { useState } from "react";
import Gugudan from "./Gugudan";

const App = () => {
  /*const [name, setName] =useState("");
  const [show, setShow] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(name);
  ;}

  const handleChange = (e) => {
    setName(e.target.value);
  };
   
  return (
    <main>
      <h2>* 이름 입력 *</h2>
      <form onSubmit={handleSubmit}>
        이름 입력 : <input value={name} onChange={handleChange}/><br/>
        <button type="submit"> 확 인 </button>
      </form>
      <hr/>
      <div>결과는 {show}</div>
    </main>
  )
    */

  return (
    <div className="App">
    <header className="App-header">
      <Gugudan />
    </header>
  </div>
  )
}

export default App;
