import React from "react";
import style from "../CatalogPets/catalogPets.module.css";
import icon1 from "../../assets/dog.png";
import icon2 from "../../assets/bcat.png";
import icon3 from "../../assets/hamster.png";
import icon4 from "../../assets/parrot.png";
import icon5 from "../../assets/rabbit.png";
import icon6 from "../../assets/tortoise.png";

const CatalogPets = () => {
  const iconsCategory = [icon1, icon2, icon3, icon4, icon5, icon6];
  return (
    <div className={style.catalogPetsPosition}>
      <div className={style.catalogPetsContent}>
        <div className={style.catalogPetsTitle}>
          Эти питомцы ждут, когда
          <br /> вы приедете в наши приюты
        </div>
        <div className={style.catalogPetsIcons}>
          {iconsCategory.map((item, index) => {
            return (
              <button key={index}>
                <img src={item} alt="icon" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogPets;
