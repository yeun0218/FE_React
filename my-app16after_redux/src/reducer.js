// 리덕스의 리듀서 함수 : Action에 따라 변경하는 순수함수로
// 현재 state와 action을 받아 새로운 상태로 변환

//state기본값
const initialState = {number:0};

export const numberReducer = (state=initialState, action) => { //state와 action 받기
    switch(action.type){ //action type에 따라 계산 수행, type은 보통 대문자로 적어줌
        case "INCREASE_NUMBER" :     
            return {...state, number:state.number + action.payload} 
            //넘어온 값을 payload라고 함, payload를 통해 state값을 변경시킴
        default :
            return state; 
    }
}

