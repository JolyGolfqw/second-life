import React from "react";
import style from "./cardPetModel.module.css";

//!! НИГДЕ НЕ ИСПОЛЬЗУЕТСЯ
const CardPetModel = () => {
  const card = [
    {
      name: "Локи",
      gender: "Мужской",
      age: 1,
      image: `https://astrafarm.com/images/encyclopedia/ittenVes170221.jpg`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos eveniet amet ipsum dolor sit amet consectetur adipisicing elit quos eveniet amet.",
      type: "Кошка",
      time: "1 день",
      prise: "400 рублей",
      number: 89298896354,
      address: "г.Грозный, ул.Трошева 7",
    },
  ];

  return (
    <div className={style.cardPetsRender}>
      {card.map((item, index) => {
        return (
          <div className={style.card} key={index}>
            <div className={style.bodyPetsCard}>
              <div className={style.imgPetsCard}>
                <img src={item.image} alt="pet"></img>
              </div>
              <div className={style.informContent}>
                <div className={style.cardPetModelFlex}>
                  <div className={style.cardModelnName}>
                    <span> {item.name}</span>
                    <div className={style.iconPets}>

                      <div className={style.iconTwo}>
                      <ion-icon name="bookmark-outline"></ion-icon>
                      </div>
                    </div>
                  </div>

                  <div className={style.cardModelKey}>{item.description}</div>
                  <hr />
                  <div className={style.cardModelKey}>
                    <span>{`Пол:`}</span>
                    <span> {item.gender}</span>
                  </div>
                  <div className={style.cardModelKey}>
                    <span>{`Возраст:`}</span>
                    <span>{`${item.age} год`}</span>
                  </div>
                  <div className={style.cardModelKey}>
                    <span>{`Период присмотра:`}</span>
                    <span> {item.time}</span>
                  </div>
                  <div className={style.cardModelKey}>
                    <span>{`Цена:`}</span>
                    <span> {item.prise}</span>
                  </div>
                  <div className={style.cardModelKey}>
                    <span>{`Телефон:`}</span>
                    <span> {item.number}</span>
                  </div>
                  <div className={style.cardModelKey}>
                    <span>{`Адрес:`}</span>
                    <span> {item.address}</span>
                  </div>

                  <div className={style.iconThree}>
                    <ion-icon name="paw-outline"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardPetModel;
