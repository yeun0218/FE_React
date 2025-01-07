import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
            <h1>메인 페이지</h1>
            사용자명 : <input />
            체중 : <input name='kg' /><br/>
           <Link to="/page">운동 기록 정보 보기</Link> 
        </>
    )
}