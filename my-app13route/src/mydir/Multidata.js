import React from "react";

const MemberComp = ({memberData}) => { // 배열자료 처리용(출력용)
    // memberData : props
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.junhwa}</td>
        </tr>
    ); 
};

const Multidata = () => { // Main
    const members = [
        {irum:"관우", junhwa:"111-1111"},
        {irum:"유비", junhwa:"222-1111"},
        {irum:"장비", junhwa:"333-1111"},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                {members.map((mem, index) => (
                    <MemberComp key={index} memberData={mem} />
                ))}
            </tbody>
        </table>
    );
};

export default Multidata;