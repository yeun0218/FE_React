import "../mycss/Form.css"

const Form = ({value, onChange, onCreate, onKeyDown}) => {
  // input입력갑스 input바뀔때 , 버튼누르면, input에서 키보드 누르면
    return (
        <div className="form">
          할 일 입력 : <input type="text" /* type생략해도  text */
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}/> 
          <button className="create-button" onClick={onCreate}> 등 록 </button>
        </div>
    );
}
export default Form;