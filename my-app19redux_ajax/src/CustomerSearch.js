import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomers } from "./action";

import axios from "axios";

const CustomerSearch = () => {
    const [searchTerm, setSearchTerm] = useState(""); //검색어

    const customers = useSelector((state) => state.customers); 

    const dispatch = useDispatch(); //dispatch 객체 생성

    const handleSearch = async() => { //async달아줘서 비동기 함수임을 알려줌 
        const response = await axios.get("/findgogek.jsp",{
            params:{phone:searchTerm }//검색어전달
        });

        //웹 서버로부터 요청된 결과를 받아 Redux 상태에 저장
        dispatch(setCustomers(response.data));
    };

    return (
        <div>
            <h2>전화번호로 고객 검색</h2>
            <input type="text" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="직원명 입력" />
            <button onClick={handleSearch}>검색 결과 확인</button>
            <ul>
                {customers.map((ctm)=>(
                    <li key={ctm.gogekno}>
                        {ctm.gogektel} : {ctm.gogekname}님
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerSearch;