import React from "react";
import style from "../ShelterFaceCard/shelterFaceCard.module.css";
import Carusel from "./Carusel/Carusel";

const ShelterFaceCard = () => {
  return (
    <div className={style.shelterPosition}>
      <div className={style.shelterContent}>
        <div className={style.shelterLeftContent}>
          <div className={style.shelterTitle}>Надежда на жизнь</div>
          <div className={style.shelterDiscription}>
            <p>
              Первый приют для бездомных животных "Надежда на жизнь" открылся на
              окраине Грозного в 2016 году. Здание включает в себя 32 вольера на
              зимний и летний сезон, три комнаты для здоровых кошек,
              инфекционную палату, а также помещение для ухода за животными и
              приготовления питания.
            </p>
          </div>

          <div className={style.shelterCarousel}>
            <Carusel />
          </div>
        </div>
        <div className={style.shelterRightContent}>
          <div className={style.shelterRightImage}>
            <img
              src="https://www.grozny-inform.ru/LoadedImages/2020/01/02/IMG_9737_w900_h600.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className={style.helpSheltersBtn}>
        <button className={style.buttonShelter}>Помочь приюту</button>
      </div>
    </div>
  );
};

export default ShelterFaceCard;
