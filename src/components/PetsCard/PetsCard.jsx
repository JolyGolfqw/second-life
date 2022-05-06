import React from "react";
import style from "../PetsCard/petsCard.module.css";

const PetsCard = () => {
  const pets = [
    {
      image:
        "https://img.freepik.com/free-photo/adorable-beagle-puppy-solo-portrait_53876-64815.jpg?t=st=1651840813~exp=1651841413~hmac=19d5b4071f7688590d04aa453af93540cbf04f3131c873165a8df0e1e670add1&w=740",
      name: "Локи",
      age: 2,
      gender: "Мальчик",
    },
    {
      image:
      "https://img.freepik.com/free-photo/cute-beagle-puppy-in-uncle-sam-hat-and-bow-tie_53876-85008.jpg?w=740",      
      name: "Tор",
      age: 2,
      gender: "Мальчик",
    },
    {
      image:
        "https://img.freepik.com/free-photo/adorable-beagle-puppy-solo-portrait_53876-64814.jpg?w=740&t=st=1651846440~exp=1651847040~hmac=fda28d900c47b355e8e06f8165099f99fefabbc2f847593f242118c708629844",
      name: "Один",
      age: 2,
      gender: "Мальчик",
    },
    {
        image:
          "https://img.freepik.com/free-photo/american-beagle-puppy_53876-84863.jpg?w=740",
        name: "Адгар",
        age: 2,
        gender: "Мальчик",
      },
      
  ];
  return (
    <div className={style.cardPetsRender}>
      {pets.map((item, index) => {
        return (
          <div className={style.card} key={index}>
            <div></div>
            <img src={item.image} className={style.avatar} alt="avatar"></img>
            <h2>
              {item.name}
              <br />
              <div className={style.inform}>
                <div className={style.gender}>{item.gender}</div>
                <div className={style.age}>{item.age}года</div>
              </div>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default PetsCard;
