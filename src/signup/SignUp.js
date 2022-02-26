import React, { useEffect, useState } from "react";
import "./SignUp.css";
import ScrollButton from "./signUpComponents/scrollButton"
import SignUpInput from "./signUpComponents/signUpInput";

const SignUp = () => {
  return (
    // 첫 번째 div뒤로는 감소가 되지 않게
    <div className="baseContainer">

      <ScrollButton/>

      <SignUpInput/>

    </div>
  );
};

export default SignUp;  
