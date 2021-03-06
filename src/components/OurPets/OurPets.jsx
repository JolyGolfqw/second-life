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

const OurPets = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);
  
  const category = useSelector((state) => state.categories.items);
  
  return (
    <div className={style.catalogPetsPosition}>
      <div className={style.catalogPetsContent}>
        <div className={style.catalogPetsTitle}>
          Эти питомцы ждут, когда
          <br /> вы приедете в наши приюты
        </div>
        <div className={style.catalogPetsIcons}>
          <Link to={`/shelter-page-profile/62811dd044d7a95c8a80fd58/shelter-page-profile`}>
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
              <Link key={index} to={`/shelter-page-profile/${item._id}`}>
                <img src={item.img} alt="icon" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPets;
