import React from "react";
import Jikwon from "./Jikwon";

const JikwonList = ({datas}) => {
    return(
    <table>
        <thead>
            <tr>
                <th>사번</th><th>이름</th><th>부서명</th><th>직급</th><th>연봉</th>
            </tr>
        </thead>
        
            {datas.map((data,index) => (
                <Jikwon
                key={index}
                {...data}
                />
            ))}
    </table>)
}
export default JikwonList;