import { useEffect, useState } from "react";

function MyForm() {
    const [formData, setFormData] = useState({
        irum : "", 
        nai : "",
        menu : "아이스 아메리카노"
    });

    const dataChange = (e) => { // innerfunction
        const name = e.target.name; // 폼태그 내에 name 속성 추출
        const value = e.target.value;
        //console.log({[name] : value});
        // console.log({...formData});
        setFormData({
            ...formData, // formData상태를 갱신. 기존 객체를 복사 후 특정 필드만 갱신
            // 기존 상태를 유지하며 필요한 부분만 덮어쓰기
            [name] : value
        })
    };

    const dataSubmit = (e) => {
        e.preventDefault();
        const {nai} = formData; // destructure formData에서 nai 값만 추출해서 
        if(!Number(nai) || isNaN(Number(nai))) {
            // 숫자가 아닐 경우
            alert("나이는 숫자로 입력");
        }
    }

    // life cycle 관련
    useEffect(() => {
        console.log("MyForm 컴포넌트가 마운트됨 : componentDidMount"); // componentDidMount
        return () => {
            console.log("MyForm 컴포넌트가 언마운트됨 : componentWillUnmount") // componentWillUnmount
        }
    }, []); // 1회만 실행하기 위해 의존성배열 비워둬

    useEffect(() => {
        console.log("MyForm 컴포넌트가 갱신될 때마다 update됨 : componentDidUpdate")
    }, [formData]); // formData값이 바뀔때마다 실행 
    // => componentDidUpdate

    return (
        <>
        <h3>안녕 {formData.irum}님 넌 {formData.nai}살, 선택한 음료는 {formData.menu}</h3>
        <form onSubmit={dataSubmit}>
            이름 입력 : <input type="text" name="irum" onChange={dataChange} /><br/>
            나이 입력 : <input type="text" name="nai" onChange={dataChange} /><br/>
            음료 선택 : 
              <select name="menu" value={formData.menu} onChange={dataChange}>
                <option value={"아이스 아메리카노"}>아이스 아메리카노</option>
                <option value={"아이스 라떼"}>아이스 라떼</option>
                <option value={"아이스 카푸치노"}>아이스 카푸치노</option>
              </select>
              <br/><br/>
              <button type="submit">전송</button>
        </form>
        </>
    );
}
export default MyForm;