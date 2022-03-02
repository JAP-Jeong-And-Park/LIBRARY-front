import React, { useState } from "react";
import axios from "axios";

import "./SignIn.css";
import SignInComponent from "./SignInComponent";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const checkEnter = (e) => {
    if (e.key == "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (checkValue()) {
      const url = "url";
      axios
        .post(`${url}/signin`, {
          id: id,
          password: password,
        })
        .then((reponse) => {
          console.log("response", JSON.stringify(reponse, null, 2));
        })
        .catch((error) => {
          console.log("failed", error);
        });
    }
  };

  // 형식에 맞지 않는 값은 애초에 보내지 않는다
  // 형식은 회원가입부분에서 가져온 것이다
  const checkValue = () => {
    const checkName = /^[가-힣a-zA-Z0-9\s_.]{2,30}$/;
    const checkEmail = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    const checkPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,25}$/;

    console.log(id);
    console.log(password);

    if (
      (checkName.test(id) || checkEmail.test(id)) &&
      checkPassword.test(password)
    ) {
      console.log(1);
      return 1;
    }
    console.log(0);
    return 0;
  };

  return (
    <>
      <SignInComponent
        id={id}
        onChange={onChange}
        checkEnter={checkEnter}
        password={password}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default SignIn;
