import React, { useState } from "react";

const AddNumber = (props) => {
    //number에 더할 값(size)
    const [size, setSize] = useState(1);
    //size값을 변화시킬 함수
    const handleChange = (e) => {
        setSize(e.target.value);
    }
    //넘어온 이벤트 핸들러에 size값을 넣어 number값을 계산하는 함수
    const handleClick = () => {
        props.onClick(size)
    }
    
    return(
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={handleClick}/>
            <input type="text" value={size} onChange={handleChange}/>
        </div>
    );
};
//input type text의 값이 변화하면 size에 입력한 값이 넣어지고
// + 버튼을 클릭하면 number+=size 실행
export default AddNumber;