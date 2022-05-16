import React from "react";
import style from "../CatalogPets/catalogPets.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";

const CatalogPets = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.items);


  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <div className={style.catalogPetsPosition}>
      <div className={style.catalogPetsContent}>
        <div className={style.catalogPetsTitle}>
          Эти питомцы ждут, когда
          <br /> вы приедете в наши приюты
        </div>
        <div className={style.catalogPetsIcons}>
          {category.map((item, index) => {
            return (
              <button key={index}>
                <img src={item.img} alt="icon" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogPets;
