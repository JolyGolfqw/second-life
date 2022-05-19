import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadShelters } from "../../redux/features/shelters";
import style from "../ShelterFaceCard/shelterFaceCard.module.css";
import Carusel from "./Carusel/Carusel";

const ShelterFaceCard = () => {
  const {id} = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShelters());
  }, [dispatch]);

  const shelters = useSelector((state) => state.shelters.items);
  console.log(shelters);

  return shelters.map((item) => {
    if (item._id === id) {
    return (
      <div className={style.shelterPosition}>
        <div className={style.shelterContent}>
          <div className={style.shelterLeftContent}>
            <div className={style.shelterTitle}>{item.name}</div>
            <div className={style.shelterDiscription}>
              <p>
                {item.description}
              </p>
            </div>

            <div className={style.shelterCarousel}>
              <Carusel />
            </div>
          </div>
          <div className={style.shelterRightContent}>
            <div className={style.shelterRightImage}>
              <img
                src={`http://localhost:4000/${item.avatar}`}
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className={style.helpSheltersBtn}>
          <button className={style.buttonShelter}>Помочь приюту</button>
        </div>
      </div>
    );
    }
  });
};

export default ShelterFaceCard;
