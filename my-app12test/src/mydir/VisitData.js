import React from "react";
import "../mycss/VisitData.css"

const VisitData = ({clientName, address, visitDate, id, deleteVisit}) => {
    return (
       
            
            <tr className="visit-data">
                <td ><span className="delete" onClick={(e) => {
                deleteVisit(id);
            }}>&times;</span>
                    {clientName}
                </td>
                <td>{address}</td>
                <td>{visitDate}</td>
            </tr>
           
      
    )
}
export default VisitData;