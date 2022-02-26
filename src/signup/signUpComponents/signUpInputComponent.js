import React from "react";

const SignUpInputComponent = ({
    email,
    name,
    password,
    showPassword,
    onChange,
    changeShow,
    nameRef,
    emailRef,
    passwordRef,
    checkEnter,
    nameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    scrollChange
}) => {



  return (
    <>
      <div className="wrapper">
        <div className="columLine">
          <div className="circle">1</div>
        </div>
        <div className="innerWrapper">
          <h1>당신의 도서관 이름을 입력하세요</h1>
          <div className="signUpInputContainer">
            <div className="left"></div>
            <input
              className="signUpInput"
              type="text"
              value={name || ""}
              onChange={onChange}
              onKeyPress={scrollChange}
              name="name"
              ref = {nameRef}
              spellCheck="false"
              required
            />
          </div>
          { nameErrorMessage ? 
            <div className="inputError">한글, 영어, 숫자, 특수문자(._) 5~30자</div> : null}
        </div>
      </div>

      <div className="wrapper">
        <div className="columLine">
          <div className="circle">2</div>
        </div>
        <div className="innerWrapper">
          <h1>이메일을 입력하세요</h1>
          <div className="signUpInputContainer">
            <div className="left"></div>
            <input
              className="signUpInput"
              type="email"
              value={email || ""}
              onChange={onChange}
              onKeyPress={scrollChange}
              name="email"
              ref = {emailRef}
              spellCheck="false"
              required
            />
          </div>
          { emailErrorMessage ? <div className="inputError">이메일을 입력해주세요</div> : null}
        </div>
      </div>

      <div className="wrapper">
        <div className="columLine">
          <div className="circle">3</div>
        </div>
        <div className="innerWrapper">
          <h1>비밀번호를 설정해주세요</h1>
          <div className="signUpInputContainer">
            <div className="left"></div>
            {showPassword ? (
              <input
                className="signUpInput"
                type="text"
                value={password || ""}
                onChange={onChange}
                onKeyPress={checkEnter}
                name="password"
                ref = {passwordRef}
                spellCheck="false"
                required
              />
            ) : (
              <input
                className="signUpInput"
                type="password"
                value={password || ""}
                onChange={onChange}
                onKeyPress={checkEnter}
                name="password"
                ref = {passwordRef}
                required
              />
            )}
            <div className="showPasswordContainer">
              {showPassword ? (
                <div className="showPassword" onClick={changeShow} />
              ) : (
                <div className="noShowPassword" onClick={changeShow} />
              )}
            </div>
          </div>
          {passwordErrorMessage ? <div className="inputError">숫자, 문자, 특수문자(최소 1개) 8~25자</div> : null}
        </div>
      </div>
    </>
  );
};

export default SignUpInputComponent;
