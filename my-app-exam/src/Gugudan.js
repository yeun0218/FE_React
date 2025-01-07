import { useState } from "react"

const Gugudan = () => {
    const [dan, setDan] = useState("");
    const [result, setResult] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const num = parseInt(dan);

        const newResult = [];
        for (let i = 1; i<=9; i++) {
            newResult.push(num * i);
        }
        setResult(newResult);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setDan(value);
        if (value === "") {
            setResult([]);
        }
    };

    return(
        <main>
          <h3>* 구구단 출력하기 *</h3>  
          숫자 입력 : 
          <form onSubmit={handleSubmit}>
          <input id="dan" value={dan} onChange={handleChange}/>
          <button type="submit"> 확 인 </button>
          </form>
        <hr/>
        <div>
            <ul>
                {result.map((item, index) => (
                    <li key={index}>
                        {dan} X {index + 1} = {item}
                    </li>
                ))}
            </ul>
        </div>

        </main>
    )
}
export default Gugudan;