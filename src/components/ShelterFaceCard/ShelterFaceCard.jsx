import React from "react";
import style from "../ShelterFaceCard/shelterFaceCard.module.css";
import Carusel from "./Carusel/Carusel";

const ShelterFaceCard = () => {
  return (
    <div className={style.shelterPosition}>
      <div className={style.shelterContent}>
        <div className={style.shelterLeftContent}>
          <div className={style.shelterTitle}>Название</div>
          <div className={style.shelterDiscription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem animi
            repellendus deserunt, non quaerat, enim quod labore quam porro fuga
            dolorum placeat molestiae veniam praesentium, itaque ullam ratione
            dolores odit!
          </div>

          <div className={style.shelterCarousel}>
            <Carusel />
          </div>
        </div>
        <div className={style.shelterRightContent}>
          <div className={style.shelterRightImage}>
            <img
              src="https://n1s1.hsmedia.ru/a1/ec/ec/a1ececc48afd3c0c498fdbd47ba45dbe/728x542_1_f5b22481fc08917ff7584d523f52ed21@1000x745_0xac120003_3944844451633381523.jpeg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className={style.aaa}>      <button className={style.buttonShelter}>Помочь приюту</button>
</div>

    </div>
  );
};

export default ShelterFaceCard;
