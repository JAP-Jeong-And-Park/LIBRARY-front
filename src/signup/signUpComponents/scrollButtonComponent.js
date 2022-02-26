import React from "react";

const ScrollButtonComponent = (
  {showUpButton,
  showDownButton,
  submit,
  scrollUp,
  scrollDown,
  onClick}) => {
  return (
    <div className="scrollerContainer">
        { showUpButton ? 
        <button className="scrollUpButton" onClick={scrollUp}>
          이전
        </button> : 
        null
        }
        { showDownButton ? 
         <button className="scrollDownButton" onClick={scrollDown}>{submit ?"제출":"다음"}</button> 
        : null
        }
      </div>
  );
};

export default ScrollButtonComponent;
