import React, { useState, useEffect } from "react";
import style from "../SearchPetsInShelters/searchPetsInShelters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPets } from "../../redux/features/pets";

//!! ЛИЧНЫЙ КАБИНЕТ ВЫВОД И ПОИСК ПИТОМЦЕВ
const SearchPetsInShelters = () => {
  const pets = useSelector((state) => state.pets.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPets());
  }, [dispatch]);

  //!! ФИЛЬТР ПО ИМЕНИ ПИТОМЦА
  const [value, setValue] = useState("");
  const searchFiltered = pets.filter((item) => {
    return item.name?.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className={style.searchPetsPosition}>
      <div className={style.searchPetsTitle}>Наши питомцы:</div>
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
          {!searchFiltered.length ? (
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
              {searchFiltered.map((item) => {
                return (
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
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPetsInShelters;
