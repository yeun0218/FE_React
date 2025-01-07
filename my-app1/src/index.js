import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 확장자 생략 가능 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// index.html 바디안에 있는 div박스 id
root.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);
// 엄격모드 실행 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
