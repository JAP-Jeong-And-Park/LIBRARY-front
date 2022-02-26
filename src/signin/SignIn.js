import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./SignIn.css";

const SignIn = () => {
  const [id,setId] = useState("")
  const [password,setPassword] = useState("")
  const onChange = (e) => {
    const {target : {name,value}} = e;
    if (name === "id"){
        setId(value)
    } else if (name === "password"){
        setPassword(value)
    }
}

const checkEnter = (e) => {
    if (e.key == "Enter") {
        onSubmit()
    }
}

const onSubmit = () => {

}

  return (
    <>
      <div className="signInBox">

        <div className="signInLeft">
          <div className="signInInputContainer">
            <div className="left" />
            <input
              name = "id"
              className="signInInput"
              placeholder="이메일 또는 도서관이름"
              type="text"
              spellCheck="false"
              value={id}
              onChange={onChange}
              onKeyPress={checkEnter}
            />
          </div>
          <div className="signInInputContainer">
            <div className="left" />
            <input 
            name = "password"
            className="signInInput" 
            placeholder="비밀번호" 
            type="password"
            value={password}
            onChange={onChange}
            />
          </div>
          <button className="singInButton">제출</button>
        </div>

        {/* 회원가입부분도 넣어야함 */}
        <div className="signInright">
            <div className="signInOAuthes">
                <div className="signInOAuth">깃허브로 로그인</div>
                <div className="signInOAuth">카카오톡으로 로그인</div>
                <div className="signInOAuth">카카오톡으로 로그인</div>
            </div>

        </div>

        <span className="siginInToSignUp">
            아직 내 독서기록장이 없다면?&emsp;
        <Link to='/signup' className="goToSignUp">회원가입하기</Link>
        </span>
        

      </div>
    </>
  );
};

export default SignIn;
