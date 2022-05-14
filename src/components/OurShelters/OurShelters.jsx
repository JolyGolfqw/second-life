import React from "react";
import style from "./ourShelters.module.css";

const OurShelters = () => {
  const ourShelters = [
    {
      image: "https://www.logozila.ru/images/logo_images/3338.jpg",
      name: "Название приюта",
    },
    {
      image: "https://cdn1.dizkon.ru/images/contests/2014/05/13/5371f239b8276.80.jpg",
      name: "Название приюта",
    },
    {
      image: "https://i.pinimg.com/originals/fe/e4/14/fee414c6318b42ca0deac4a005d8e870.jpg",
      name: "Название приюта",
    },
    {
      image: "https://static.tildacdn.com/tild3466-3962-4536-a262-646430636463/23192-NUDNU6.png",
      name: "Название приюта",
    }, {
      image: "https://i.pinimg.com/originals/5d/38/29/5d38299e8a2eea600462b154092e7891.png",
      name: "Название приюта",
    }, {
      image: "https://bywi.ru/wp-content/gallery/logotipy/gav_logo.jpg",
      name: "Название приюта",
    },

    // {
    //   image: "https://say-hi.me/wp-content/uploads/2018/04/battersea-2.gif",
    //   name: "Название приюта",
    // },
  ];
  return (
    <div className={style.ourSheltersPosition}>
      <div className={style.ourSheltersTitle}>Наши приюты</div>
      <div className={style.ourSheltersRender}>
        {ourShelters.map((item, index) => {
          return (
            <div className={style.ourSheltersCard} key={index}>
              <img src={item.image} alt="img"></img>
              <button className={style.ourSheltersButton}>
                <span>
                  <ion-icon name="paw-outline"></ion-icon>
                </span>
              </button>
              <div className={style.ourSheltersName}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurShelters;
