// function 타입의 컴퍼넌트
import { useState } from "react";

const HookTest = () => {
    const [count, setCount] = useState(0); // count는 0기억 , 수정은 setCount
    //[state 변수명, state수정함수] = useState(초기값);
    // [count] 만 쓰면 final처럼 수정 안하겠다는 뜻 
    console.log(useState(0));

    return (
        <div>
            number : {count}&nbsp;&nbsp;
            <button onClick={() => setCount(count + 1)}>증가 2</button>
        </div>
    );
};
export default HookTest;