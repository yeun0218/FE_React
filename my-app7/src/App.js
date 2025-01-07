/*
import { useState } from 'react';


function HobbyList({itemsProps}) { // 취미 목록을 출력하기 위한 함수 컴포넌트
  // map 함수 이용해서 item수만큼 반복 -> 반복이기때문에 key값줘 
  // items.props가 넘어오면 하나씩 꺼내서 map으로
  return (
    <ul>
      {itemsProps.map((item)=> (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}


function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(text.length === 0) {
      return ;
    }

    const newItem = {
      text : text,
      id : Date.now()
    };

    // 리액트가 상태 업데이트를 수행할 때 현재 상태를 콜백함수에 전달해
    // 새로운 상태를 생성
    setItems((preItems) => [...preItems, newItem]); // 전개연산자 사용
    // preItems의 모든 요소를 새로운 배열에 복사해서 newItem에 추가
    // 새로운 배열은 newItem을 추가
    console.log(items);
    setText(""); //비워줘
  }

  return (
    <div >
      <h2>취미 목록</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='new-hobby'>취미는</label>
        <input id="new-hobby" onChange={handleTextChange} value={text} />
        &nbsp;&nbsp;
        <button>클릭 #{items.length}</button>
      </form>
      <br/>
      <div>총 건수 : {items.length}</div>
      <HobbyList itemsProps={items} />
    </div>
  );
}
  export default App;
*/

// function type -----> class type으로 코딩하기 
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items:[], text:""};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <div>
        <h2>취미 목록 (class 타입)</h2>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='new-hobby'>취미는</label>
        <input id="new-hobby" onChange={this.handleTextChange} value={this.state.text} />
        &nbsp;&nbsp;
        <button>클릭 #{this.state.items.length}</button>
        </form>
        <br/>
        <div>총 건수 : {this.state.items.length}</div>
        <HobbyList itemsProps={this.state.items} />
      </div>
    )
  }


handleTextChange(e) {
  /// setText(e.target.value); 함수형 -->
  this.setState({text:e.target.value});

}

handleSubmit(e) {
  /* 함수형
  e.preventDefault();
    if(text.length === 0) {
      return ;
    }
    const newItem = {
      text : text,
      id : Date.now()
    };
  */
  e.preventDefault();
  if(this.state.text.length === 0 ) {
    return;
  }
  const newItem = {
    text : this.state.text,
    id: Date.now
  };

this.setState(state => ({
  items: this.state.items.concat(newItem),
  text:""
}))
}
}

/* 함수형
setItems((preItems) => [...preItems, newItem]);
console.log(items);
setText("");
*/






export default App;

class HobbyList extends React.Component {
  render(){
    return(
  <ul>
    {this.props.itemsProps.map((item) => (
      <li key={item.id}>{item.text}</li>
    ))}
 
  </ul>
)
}
}

