
const FormData = ({clientName, address,visitDate, onChange, onAdd, onKeyDown}) => {
    return (
        <div className="Form">
            거래처 이름 : <input id="name" value={clientName} onChange={onChange} onKeyDown={onKeyDown} /><br/>
            주소 : <input id="addr" value={address} onChange={onChange} onKeyDown={onKeyDown} /><br/>
            방문일 : <input id="date" value={visitDate} onChange={onChange} onKeyDown={onKeyDown} />
            <button className="create-button" onClick={onAdd}> 등 록 </button>
        </div>
    )
}
export default FormData;