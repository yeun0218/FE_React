import {Component} from "react";

// 값을 안줬을 때 초기값 설정 
class MyName extends Component{
    /* 방법 1)
    static defaultProps = {
        name : "신기해"
    }
    */
    render() {
        return (
            <div>
                안녕 내 이름은 <b>{this.props.name}</b><br/>
                &nbsp; 사는 곳은 {this.props.addr}

            </div>
        );
    }
}
// 방법 2)
MyName.defaultProps = {
    name:"신기한"
}



export default MyName;