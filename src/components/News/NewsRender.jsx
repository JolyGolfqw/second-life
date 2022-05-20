import React from "react";
import ModalNews from "./ModalNews";
import style from "./news.module.css";
import { useState } from "react";

const NewsRender = ({ title, description, image, date }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={style.newsRenderCard}>
      <div className={style.newsRenderCardImage}>
        <img src={`http://localhost:4000/${image}`}></img>
      </div>
      <div className={style.newsRenderCardTitleAndDescription}>
        <div className={style.newsRenderCardTitle}>{title} </div>
        <div className={style.newsRenderCardDescription}>
          {description.substr(0, 340) + "..."}
        </div>
        <div className={style.newsRenderCardDateAndButton}>
          <div>{date}</div>
          <button variant="primary" onClick={() => setShow(true)}>
            Подробнее...
          </button>
        </div>

        <ModalNews
          show={show}
          setShow={setShow}
          title={title}
          description={description}
          image={image}
        />
      </div>
    </div>
  );
};

export default NewsRender;
