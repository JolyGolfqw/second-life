import React from "react";
import style from "./donation.module.css";

const RightSidebarDonation = () => {
  return (
    <div className={style.rightDonatContent}>
      <div className={style.rightCheckPoint}>
        <div className={style.titleRight}>Стать волонтером</div>
        <div className={style.subtitleRight}>
          Для тех, кто любит животных и готов
          <br /> помочь своей энергией и временем
        </div>
      </div>
      <div className={style.rightCheckPoint}>
        <div className={style.titleRight}>Вещи и амуниция</div>
        <div className={style.subtitleRight}>
          Принимаем в подарок
          <br /> хозяйственные вещи и зоотовары
        </div>
      </div>
    </div>
  );
};

export default RightSidebarDonation;
