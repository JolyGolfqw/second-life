import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadShelters } from "../../redux/features/shelters";
import style from "../ShelterFaceCard/shelterFaceCard.module.css";
import Carusel from "./Carusel/Carusel";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import bankCardImg from "../../assets/card.jpg";
const ShelterFaceCard = () => {
  const shelters = useSelector((state) => state.shelters.items);
  const [smShow, setSmShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadShelters());
  }, [dispatch]);

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
          <Modal
            size="lm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Body>
              <div className={style.bankCardImage}>
                <img src={bankCardImg} alt="bankCardImg"></img>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  });
};

export default ShelterFaceCard;
