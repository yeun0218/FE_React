import {useState, useEffect} from "react";

const Clock3 = () => {
    const [date, setDate] = useState(new Date()); // constructor에서 super한거

    // lifecycle 관련 HOOK : 
    // useEffect : 화면에 렌더링이 완료된 후에 수행되며 
    // componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것
    useEffect(() => { // 1회만 실행 
        // componentDidMount
        const timerId = setInterval(() => showSigan(), 1000);

        // componentWillUnmount에 해당하는 클린업 함수를 반환
        return () => {
            clearInterval(timerId);
        }
    }, []); // 의존선 배열이 비어있어 -> 1번만 호출

    const showSigan = () => {
        setDate(new Date());
    }

    return(
        <div>
            <h1>오랜만이야 ~~~</h1>
            <h2>지금은(clock3) {new Date().toLocaleTimeString()}</h2>
            <h2>현재 시간은(clock3) {date.toLocaleTimeString()}</h2>
        </div>
    );
}
export default Clock3;