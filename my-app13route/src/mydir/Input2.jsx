import React, {useState} from "react";

const Input2 = () => {
    const [params, setParams] = useState({ // 3개의 속성을 가진 
        irum : "",
        nai : "",
        juso: ""
    }); // json형태

    const {irum, juso, nai} = params; // 순서에 의한 매핑이 아니라 키값에 의한 매핑
    // json순서없음 (map순서없음/set순서있음,list순서있음)

    const changeFunc = (e) => { // 구조분해할당
        const id = e.target.id;
        const value = e.target.value;
        // 이벤트가 트리거 되면 자동으로 수행되는 

        setParams({
            ...params, // 깊은복사(구조분해할당 : destructuring assignment)
            [id] : value // params를 통해서 새로운 객체를 만들어서 params값 갱신
        })
    };

    return(
        <div>
            <br/>
            <div>
                이름 : 
                <input type="text" value={irum} id="irum" onChange={changeFunc} />
            </div>
            <div>
                나이 : 
                <input type="text" value={nai} id="nai" onChange={changeFunc} />
            </div>
            <div>
                주소 : 
                <input type="text" value={juso} id="juso" onChange={changeFunc} />
            </div>
            <br/>
            <table>
                <tr>
                  <th>이름</th><th>나이</th><th>주소</th>
                </tr>
                <tr>
                    <td>{irum}</td>
                    <td>{nai}</td>
                    <td>{juso}</td>
                </tr>
            </table>
        </div>
    );
};

export default Input2;