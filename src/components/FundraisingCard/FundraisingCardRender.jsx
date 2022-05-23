import React from "react";
import style from "./fundraising.module.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { loadFundraisings } from "../../redux/features/fundraising";
import { useDispatch, useSelector } from "react-redux";

//!! КАРТОЧКА СБОРА ПРИЮТА
const FundraisingCardRender = ({ image, title, amount, description }) => {
  const [smShow, setSmShow] = useState(false);
  const fundraising = useSelector((state) => state.pets.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFundraisings());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperImageContainer}>
        <div className={style.imageWrapper}>
          <img src={`http://localhost:4000/${image}`} alt="photo" />
        </div>
      </div>

      <div className={style.infoWrapper}>
        <div className={style.title}>
          <h4>{title}</h4>
          <h6>
            Сумма сбора: <span>{amount}</span>
          </h6>
        </div>
        <p>{description}</p>
        <div className={style.shelter}>
          <div className={style.shelterAvatar}>
            <img
              src="https://vos-mo.ru/upload/iblock/220/Priyuty.jpg"
              alt="shelterAvatar"
            />
          </div>
          <div className={style.shelterInfo}>
            <p>
              Получатель: <span id={style.shelter}>Приют 1</span>
            </p>
            <p>
              Размещено <span>16.05.2022</span>
            </p>
          </div>
        </div>
        <div className={style.left}>
          <button onClick={() => setSmShow(true)}>Помочь</button>
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
            {/* //!! РЕКВЕЗИТЫ ДЛЯ СБОРА
            {fundraising.map((item) => {
              return ( */}
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCardNumber"
                    >
                      <Form.Label>Карта банка</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="0000-0000-0000-0000"
                        disabled
                      />
                      <Form.Text className="text-muted">
                        Реквезиты приюта
                      </Form.Text>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPhoneNumber"
                    >
                      <Form.Label>Номер</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="8929-000-00-00"
                        disabled
                      />
                      <Form.Text className="text-muted">
                        Телефон номер
                      </Form.Text>
                    </Form.Group>
                  </Form>
            
              {/* );
            })} */}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default FundraisingCardRender;
