import style from "../PetsCard/petsCard.module.css";
import React, { useState } from "react";
import PetsCardModal from "./PetsCardModal";

const PetsCardRender = ({ age, name, description, gender, img }) => {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <button className={style.card} onClick={() => setSmShow(true)}>
        <div className={style.headPetsCard}>
          <div className={style.agePets}>
            <span>{age}</span>
          </div>
          <div className={style.iconPets}>
            <div className={style.iconOne}>
              <ion-icon name="checkmark-outline"></ion-icon>
            </div>
            <div className={style.iconTwo}>
              <ion-icon name="file-tray-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className={style.bodyPetsCard}>
          <div className={style.imgPetsCard}>
            <img src={`http://localhost:4000/${img}`}></img>{" "}
          </div>
          <div className={style.titlePetsCard}>{name}</div>
          <div className={style.descriptionPetsCard}>{description}</div>
        </div>
        <div className={style.footerPetsCard}></div>
      </button>

      <PetsCardModal
        smShow={smShow}
        setSmShow={setSmShow}
        name={name}
        description={description}
        age={age}
        gender={gender}
      />
    </>
  );
};

export default PetsCardRender;
