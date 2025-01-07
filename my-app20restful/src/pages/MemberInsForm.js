import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberInsForm(){
    const navigate = useNavigate(); // 네비게이트 객체 
    // 라우터 돔이 지원하는 

    const [state, setState] = useState({}); // 3개여서 {}로 작성 
    //입력한 돔 state로 관리

    const handleChange = (e) => {
        setState({
            ...state, // 전개연산자 통해서 입력된 값 하나하나 수정
            [e.target.name] : e.target.value // id가 들어오면 state값 변경 (state 값 3개로 구성)
        })
    }

    const handleSave = () => {
        axios.post("/members", state) // axios에서 post는 추가 state들고가
        .then(res => {
            if(res.data.isSuccess === true) {
                // === true는 생략
                alert("추가 성공");
                navigate("/members"); // 추가 후 목록보기로 이동 (App.js의 Route path)
                // (Link : 특정 주소로 이동
                // navigate : 이벤트(특정 행동)이 발생했을 때 이동)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        <>
            <h2>새 회원 등록</h2>
            번호 : <input onChange={handleChange} type="text" name="num" placeholder="번호를 입력해주세요 "/><br/>
            이름 : <input onChange={handleChange} type="text" name="name" placeholder="이름를 입력해주세요 "/><br/>
            주소 : <input onChange={handleChange} type="text" name="addr" placeholder="주소를 입력해주세요 "/><br/>
            <button onClick={handleSave}>추가</button>
            {/** state의 내용 들고 날아가  */}
        </>
    );
}