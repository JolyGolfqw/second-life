import React from "react";
import style from "../CatalogPets/catalogPets.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import { Link } from "react-router-dom";
import imageIcon1 from "../../assets/bcat.png";
import imageIcon2 from "../../assets/rabbit.png";
import imageIcon3 from "../../assets/parrot.png";
import imageIcon4 from "../../assets/tortoise.png";

//!! КАТАЛОГ ДЛЯ ЖИВОТНЫХ ОТ ПОЛЬЗОВАТЕЛЕЙ
const CatalogPets = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.items);

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
        {/* //!! КНОПКИ ВЫБОРА */}
        <div className={style.changeSheltersAndPetsPosition}>
          <div className={style.changeSheltersAndPets}>
            <Link to={`/pets`}>
              <button> Животные из приюта</button>
            </Link>
            <Link to={`/pets-is-shelter`}>
              <button>Животные от пользователей</button>
            </Link>
          </div>
        </div>
        {/* //!! КАТЕГОРИИ-ТИП ЖИВОТНЫХ */}
        <div className={style.catalogPetsIcons}>
          <Link to={"/pets"}>
            <div className={style.wrapper}>
              <div className={style.photoWrapper}>
                <img src={imageIcon1} alt="icon" />
              </div>
              <div className={style.photoWrapper}>
                <img src={imageIcon2} alt="icon" />
              </div>
              <div className={style.photoWrapper}>
                <img src={imageIcon3} alt="icon" />
              </div>
              <div className={style.photoWrapper}>
                <img src={imageIcon4} alt="icon" />
              </div>
            </div>
          </Link>
          {category.map((item, index) => {
            return (
              <Link key={index} to={`/pets/type/${item._id}`}>
                <img src={item.img} alt="icon" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogPets;
