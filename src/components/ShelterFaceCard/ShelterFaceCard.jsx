import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadShelters } from "../../redux/features/shelters";
import style from "../ShelterFaceCard/shelterFaceCard.module.css";
import Carusel from "./Carusel/Carusel";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { loadFundraisings } from "../../redux/features/fundraising";

//!! СТРАНИЦА/КАРТОЧКА ПРИЮТА
const ShelterFaceCard = () => {
  const shelters = useSelector((state) => state.shelters.items);
  const fundraising = useSelector((state) => state.pets.items);
  const [smShow, setSmShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadShelters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadFundraisings());
  }, [dispatch]);
  console.log(fundraising);

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

          {/* //!! МОДАЛЬНОЕ ОКНО ДЛЯ СБОРА */}
          <Modal
            size="lm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Реквезиты приюта для доната
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* //!! РЕКВЕЗИТЫ ДЛЯ СБОРА */}
              {fundraising.map((item) => {
                return (
                  <>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCardNumber"
                      >
                        <Form.Label>Карта банка</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={item.cardNumber}
                          disabled
                        />
                        <Form.Text className="text-muted">
                          Реквезиты приюта (Сбербанк)
                        </Form.Text>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPhoneNumber"
                      >
                        <Form.Label>Номер</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={item.phoneNumber}
                          disabled
                        />
                        <Form.Text className="text-muted">
                          Телефон номер (Мегафон)
                        </Form.Text>
                      </Form.Group>
                    </Form>
                  </>
                );
              })}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  });
};

export default ShelterFaceCard;
