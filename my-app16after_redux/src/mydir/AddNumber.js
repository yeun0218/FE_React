import React, { useState } from "react";

const AddNumber = (props) => {

    const [size, setSize] = useState(1);

    const handleChange = (e) => {
        setSize(e.target.value);
    }
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
export default AddNumber;