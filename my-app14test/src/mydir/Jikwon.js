

const Jikwon = ({datas, avg}) => {
    
    return (
        <tbody>
        <tr>
            {datas.map(data => (
                <td key={data.jikwonno}>{data.jikwonno}
                {data.jikwonname}
                {data.busername}
                {data.jikwonjik}
                {data.jikwonpay}
                </td>
            ))}
        </tr>
        <tr>
            <td>인원수 : {datas.length}명</td> 
        </tr>
        <tr>
            <td>연봉 평균 : {avg};</td>
        </tr>
        </tbody>
    )
}
export default Jikwon;