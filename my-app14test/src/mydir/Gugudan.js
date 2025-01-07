import React, {useState, useCallback} from 'react';

function Gugudan() {
    const [dan, setDan] = useState("");
    const [num, setNum] = useState("");

    const handleChange = useCallback((e) => {
        setNum(e.target.value);
    });

    const addList = useCallback(() => {
        
    })


    return (
        <section>
            단 입력 : <input value={num} onChange={handleChange} onKeyDown={handleKeydown} />
            <button onClick={addList}> 확 인 </button>
        </section>
    )
}