import React from "react";
import VisitData from "./VisitData";

const VisitList = ({visits, deleteVisit, clearVisit}) => {
    const list = 
    <table border={1}>
        <thead>
            <tr>
                <th>거래처 이름</th><th>거래처 주소</th><th>방 문 일</th>
            </tr>
        </thead>
        <tbody>
            {visits.map((visit) => (
              <VisitData
                key={visit.id}
                {...visit}
                deleteVisit={deleteVisit}
                
              />
            ))}
            <tr>
                <td colSpan={3}>
                <button style={{width:'100%'}} onClick={clearVisit}>전체삭제</button>
                </td>
            </tr>
        </tbody>
    </table>
    
    
    return <div>{list}</div>
}
export default VisitList;