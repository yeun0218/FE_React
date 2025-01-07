import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm(){
    ///members/:num/edit
    const {num} = useParams(); // 계산하지 않고 값만 받으니까 함수 사용안해
    
    // 수정할 회원 정보 state로 관리
    const [state, setState] = useState({
        num : 0,
        name: "",
        addr : "" 
        // 수정할 데이터 DB로부터 받아서 채워줘
        // setState로 수정 
    })

// 수정화면이 랜더링 되자마자 읽어와야 해 랜더링이 끝나고 
    useEffect(() => {
        axios.get("/members/" + num) // axios에서 get으로 정보 읽어와 "/members/{num}" 찾아서 가 
        .then(res => {
            setState(res.data) // 넘어와서 useState에 들어가 

        })
        .catch(error => {
            console.log(error);
        })
    },[num]) // num이 바뀔때마다 다녀와야 해 
    
    // num이 바뀔때마다 콜백 함수
// 수정할 자료 수정
    const handleChange = (e) => { // e타고 들어와 (name, addr)
        setState({
            ...state, // 전개연산자 통해서 입력된 값 하나하나 수정
            [e.target.name] : e.target.value // id가 들어오면 state값 변경 (state 값 3개로 구성)
            // name : 홍길동
            // addr : 압구정동
        })
    }

    const navigate = useNavigate(); // 수정 후 목록보기로 가기 위해

    const handleUpdate = () => { // 수정 저장 
        axios.put("/members/"+ num, state) // axios에서 put은 수정 "/members/{num}"
        // restful api에 맞게 서버/클라이언트 사이드 작성 
        .then(res => {
            if(res.data.isSuccess) {
                alert("수정 성공");
                navigate("/members"); // 수정 후 목록보기로 이동 (App.js의 Route path)
                // (Link : 특정 주소로 이동
                // navigate : 이벤트(특정 행동)이 발생했을 때 이동)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <>
            <h2>회원 수정</h2>
           
            이름 : <input onChange={handleChange} type="text" name="name" value={state.name} /><br/> 
            {/** state가 가지고 있는 name과 addr value값으로 가져와 */}
            주소 : <input onChange={handleChange} type="text" name="addr" value={state.addr}/><br/>
            <button onClick={handleUpdate}>수정</button>

        </>
    );
}