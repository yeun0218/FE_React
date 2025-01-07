import React, {Component} from "react";

class Navdata extends Component {
    render() {
        return(
            <ul> {/*루트 엘리먼트*/}
                <li><a href="http://www.naver.com">네이버</a></li>
                <li><a href="http://www.daum.net">다음</a></li>
                <li><a href="../abc.html">abc 문서 </a></li>
                <strong>{this.props.msg}</strong> {/*부모가 전달해준 값 받아*/}
                <i>{this.props.msg2}</i>{/*readonly개념 참조만 가능*/}
            </ul>
        );
    }
}

export default Navdata; // 별도의 부품 생성 어디서든 가져다 쓸 수 있어
