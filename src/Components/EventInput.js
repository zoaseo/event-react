import React, { useState, useRef } from 'react';

const EventInput = () => {
    const input = useRef();
    const [form, setForm] = useState({
        username: '',
        message: '',
    })
    const { username, message } = form;
    const onChange = (e) => {
        // const nextForm = {
        //     ...form,  //기존의 form 내용을 여기에 복사
        //     [e.target.name]: e.target.value,  //원하는 값은 덮어 씌우기
        // }
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }
    //버튼 클릭시 함수 발생
    const onClick = () => {
        console.log(`메세지는 ${message}이고 유저네임은 ${username}입니다.`);
        setForm({
            username: '',
            message: '',
        });
        input.current.focus();
    }
    const onKeyPress = (e) => {
        if(e.key === "Enter"){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" ref={input} name='username' value={username} onChange={onChange} onKeyPress={onKeyPress}/>
            <input type="text" ref={input} name='message' value={message} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventInput;