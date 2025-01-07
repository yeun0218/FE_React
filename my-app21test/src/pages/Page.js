import {Link, useNavigate} from 'react-router-dom';

export default function Page() {
    return (
        <>
        <Link to ="/list">전체 자료 읽기</Link>&nbsp;&nbsp;
        <Link to ="/insert">운동 정보 등록</Link>&nbsp;&nbsp;
        <Link to ="/update">칼로리 소모량 수정</Link>&nbsp;&nbsp;

        </>
    )
}