import React from "react";
import style from "../CatalogPets/catalogPets.module.css";
import icon1 from "../../assets/dog.png";
import icon2 from "../../assets/bcat.png";
import icon3 from "../../assets/hamster.png";
import icon4 from "../../assets/parrot.png";
import icon5 from "../../assets/rabbit.png";
import icon6 from "../../assets/tortoise.png";

const CatalogPets = () => {
  return (
    <div className={style.catalogPetsPosition}>
      <div className={style.catalogPetsContent}>
        <div className={style.catalogPetsTitle}>
          Эти питомцы ждут, когда
          <br /> вы приедете в наши приюты
        </div>
        <div className={style.catalogPetsIcons}>
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
          <img src={icon3} alt="icon" />
          <img src={icon4} alt="icon" />
          <img src={icon5} alt="icon" />
          <img src={icon6} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default CatalogPets;
