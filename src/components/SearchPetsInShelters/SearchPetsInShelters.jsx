import React, { useState } from "react";
import style from "../SearchPetsInShelters/searchPetsInShelters.module.css";
import PetsCard from "../PetsCard/PetsCard";

const SearchPetsInShelters = () => {
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

  const [value, setValue] = useState("");
  const searchFiltered = pets.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  });

  return (
    <div className={style.searchPetsPosition}>
      <div className={style.searchPetsHeader}>
        <div className={style.searchPetsInput}>
          <input
            type="text"
            placeholder="Поиск по кличке..."
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className={style.searchPetsBody}>
        <PetsCard searchFiltered={searchFiltered}/>
      </div>
    </div>
  );
};

export default SearchPetsInShelters;
