import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "./action";

import axios from "axios";

const EmployeeSearch = () => {
    const [searchTerm, setSearchTerm] = useState(""); //검색어

    //employeeReducer에서 관리되는 state를 조회
    const employees = useSelector((state) => state.employees); 

    const dispatch = useDispatch(); //dispatch 객체 생성

    const handleSearch = async() => { //async달아줘서 비동기 함수임을 알려줌 
        const response = await axios.get("/findjikwon.jsp",{
            params:{name:searchTerm }//검색어전달
        });

        //웹 서버로부터 요청된 결과를 받아 Redux 상태에 저장
        dispatch(setEmployees(response.data));
    };

    return (
        <div>
            <h2>직원이름으로 직급 검색</h2>
            <input type="text" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="직원명 입력" />
            <button onClick={handleSearch}>검색 결과 확인</button>
            <ul>
                {employees.map((emp)=>(
                    <li key={emp.jikwonno}>
                        {emp.jikwonname}님의 직급은 {emp.jikwonjik}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeSearch;