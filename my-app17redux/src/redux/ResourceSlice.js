// reducer 파일
import { createSlice } from '@reduxjs/toolkit';

// 리듀서와 액션을 생성, 초기 상태 정의, 함수 관리, 불변성 관리
const ResourceSlice = createSlice({
    name:"resource",
    initialState:{
        value:0, // 공유 자원, 접근할 때는 resource.value로 한다
        kor:50, //여러 개 선언 가능
    },
    reducers:{ // 리듀서를 정의, 각 함수는 state, action을 인수로 받는다.
        //increment -> 액션타입
        increment:(state) => {
            state.value += 1;
        },
        decrement:(state) => {
            state.value -= 1;
        },
        reset:(state) => {
            state.value = 0;
        }
    }
});

//액션타입 내보내기 -> dispatch에서 사용
export const {increment, decrement, reset} = ResourceSlice.actions;
//reducer 내보내기
export default ResourceSlice.reducer;