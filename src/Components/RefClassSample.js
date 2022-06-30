import React, { Component } from 'react';
import './RefSample.css';
class RefClassSample extends Component {
    // ref 생성
    input = React.createRef();
    state = {
        password: '',
        clicked: false,
        validated: false,
    }
    handleChange = () => {
        this.setState({
            password: this.input.current.value,
        })
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '000',
        })
        // DOM 요소 접근은 ref.current
        console.log(this.input)
        this.input.current.focus();
    }
    render() {
        return (
            <div>
                {/* 선택하려는 DOM 요소의 ref 속성으로 지정해줌 */}
                <input
                type = "password"
                ref={this.input}
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>확인</button>    
            </div>
        );
    }
}

export default RefClassSample;