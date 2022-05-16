import React, { useState, useEffect } from "react";
import style from "../SearchPetsInShelters/searchPetsInShelters.module.css";
import PetsCard from "../PetsCard/PetsCard";
import { useDispatch, useSelector } from "react-redux";
import { loadPets } from "../../redux/features/pets";
const SearchPetsInShelters = () => {
  const pets = useSelector((state) => state.pets.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPets());
  }, [dispatch]);

  const [value, setValue] = useState("");
  const searchFiltered = pets.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
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
        <PetsCard searchFiltered={searchFiltered} />
      </div>
    </div>
  );
};

export default SearchPetsInShelters;
