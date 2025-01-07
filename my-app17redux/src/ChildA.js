import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, reset} from './redux/ResourceSlice';

export default function ChildA(){

    //ResourceSlice에서 생성한 state 가져오기
    const value = useSelector((state)=>state.resource.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>ChildA</h3>
            <p>공유 값 : {value}</p>
            <button onClick={() => dispatch(increment())}>값(value) 증가</button>
            <button onClick={() => dispatch(reset())}>값 초기화</button>
        </div>
    );
}