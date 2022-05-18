import React from "react";
import ModalNews from "./ModalNews";
import style from "./news.module.css";
import { useState } from "react";

const NewsRender = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={style.newsRenderCard}>
      <div className={style.newsRenderCardImage}>
        <img src={item.img}></img>
      </div>
      <div className={style.newsRenderCardTitleAndDescription}>
        <div className={style.newsRenderCardTitle}>{item.title} </div>
        <div className={style.newsRenderCardDescription}>
          {item.description.substr(0, 300) + "..."}
        </div>
        <button variant="primary" onClick={() => setShow(true)}>Подробнее...</button>
        <ModalNews show={show} setShow={setShow}/>
      </div>
    </div>
  );
};

export default NewsRender;
