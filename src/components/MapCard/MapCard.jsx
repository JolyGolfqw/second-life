import React from "react";
import style from "../MapCard/mapCard.module.css";
import { Link } from "react-router-dom";
import YandMap from "./Map";

const MapCard = () => {
  return (
    <div className={style.mapCardPosition}>
      <div className={style.titleMapCard}>Карта добрых мест</div>
      <div className={style.mapCardBackground}>
        <div className={style.mapCardFlex}>
          {/* MAP ↓ */}
          <div className={style.mapCardMap}>
            <YandMap />
          </div>
          <div className={style.mapCardContent}>
            {/* ICONS ↓ */}
            <div className={style.iconsMapCardOne}>
              <ion-icon name="paw-outline"></ion-icon>
            </div>
            <div className={style.iconsMapCardTwo}>
              <ion-icon name="paw-outline"></ion-icon>
            </div>
            <div className={style.iconsMapCardThree}>
              <ion-icon name="paw-outline"></ion-icon>
            </div>
            <div className={style.iconsMapCardFour}>
              <ion-icon name="paw-outline"></ion-icon>
            </div>
            {/* CARD ↓ */}
            <div className={style.mapCardContainer}>
              <div className={style.titleNameMapCard}>Посетить приют</div>
              <div className={style.discriptionButtonMapCard}>
                Чтобы посетить приют необходимо заранее позвонить нам по
                телефону, изъявить свое желание узнать наш адрес и часы работы{" "}
              </div>
              {/* BUTTON ↓ */}
              <Link to={"/"} className={style.linkButtonMapCard}>
                <button>Написать или позвонить нам</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
