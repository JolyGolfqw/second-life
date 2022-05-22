import React from "react";
import style from "./takeCarePetCard.module.css";

const TakeCarePetCard = ({element}) => {

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperImageContainer}>
        <div className={style.imageWrapper}>
          <img
            src={`http://localhost:4000/${element.image}`}
            alt="photo"
          />
        </div>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.title}>
          <h4>{element.name}</h4>
          <h6>
            Цена: <span>{element.price}</span>
          </h6>
        </div>
        <h6>
          Возраст: <span>{element.age}</span>
        </h6>
        <h6>
          Пол: <span>Мужской</span>
        </h6>
        <p className={style.description}>
          {element.description}
        </p>
        <div className={style.ownerWrapper}>
          <div className={style.ownerAvatar}>
            <img
              src="https://vos-mo.ru/upload/iblock/220/Priyuty.jpg"
              alt="shelterAvatar"
            />
          </div>
          <div className={style.ownerInfo}>
            <p>
              Хозяин: <span id={style.owner}>Надежда Николаевна</span>
            </p>
          </div>
        </div>
        <div className={style.left}>
          <div className={style.date}>
            <p>
              Дата передержки: <span>{element.period}</span>
            </p>
          </div>
        </div>
        <div className={style.placed}>
          <p>
            Размещено <span>{element.date && element.date.substr(0, 10).split('-').reverse().join('.')}</span>
          </p>
          <button>Откликнуться</button>
        </div>
      </div>
    </div>
  );
};

export default TakeCarePetCard;
