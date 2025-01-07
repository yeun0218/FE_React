import React from 'react';
import {Routes, Route, Link, BrowserRouter as  Router} from 'react-router-dom';
import MyTest from "./mydir/Test.js";
import HelloAbout from "./mydir/About.js";
import CountFriend from "./mydir/Count";
import Input1 from "./mydir/Input1.js";
import Input2 from "./mydir/Input2.jsx";
import Multidata from './mydir/Multidata.js';
import MyProduct from './mydir/MyProduct';
import MyProduct2 from './mydir/MyProduct2';



function App() {
  return (
    <Router /*브라우저 라우터*/ >
    <div className="App">
      <h2>라우팅 연습</h2>
      <MyTest />
      <hr/>
      <nav>
        <Link /*a태그라고 생각하면 돼*/ to="/" >Test 화면</Link> | 
        | <Link to="/about">About 화면</Link> |
        | <Link to="/count">친구 추가</Link> |
        | <Link to="/input">입력 화면</Link> |
        | <Link to="/input2">입력 화면2</Link> |
        | <Link to="multi">배열 자료</Link> |
        | <Link to="product">상품 정보(Ajax_fetch)</Link> |
        | <Link to="product2">상품 정보(Ajax_axios)</Link> |
      </nav>
      <Routes>
        <Route path='/' element={<MyTest />}></Route>
        <Route path='/about' element={<HelloAbout />}></Route>
        <Route path='/count' element={<CountFriend />}></Route>
        <Route path='/input' element={<Input1 />}></Route>
        <Route path='/input2' element={<Input2 />}></Route>
        <Route path='/multi' element={<Multidata />} />
        <Route path='/product' element={<MyProduct />} />
        <Route path='/product2' element={<MyProduct2 />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
