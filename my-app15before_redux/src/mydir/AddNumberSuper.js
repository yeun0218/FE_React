import React from "react";
import AddNumber from "./AddNumber"; 

//넘어온 이벤트 핸들러(props.onClick)를 다시 자식 컴포넌트에게 전달
//가독성을 위해 넘어온 것들 props로 받아줌
const AddNumberSuper = (props) => {
    return(
        <div id="super" >
            <h1>Add Number Super</h1>
            <AddNumber onClick={(size) => props.onClick(size)} />
        </div>
    );
};

export default AddNumberSuper;