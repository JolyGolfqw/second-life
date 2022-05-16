import React from "react";
import style from "../OurPets/ourPets.module.css";
import icon1 from "../../assets/dog.png";
import icon2 from "../../assets/bcat.png";
import icon3 from "../../assets/hamster.png";
import icon4 from "../../assets/parrot.png";
import icon5 from "../../assets/rabbit.png";
import icon6 from "../../assets/tortoise.png";

const OurPets = () => {
  const iconsCategory = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div className={style.ourPetsPosition}>
      <div className={style.ourPetsTitle}>Наши питомцы</div>
      <div className={style.ourPetsIcons}>
          {iconsCategory.map((item, index) => {
            return (
              <button key={index}>
                <img src={item} alt="icon" />
              </button>
            );
          })}
        </div>
    </div>
  );
};

export default OurPets;
