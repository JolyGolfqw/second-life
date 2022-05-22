import React from "react";
import style from "../PetsCard/petsCard.module.css";
import { useParams } from "react-router-dom";

const PetsCard = ({ searchFiltered }) => {
  const { id } = useParams();

  //ФИЛЬТР ПО ТИПУ ЖИВОТНЫХ
  const filtereByType = searchFiltered.filter((item) => {
    if (!id) return true;
    return item.type === id;
  });

  //ФИЛЬТР ИЗ ПРИЮТА ИЛИ В ДОБРЫЕ РУКИ
  const isShelteredPets = filtereByType.filter((item) => {
    if (item.isShelter) {
      return true;
    }
  });
  return (
    <div>
      {console.log(isShelteredPets)}{" "}
      {!searchFiltered.length ||
      !filtereByType.length ||
      !isShelteredPets.length ? (
        <div className={style.sectorСlear}>
          <img
            src="https://acegif.com/wp-content/gif/hamster-wheel-46.gif"
            alt="gif"
          />
          <h2>Ничего не найдено...</h2>
        </div>
      ) : (
        <div className={style.cardPetsRender}>
          {isShelteredPets.map((item) => {
            return item.isShelter === true ? (
              <div className={style.card} key={item._id}>
                <div className={style.headPetsCard}>
                  <div className={style.agePets}>
                    <span>{item.age}</span>
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
                    <img
                      src={`http://localhost:4000/${item.img}`}
                      alt="pet"
                    ></img>
                  </div>
                  <div className={style.titlePetsCard}>{item.name}</div>
                  <div className={style.descriptionPetsCard}>
                    {item.description}
                  </div>
                </div>
                <div className={style.footerPetsCard}></div>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default PetsCard;
