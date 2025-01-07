import { useState } from "react";
import "../App.css"; // css적용
import pic1 from "../메모핑.png"; // src안에 있는 이미지파일 사용

export default function HookTest2() { // 바로 export 써주기 가능 (함수앞에 선행)
    const [item,setItem] = useState(0);
    const increatementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    const mystyle = {color:'blue', textAlign:'center', fontSize:'30pt'};

    return (
        <div className="App">
            <div>
                number : {item}&nbsp;
                <button onClick={increatementItem}>증가</button>&nbsp;
                <button onClick={decrementItem}>감소</button>&nbsp;
            </div>
            {/* CSS style 적용 연습 : style 속성 값은 {} 안에 작성 */}
            <h2 className="black_bar">react에서 스타일 적용</h2>
            <h2 style={mystyle}>react에서 스타일 적용2</h2>
            <h2 style={{color:'red', textAlign:'right'}}>react에서 스타일 적용3</h2>

            {/* image 적용 연습 */}
            <div>
                <img src={pic1} alt="이미지 읽기" />
            </div>
            <div className="image_bg"></div>

            <div >
            <img style={{width:"200px"}}src={`${process.env.PUBLIC_URL}/imgs/투슬리스.png`} alt="public 이미지 읽기" />
            </div>
        </div>
    );
 }
//export default HookTest2;