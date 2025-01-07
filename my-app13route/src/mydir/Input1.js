import React, { useState } from "react";

const Input1 = () => {
    const [txtValue, setTxtValue] = useState("");

    const changeFunc = (e) => {
        setTxtValue(e.target.value);
    }

    return (
        <div>
            <input value={txtValue} onChange={changeFunc}/>
            <br/>
            {txtValue}
        </div>
    )
}
export default Input1;