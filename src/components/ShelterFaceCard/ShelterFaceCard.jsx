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
              src="https://cs13.pikabu.ru/post_img/2019/11/21/8/og_og_15743435882838802.jpg"
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
