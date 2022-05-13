import React from "react";
import style from "../MapCard/mapCard.module.css";
import YandMap from "./Map";
import Icons from "./Icons";
import ModalWindov from "./ModalWindov";

const MapCard = () => {
  return (
    <div className={style.mapCardPosition}>
      <div className={style.mapCardBackground}>
        <div className={style.titleMapCard}>Карта добрых мест</div>
        <div className={style.mapCardFlex}>
          {/* MAP ↓ */}
          <div className={style.mapCardMap}>
            <YandMap />
          </div>
          <div className={style.mapCardContent}>
            {/* ICONS ↓ */}
            <Icons />
            {/* CARD ↓ */}
            <div className={style.mapCardContainer}>
              <div className={style.titleNameMapCard}>Посетить приют</div>
              <div className={style.discriptionButtonMapCard}>
                Чтобы посетить приют необходимо заранее позвонить нам по
                телефону, изъявить свое желание узнать наш адрес и часы работы{" "}
              </div>
              {/* BUTTON  AND MODAL WINDOW ↓ */}
              <ModalWindov />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
