import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadShelters } from "../../redux/features/shelters";
import style from "../ShelterFaceCard/shelterFaceCard.module.css";
import Carusel from "./Carusel/Carusel";
import { useState } from "react";
import ShelterFaceCardModal from "./ShelterFaceCardModal";

//!! СТРАНИЦА/КАРТОЧКА ПРИЮТА
const ShelterFaceCard = () => {
  const shelters = useSelector((state) => state.shelters.items);
  const [smShow, setSmShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadShelters());
  }, [dispatch]);

  //!! КАРТОЧКА ПРИЮТА
  return shelters.map((item, index) => {
    if (item._id === id) {
      return (
        <div className={style.shelterPosition} key={index}>
          <div className={style.shelterContent}>
            <div className={style.shelterLeftContent}>
              <div className={style.shelterTitle}>{item.name}</div>
              <div className={style.shelterDiscription}>
                <p>{item.description}</p>
              </div>

              <div className={style.shelterCarousel}>
                {/* //!! КАРУСЕЛЬ С ПИТОМЦАМИ ПРИЮТА */}
                <Carusel />
              </div>
            </div>
            <div className={style.shelterRightContent}>
              <div className={style.shelterRightImage}>
                <img src={`http://localhost:4000/${item.avatar}`} alt="img" />
              </div>
            </div>
          </div>
          <div className={style.helpSheltersBtn}>
            <button
              className={style.buttonShelter}
              onClick={() => setSmShow(true)}
            >
              Помочь приюту
            </button>
          </div>
          {/* //!! МОДАЛЬНОЕ ОКНО С РЕКВЕЗИТАМИ ПРИЮТА */}
          <ShelterFaceCardModal smShow={smShow} setSmShow={setSmShow} />
        </div>
      );
    }
  });
};

export default ShelterFaceCard;
