import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadShelters } from "../../redux/features/shelters";
import style from "./ourShelters.module.css";

const OurShelters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShelters());
  }, [dispatch]);

  const shelters = useSelector((state) => state.shelters.items);
  console.log(shelters);
  return (
    <div className={style.ourSheltersPosition}>
      <div className={style.ourSheltersTitle}>Наши приюты</div>
      <div className={style.ourSheltersRender}>
        {shelters.map((item, index) => {
          return (
            <div className={style.ourSheltersCard} key={index}>
              <img src={`http://localhost:4000/${item.avatar}`} alt="img"></img>
              <button className={style.ourSheltersButton}>
               <Link to={`/shelter-page/${item._id}`}>
                  <ion-icon name="paw-outline"></ion-icon>
                </Link>
              </button>
              <div className={style.ourSheltersName}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurShelters;
