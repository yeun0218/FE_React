import React,  {Component} from "react"; // React는 안써줘도 오류는 안나지만 써주는 게 좋아

class Component1 extends Component{
    render(){
        const clickHandler = () => {
            console.log("자체적으로 선언된 함수 실행");
        };

        const keyupHandler = (event) => {
            console.log("입력한 값은 : ", event.target.value);
        };

        return(
            <div>
                <h2>{this.props.title}</h2>
                {this.props.subtitle}
                <br/>
                버튼으로 이벤트 발생 : &nbsp;
                <button onClick={function() {
                    this.props.changeData();
                }.bind(this)}>이벤트 발생</button>
                {/*바인딩해줘야해 
                부모가 보내준 객체 실행 ( 함수의 주소 가지고 있어 )*/}
                <br/>
                <button onClick={clickHandler}>자체 함수 호출</button>
                {/*클릭하면 실행되기 떄문에 () 안써줘도 돼 */}
                <br/><br/>
                데이터 입력 : <input type="text" onKeyUp={keyupHandler} />
            </div>
        )
    }
}
export default Component1;