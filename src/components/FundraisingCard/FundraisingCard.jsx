import React from "react";
import style from "./fundraising.module.css";

const FundraisingCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <img
          src="https://www.meme-arsenal.com/memes/4ab9b67a0fcbc211e26408af2d3fd811.jpg"
          alt="photo"
        />
      </div>
      <div className={style.infoWrapper}>
        <div className={style.title}>
          <h4>Тут будет название типа</h4>
          <h6>
            Сумма сбора: <span>500 ₽</span>
          </h6>
        </div>
        <p>
          Тут будет описание сбора Тут будет описание сбора Тут будет описание
          сбора Тут будет описание сбора Тут будет описание сбора Тут будет
          описание сбора Тут будет описание сбора Тут будет описание сбора Тут
          будет описание сбора{" "}
        </p>
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
					<p>Осталось 5 дней 17 часов 47 минут</p>
					<button>Помочь</button>
				</div>
      </div>
    </div>
  );
};

export default FundraisingCard;
