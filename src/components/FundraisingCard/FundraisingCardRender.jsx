import React from "react";
import style from "./fundraising.module.css";

const FundraisingCardRender = ({ image, title, amount, description }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperImageContainer}>
        <div className={style.imageWrapper}>
          <img src={`http://localhost:4000/${image}`} alt="photo" />
        </div>
      </div>

      <div className={style.infoWrapper}>
        <div className={style.title}>
          <h4>{title}</h4>
          <h6>
            Сумма сбора: <span>{amount}</span>
          </h6>
        </div>
        <p>{description}</p>
        <div className={style.shelter}>
          <div className={style.shelterAvatar}>
            <img
              src="https://vos-mo.ru/upload/iblock/220/Priyuty.jpg"
              alt="shelterAvatar"
            />
          </div>
          <div className={style.shelterInfo}>
            <p>
              Получатель: <span id={style.shelter}>Приют 1</span>
            </p>
            <p>
              Размещено <span>16.05.2022</span>
            </p>
          </div>
        </div>
        <div className={style.left}>
          <button>Помочь</button>
        </div>
      </div>
    </div>
  );
};

export default FundraisingCardRender;
