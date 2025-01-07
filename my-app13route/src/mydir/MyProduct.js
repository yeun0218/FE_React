import React, {useState, useEffect} from "react";

const MyProduct = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // 컴포넌트가 마운트된 후  Ajax 요청을 발생
    useEffect(() => {/*프로토콜,도메인, 포트넘버 // context랑 요청정보는 js파일에*/
        fetch("/abcreact/product.jsp", {method:"GET"})//같은local이라 http://localhost:8080/ 생략 가능
        .then(res => {
            if(!res.ok) {
                throw new Error('네트워크 오류');
            }
            return res.json();
        })
        .then((result) => {
            setIsLoaded(true);
            setItems(result.items); // 이클립스 json이름 items
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    )

    }, []); // 랜더링될 때마다 실행 

    if(error) {
        return <div>Error : {error.message}</div>;
    } else if(!isLoaded) {
        return <div>로딩중...</div>
    } else {
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
};

export default MyProduct;