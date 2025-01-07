import React from 'react';

// mount( DOM이 생성되고 결과가 출력되는 것을 의미 )
// constructor를 제일 먼저만나 ->  getDerivedStateFromProps -> render
// -> componentDidMount -> componentUpdate -> componentWillUnmount 마운트 호출 순서 
// componentDidMount만나야지 브라우저에 출력되서 우리 눈에 보여 
class Clock2 extends React.Component {
    constructor(props) { // 생성자 메소드
        super(props);
        this.state = {date : new Date()}; // 생성자에서 유일하게 this.state값 줄 수 있어
    }

    // 랜더링이 끝나면 시스템이 바로 호출 ( 콜백)
    componentDidMount() { // lifecycle관련 calllback method
        // 최초의 컴포넌트가 출력되고 나면 자동으로 발생
        
        this.timerId = setInterval (// 계속 호출 , Timeout : 일정시간후에 한번만 호출
            // setInterval(함수, 지연시간)
             () => this.showSigan(), 1000
        );
    }

    // 언마운트 ( 컴포넌트가 화면에서 사라지기 바로 직전에 자동 호출 )
    // 주로 마무리 작업에서 사용 
    componentWillUnmount() {
        // 타이머 해제 작업 
        clearInterval(this.timerId);
    }

    showSigan() { // 시간 출력용 
        this.setState({ // state 값을 업데이트하기위해 (1초마다 불러줘서 업데이트)
            date:new Date()
        });
    }

    render() {
        return(
            <div>
            <h1>반가워 ~~~</h1>
            <h2>지금은(clock2) {new Date().toLocaleTimeString()}</h2>
            <h2>현재 시간은(clock2) {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Clock2;