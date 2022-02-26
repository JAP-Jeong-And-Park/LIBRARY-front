import React from "react";
import ScrollButtonComponent from "./scrollButtonComponent";
import { useState, useEffect } from "react";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { onClickState, scrollChangeState, focusChangeState } from "../../state";

// import {signUpState} from "../../state"

const ScrollButton = () => {
  // submit 됐을 때 clickState를 바꿔줘서
  // input컴포넌트에서는 useEffect로 clickState가 바뀔 때 마다
  // 유효성 검사와 서버통신이 이루어 진다
  const [clickState, setClickState] = useRecoilState(onClickState);
  const onClick = () => {
    setClickState(clickState + 1);
  };

  // 제출 관련
  const [submit, setSubmit] = useState(false);

  //스크롤 관련

  const [showUpButton, setShowUpButton] = useState(true);
  const [showDownButton, setShowDownButton] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);

  // 포커스 체인지 1 = 첫번째 2 = 두번째 3 = 세번째
  const setFocusChange = useSetRecoilState(focusChangeState);

  // 처음 한 번 실행
  useEffect(() => {
    handleFollow();
  });

  const handleFollow = () => {
    setScrollPosition(window.scrollY);
    if (scrollPosition < 100) {
      // 5이하일 땐 이전이 안보이게
      setShowUpButton(false);
      setSubmit(false);
      
    } else if (scrollPosition > 1820) {
      // 1820이상일 땐 다음이 안보이게
      setShowUpButton(true);
      setSubmit(true);
      
    } else {
      // 그 사이일 땐 모두 보이게

      setShowUpButton(true);
      setShowDownButton(true);
      setSubmit(false);
     
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  // 스크롤 이동
  const scrollUp = () => {
    if (scrollPosition < 1000) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 960,
        behavior: "smooth",
      });
    }
  };
  const scrollDown = () => {
    if (scrollPosition < 900) {
      window.scrollTo({
        top: 960,
        behavior: "smooth",
      });
    } else if (scrollPosition > 1820) {
      onClick(); // 제출
    } else {
      window.scrollTo({
        top: 1920,
        behavior: "smooth",
      });
    }
  };

  const scrollChange = useRecoilValue(scrollChangeState);
  // input컴포넌트에서 enter누르면 스크롤 다운
  useEffect(() => {
    console.log(scrollChange);
    if (scrollChange) {
      scrollDown();
    }
  }, [scrollChange]);

  return (
    <>
      <ScrollButtonComponent
        showUpButton={showUpButton}
        showDownButton={showDownButton}
        submit={submit}
        scrollUp={scrollUp}
        scrollDown={scrollDown}
        onClick={onClick}
      />
    </>
  );
};

export default ScrollButton;
