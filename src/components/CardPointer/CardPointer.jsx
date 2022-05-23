import React from "react";
import style from "../CardPointer/cardPointer.module.css";

//!! КАК ЗАБРАТЬ ПИТОМЦА ДОМОЙ?
const CardPointer = () => {
  const cardPointer = [
    {
      icon: <ion-icon name="paw-outline"></ion-icon>,
      title: "Выбери питомца",
      discription:
        "Найдите себе питомца в разделе 'Найти питомца' в главном меню",
    },
    {
      icon: <ion-icon name="document-text-outline"></ion-icon>,
      title: "Оформите заявку",
      discription:
        "Нажав на кнопку 'Взять питомца' в анкете понравившегося вам питомца",
    },
    {
      icon: <ion-icon name="call-outline"></ion-icon>,
      title: "Свяжитесь с куратором",
      discription:
        "Номер приюта будет отправлен вам на email после оформления заявки",
    },
    {
      icon: <ion-icon name="golf-outline"></ion-icon>,
      title: "Собеседование",
      discription:
        "Пройдите собеседование с куратором и познакомьтесь с питомцом лично",
    },
  ];
  return (
    <div className={style.contentMainCardPointer}>
      <div className={style.titleMainCardPointer}>Как забрать питомца домой?</div>
      <div className={style.cardPointerRender}>
        {cardPointer.map((item, index) => {
          return (
            <div className={style.pointerCard} key={index}>
              <div className={style.circleCardPointer}></div>
              <div className={style.iconCardPointer}>{item.icon}</div>
              <div className={style.titleCardPointer}>{item.title}</div>
              <div className={style.discriptionCardPointer}>
                {item.discription}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardPointer;
