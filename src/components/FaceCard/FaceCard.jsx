import React from "react";
import style from "../FaceCard/faceCard.module.css";
import { Link } from "react-router-dom";

const FaceCard = () => {
  return (
    <div className={style.faceCardPosition}>
      <div className={style.faceCardContent}>
        <div className={style.imagesBackground}>
          <img
            src="../../assets/cat.png"
            alt="bgImg1"
            className={style.imageBackgroundOne}
          />
          <img
            src="../../assets/cat.png"
            alt="bgImg2"
            className={style.imageBackgroundTwo}
          />
        </div>
        <div className={style.faceCardTitle}>
          Найди своего
          <br /> идеального питомца
        </div>
        <div className={style.faceCardSubtitle}>
          Наш сайт домашних животных
          <br /> подарит тебе друга в несколько
          <br /> кликов. Действуй!
        </div>
        <Link to={"/"}>
          <button className={style.btn}>Посмотреть друзей</button>
        </Link>
      </div>
    </div>
  );
};

export default FaceCard;
