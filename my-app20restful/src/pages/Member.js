import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useNavigate } from "react-router-dom"

export default function Member(){
    const [members, setMembers] = useState([]);

    const refresh = () => {
        axios.get("/members")
        .then(res => {
            setMembers(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }
    useEffect(() => {
        refresh();
    },[]) //1회만 수행할 것이기 때문에 의존성배열 없음

    //삭제 버튼 처리 이벤트 핸들러 함수
    const handleDelete = (num) =>{
        axios.delete(`/members/` + num)
        .then(res => {
            refresh(); //삭제 후 목록보기
        })
        .catch(error => {
            console.log(error);
        })
    }
    //페이지 이동하기 함수 객체 생성
    //Link를 써서 페이지 이동(단순 이동)을 할 수 있지만 useNavigate를 사용하면
    //특정 이벤트가 실행됐을 때 동작하거나 추가적인 로직이 필요한 경우 효과적
    const navigate  = useNavigate();

    return (
        <>
            <Link to="/">홈페이지</Link>&nbsp;&nbsp;
            <Link to="/members/new">회원추가</Link>
            <h1>회원 목록</h1>
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>이름</th><th>주소</th><th>수정</th><th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(item => 
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.name}</td>
                        <td>{item.addr}</td>
                        <td><button onClick={()=>{
                            navigate(`/members/${item.num}/edit`) //라우트를 만나게 해줌
                        }}>수정</button></td>
                        <td><button onClick={() => handleDelete(item.num)}>삭제</button></td>
                    </tr>)                        
                    }
                </tbody>
            </table>
         </>
    );
}