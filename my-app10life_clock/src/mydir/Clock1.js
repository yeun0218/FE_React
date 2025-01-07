
import React, { Component} from 'react';

class Clock1 extends Component {
    render() {
        return (
            <div>
                <h1>안녕~~</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2>
                {/*정적인 시간 (고정된) 
                처음 호출된 시간으로 고정*/}
            </div>
        )
    }
}
export default Clock1;