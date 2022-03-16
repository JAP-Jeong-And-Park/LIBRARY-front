import React, { useState } from "react";
import "./Main.css";
import Menu from "../menu/Menu";

const Main = () => {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title:
        "총, 균, 쇠",
      summary: "무기 병원균 금속은 인류의 문명을 어떻게 바꿨는가?",
      writer: "재레드 다이아몬드",
    },
    {
      id: 1,
      title: "데일 카네기 인간관계론",
      summary: "데일 카네기가 전하는 성공하는 인간관계의 비밀",
      writer: "데일 카네기",
    },
    {
      id: 2,
      title: "리팩터링 2판",
      summary: "병관아 모셔만 두지 말고 읽어보자",
      writer: "마틴 파울러",
    },
    {
      id: 3,
      title: "Docker",
      summary: "도커도 매력적이죠!",
      writer: "Asa Shiho",
    },
    {
      id: 4,
      title: "Docker",
      summary: "도커도 매력적이죠!",
      writer: "Asa Shiho",
    },
    {
      id: 5,
      title: "Docker",
      summary: "도커도 매력적이죠!",
      writer: "Asa Shiho",
    },
    {
      id: 6,
      title: "Docker",
      summary: "도커도 매력적이죠!",
      writer: "Asa Shiho",
    },
    {
      id: 7,
      title: "Docker",
      summary: "도커도 매력적이죠!",
      writer: "Asa Shiho",
    },
    {
      id: 8,
      title: "Docker",
      summary: "도커도 매력적이죠!",
      writer: "Asa Shiho",
    },
  ]);




  return (
    <div className="baseContainer">
      <Menu/>
      <div className="mainWapper">
          {posts.map((data => <Post 
          data={data} 
          key={data.id} 
  
          />))}
      </div>
    </div>
  );
};

const Post = (props) => {
  
  return (
    <div className="postMargin" >
      <div className="imageArea"></div>
      {props.show ? <div className="showInfo">정보 보여주기</div> : null}
      <div className="contentArea">
        <div className="postTitle">{props.data.title}</div>
      </div>
    </div>
  );
};

export default Main;
