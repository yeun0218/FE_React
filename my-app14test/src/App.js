import React from 'react';
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Main from "./mydir/Main";
import JikwonTem from "./mydir/JikwonTem";


function App() {
  return (
    <Router>
    <div className="App">
      <h2>React14 예제문제</h2>
      <hr/>
      <nav>
        
        <Link to="/">메인 화면</Link> |
             
        <Link to="/gugu">구구단 화면</Link> |
               
        <Link to="/jikwon">직원 자료</Link>
  
      </nav>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/jikwon' element={<JikwonTem/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
