import React, {memo} from "react";

const boxStyle = {border:"1px dotted blue", padding:"10px"};

const Child = ({irum, nai}) => { // props 두개 받아
    console.log("자녀 나이 변경됨(리랜더링)");
    return (
        <div style={boxStyle}>
            <h3>* 😒자녀1 *</h3>
            <p>이름 : 신통한(신기해님의 자녀)</p>
            <p>나이 : 8살</p>

            <h3>* 😫자녀2 *</h3>
            <p>이름 : {irum}</p>
            <p>나이 : {nai}</p>
        </div>
    );
}
// export default Child;
export default memo(Child);