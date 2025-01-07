
import { useState } from 'react';
import './App.css';

const SangList = ({itemsProps}) => {
  return (
    <table border={1}>
      <thead>
      <tr>
        <th>코드</th><th>상품명</th><th>가격</th>
      </tr>
      </thead>
      <tbody>
      
        {itemsProps.map((item) => (
          <tr key={item.code}>
          <td >{item.code}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
         </tr> 
        ))}
      </tbody>
    </table>
  )
}




function App() {
  const [items, setItems] = useState([]);

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
  const [show,setShow] = useState(false); // 결과창 출력
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!code || !name || !price) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    const newItem = {
      code,
      name,
      price:parseFloat(price)
    }
    
    setItems((preItems) => [...preItems, newItem]);
    setCode(" ");
    setName(" ");
    setPrice(" ");

  };

 const showData = (e) => {
    e.preventDefault();
    setShow(!show);
  }  

  const delData = (e) => {
    e.preventDefault();
    let itemList = [...items];
    let newList = [];

    itemList.map((data,index) => (
      index!==(itemList.length-1) ? newList.push(data) : " "
    ))
    setItems([...newList]);
  }

  const totalPrice = items.reduce((acc, items) => {return acc + items.price}, 0);
  //console.log(totalPrice);
  const avgPrice = items.length > 0 ? (totalPrice / items.length).toFixed(2) : 0;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label htmlFor='newCode'>코드 : </label>
      <input id="newCode" type='text' onChange={(e)=>{setCode(e.target.value)}} value={code}/><br/>
      <label htmlFor='newName'>상품명 : </label>
      <input id="newName" type='text' onChange={(e)=>{setName(e.target.value)}} value={name}/><br/>
      <label htmlFor='newPrice'>가격 : </label>
      <input id="newPrice" type='text' onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
      &nbsp;&nbsp;
      <button>#{items.length}개 등록</button>
      &nbsp;&nbsp;
      <button onClick={delData}>삭제</button>
      </form>
      <br/>
      <button onClick={showData}>결과 보기</button>
      {show && <SangList itemsProps={items}></SangList>}  {/* show가 true일 때만 결과 표시 */}

      <br/>
      등록수 : {items.length} &nbsp;&nbsp;
      가격총합 :  {totalPrice} &nbsp;&nbsp;
      평균 : {avgPrice}
    </div>
  );
}

export default App;
