import React, { useEffect } from "react";
import { useState } from "react";
import SignUpInputComponent from "./signUpInputComponent";
import axios from 'axios'

import { focusChangeState, onClickState, scrollChangeState } from "../../state";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const SignUpInput = () => {
  // input의 변수
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { email, name, password } = form;

  // input들의 값 변경
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  //   let showPassword = false;
  const [showPassword, setShowPassword] = useState(false);

  const changeShow = () => {
    setShowPassword(!showPassword);
  };

  // 유효성검사|서버통신 이벤트
  const [clickState, setClickState] = useRecoilState(onClickState);

  // 엔터를 체크
  const checkEnter = (e) => {
    if (e.key == "Enter") {
      setClickState(clickState + 1);
    }
  };

  useEffect(() => {
    // input값들 유효성 검사와 서버통신
    if (clickState) {
      if (checkValues()) {
        // 서버통신
        const url = "url"

        // try {
        //   axios.post(`${url}`,{
        //     headers : {
        //       email : email,
        //       name : name,
        //       password : password,
        //     }
        //   })
        // } catch {
        //   // 오류 발생시
        // }

        axios.post(`${url}/signup`,{
          email:email,
          name: name,
          password: password,
        }).then(response => {
          console.log("response",JSON.stringify(response,null,2))
        }).catch(error => {
          console.log('failed',error)
        })

      }
    }
  }, [clickState]);

  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(false);

  // 유효성 검사
  const checkValues = () => {
    // 한글, 영어, 숫자, 특수문자 ._ 가능한 5 ~ 30
    const checkName = /^[가-힣a-zA-Z0-9\s_.]{2,30}$/;
    const checkEmail = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    // 최소 8자리, 숫자, 문자, 특수문자 최소 1개
    const checkPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,25}$/;

    // 리턴할 변수(1=서버통신,0=통신하지 않음)
    let returnValue = 1;

    // 값 확인
    console.log(form.name);
    console.log(form.email);
    console.log(form.password);

    if (!checkPassword.test(form.password)) {
      console.log("비밀번호 형식이 틀림");
      setPasswordErrorMessage(true);
      focusPassword()
      returnValue = 0;
    } else {
      setPasswordErrorMessage(false);
      console.log("비밀번호 형식이 맞음");
    }

    if (!checkEmail.test(form.email)) {
      console.log("이메일 형식이 틀림");
      setEmailErrorMessage(true);
      focusEmail();
      returnValue = 0;
    } else {
      setEmailErrorMessage(false);
      console.log("이메일 형식이 맞음");
    }

    if (!checkName.test(form.name)) {
      console.log("이름 형식이 틀림");
      setNameErrorMessage(true);
      focusName();
      returnValue = 0;
    } else {
      setNameErrorMessage(false);
      console.log("이름 형식이 맞음");
    }

    return returnValue;
  };

  // ref선언
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const focusName = () => {
    nameRef.current.focus();
  };
  const focusEmail = () => {
    emailRef.current.focus();
  };
  const focusPassword = () => {
    passwordRef.current.focus();
  }

  const focusChange = useRecoilValue(focusChangeState)
  useEffect(() => {
    if (focusChange) {
      if (focusChange === 1){focusName()}
      else if (focusChange === 2){focusEmail()}
      else if (focusChange ===3){focusPassword()}
    }
  },[focusChange])

  const [scrollChange, setScrollChange] = useRecoilState(scrollChangeState);
  // enter = 스크롤 바꾸기
  const scrollChangeFunction = (e) => {
    if (e.key == "Enter") {
      setScrollChange(scrollChange + 1);
    }
  };

  return (
    <>
      <SignUpInputComponent
        email={email}
        name={name}
        password={password}
        showPassword={showPassword}
        onChange={onChange}
        changeShow={changeShow}
        nameRef={nameRef}
        emailRef={emailRef}
        passwordRef={passwordRef}
        checkEnter={checkEnter}
        nameErrorMessage={nameErrorMessage}
        emailErrorMessage={emailErrorMessage}
        passwordErrorMessage={passwordErrorMessage}
        scrollChange={scrollChangeFunction}
      />
    </>
  );
};

export default SignUpInput;
