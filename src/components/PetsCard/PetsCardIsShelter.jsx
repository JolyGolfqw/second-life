import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPets } from "../../redux/features/pets";
import style from "../PetsCard/petsCard.module.css";
import PetsCardIsShelterRender from "./PetsCardIsShelterRender";

//!! ЖИВОТНЫЕ В ДОБРЫЕ РУКИ
const PetsCardIsShelter = () => {
  const pets = useSelector((state) => state.pets.items);
  const [smShow, setSmShow] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadPets());
  }, [dispatch]);

  //!! ФИЛЬТР ПО ИМЕНИ ПИТОМЦА
  const searchFiltered =
    pets &&
    pets.filter((item) => {
      return item.name?.toLowerCase().includes(value.toLowerCase());
    });

  //!! ФИЛЬТР ПО ТИПУ ЖИВОТНЫХ
  const filtereByType = searchFiltered.filter((item) => {
    if (!id) return true;
    return item.type === id;
  });

  //!! ФИЛЬТР ИЗ ПРИЮТА ИЛИ В ДОБРЫЕ РУКИ
  const isShelteredPets = filtereByType.filter((item) => {
    if (!item.isShelter) {
      return true;
    }
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
      {/* //!! ПРОВЕРКА И ЛОАДЕР */}
      <div className={style.searchPetsBody}>
        <div>
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
            //!! КАРТОЧКА ПИТОМЦА
            <div className={style.cardPetsRender}>
              {isShelteredPets.map((item, index) => {
                return (
                  <PetsCardIsShelterRender
                    name={item.name}
                    description={item.description}
                    gender={item.gender}
                    img={item.img}
                    age={item.age}
                    key={index}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetsCardIsShelter;
