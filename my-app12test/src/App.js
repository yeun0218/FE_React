import React, { useState, useCallback } from 'react';

import VisitListTemplate from './mydir/VisitListTemplate.js';
import FormData from './mydir/FormData.js';
import VisitList from './mydir/VisitList.js';


function App() {
  const[clientName, setClientName] = useState("");
  const[address, setAddress] = useState("");
  const[visitDate, setVisitDate] = useState("");
  const [visits, setVisits] = useState([
    {id:0, clientName:"test1", address:"test1", visiDate:"test1"}
  ]);

  const [nextId, setNextId] = useState(1);

  const handleChange = useCallback((e) => {
    if(e.target.id === "name")  setClientName(e.target.value);
    else if (e.target.id === "addr") setAddress(e.target.value);
    else if (e.target.id === "date") setVisitDate(e.target.value)
    
  },[]);

  const addVisit = useCallback(() => {
    if(clientName.trim() === "" || address.trim() === "" || visitDate.trim() ==="") return; // 아무것도 입력 안했을 때는 반환안함

    setVisits((preVisit) =>
      preVisit.concat({
        id:nextId,
        clientName:clientName,
        address:address,
        visitDate:visitDate
      }));
      setClientName(""); // 입력필드 초기화
      setAddress("");
      setVisitDate("");
      setNextId((preId) => preId+1);
  }, [clientName, address, visitDate, nextId]);

  const handleKeyDown = useCallback((e) => {
    if(e.key === "Enter") {
      addVisit(); // enter키 누르면 실행 
    }
  },[addVisit]); // addVisit함수가 변경될 때마다 ketdown이 재생성

  const deleteVisit = useCallback((id) => {
    setVisits((preVisit) => preVisit.filter((todo) => todo.id !==id));
    // 삭제하려는 아이디를 제외한 나머지 항목으로 재구성
  },[]);

  const clearVisit = useCallback(() => {
    setVisits([]);
  },[])
  
  return (
    <div>
      <VisitListTemplate>
        {
          <FormData 
          clientName={clientName}
          address={address}
          visitDate={visitDate}
          onChange={handleChange}
          onAdd={addVisit}
          onKeyDown={handleKeyDown}
          />
        }

        <VisitList 
          visits={visits}
          deleteVisit={deleteVisit}
          clearVisit={clearVisit}
        />
      </VisitListTemplate>
    </div>
  );
}

export default App;
