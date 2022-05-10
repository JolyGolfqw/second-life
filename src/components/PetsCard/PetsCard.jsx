import React from "react";
import style from "../PetsCard/petsCard.module.css";

const PetsCard = () => {
  const pets = [
    {
      image:
        "https://catherineasquithgallery.com/uploads/posts/2021-02/1614520209_88-p-kot-na-belom-fone-134.png",
      surname: "Шотландская кошка",
      name: "Локи",
      age: 5,
      gender: "Девочка",
      discription: "Прекрасная подруга на дождливые, холодные времена",
    },
    {
      image:
        "https://i.pinimg.com/originals/00/c3/72/00c372943bee8e024f183030d501109c.png",
      surname: "Шотландская кошка",
      name: "Конь",
      age: 1,
      gender: "Мальчик",
      discription: "Может проголосовать за ЛДПР",
    },
    {
      image:
        "https://www.meme-arsenal.com/memes/e77529bc5454bebb776dbefd127f68f5.jpg",
      surname: "Чеченский хомяк",
      name: "Собака",
      age: 2,
      gender: "Мальчик",
      discription: "Прекрасный брат, владыка молний",
    },
    
  ];
  return (
    <div className={style.cardPetsRender}>
      {pets.map((item, index) => {
        return (
          <div className={style.card} key={index}>
            <div className={style.headPetsCard}>
              <div className={style.agePets}>
                <span>4</span>месяцев
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
                <img src={item.image} alt="pet"></img>
              </div>
              <div className={style.titlePetsCard}>{item.name}</div>
              <div className={style.discriptionPetsCard}>
                {item.discription}
              </div>
            </div>
            <div className={style.footerPetsCard}>
              <div className={style.namePetsCard}>{item.gender}</div>
              <div className={style.iconThree}>
                <ion-icon name="paw-outline"></ion-icon>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PetsCard;
