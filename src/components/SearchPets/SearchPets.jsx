import React, { useState, useEffect } from "react";
import SearchPetsDropdown from "./SearchPetsDropdown/SearchPetsDropdown";
import style from "../SearchPets/searchPets.module.css";
import PetsCard from "../PetsCard/PetsCard";
import { useDispatch, useSelector } from "react-redux";
import { loadPets } from "../../redux/features/pets";

const SearchPets = () => {
  const pets = useSelector((state) => state.pets.items);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPets());
  }, [dispatch]);

  //ПОИСКОВИК
  const searchFiltered = pets && pets.filter((item) => {
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
        {/* <div className={style.searchPetsChange}>
          <SearchPetsDropdown />
        </div> */}
      </div>
      <div className={style.searchPetsBody}>
        <PetsCard searchFiltered={searchFiltered} />
      </div>
    </div>
  );
};

export default SearchPets;
