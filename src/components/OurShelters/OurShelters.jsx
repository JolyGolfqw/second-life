import React from "react";
import style from "./ourShelters.module.css";

const OurShelters = () => {
  const ourShelters = [
    {
      image: "https://say-hi.me/wp-content/uploads/2018/04/battersea-2.gif",
      name: "Название приюта",
    },
    {
      image: "https://say-hi.me/wp-content/uploads/2018/04/battersea-2.gif",
      name: "Название приюта",
    },
    {
      image: "https://say-hi.me/wp-content/uploads/2018/04/battersea-2.gif",
      name: "Название приюта",
    },
    {
      image: "https://say-hi.me/wp-content/uploads/2018/04/battersea-2.gif",
      name: "Название приюта",
    },
    {
      image: "https://say-hi.me/wp-content/uploads/2018/04/battersea-2.gif",
      name: "Название приюта",
    },
    {
      image: "https://say-hi.me/wp-content/uploads/2018/04/battersea-2.gif",
      name: "Название приюта",
    },
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
