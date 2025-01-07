import React, {useState, useEffect} from "react";
import axios from 'axios';

const MyProduct2 = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // 컴포넌트가 마운트된 후  Ajax 요청을 발생
    useEffect(() => {/*프로토콜,도메인, 포트넘버 // context랑 요청정보는 js파일에*/
        axios("/abcreact/product.jsp", {method:"GET"})//같은local이라 http://localhost:8080/ 생략 가능
        .then(response => {
            setItems(response.data.items); // 이클립스 json이름 items
            // 서버(8080서버)에서 받은 데이터로 상태를 업데이트(갱신)
            setIsLoaded(true); // 로딩이 완료됐기 때문에 false
        })
        .catch((error) => {
            setIsLoaded(true); // 로딩 완료
            setError(error);
        });
    }, []); // 랜더링될 때마다 실행 

    if(!isLoaded) {
        return <div>로딩중...</div>
    }
    if(error) {
        return <div>Error : {error.message}</div>;
    }
     return (
        <ul>
            {items.map(item => (
                 <li key={item.id}>
                    {item.name}
                    {item.price}
                 </li>
            ))}
        </ul>
    );
}

export default MyProduct2;