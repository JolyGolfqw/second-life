import React, { useEffect } from "react";
import style from "../ShelterCard/shelterCard.module.css";
import { Link } from "react-router-dom";


const ShelterCard = () => {

  return (
    <div className={style.bigShelterCards}>
      {shelter.map((item, index) => {
        return (
          <div className={style.shelterCard} key={index}>
            <div className={style.shelterCardContent}>
              <div className={style.shelterImage}>
                <img src={item.image} alt="img"></img>
              </div>
              <div className={style.shelterInfo}>
                <div className={style.shelterName}>{item.name}</div>
                <div className={style.shelterDiscription}>
                  {item.discription.substr(0, 160) + "..."}
                </div>
                {/* Button ↓ */}
                <Link to={"/"} className={style.linkShelterCard}>
                  <button className={style.cta}>
                    <span>Подробнее</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShelterCard;
