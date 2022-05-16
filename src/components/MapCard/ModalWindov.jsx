import React from "react";
import Modal from "react-bootstrap/Modal";
import style from "../MapCard/mapCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ModalWindov = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Link to={"/"} className={style.linkButtonMapCard}>
        <button onClick={() => setLgShow(true)}>
          Написать или позвонить нам
        </button>
      </Link>
      <Modal
        size="sg"
        show={lgShow}
        centered
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div className={style.modalTitleInformation}>
              Как получить информацию о приюте?
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.modalInformation}>
            Слева от кнопки находится карта, чтобы получить информацию о нужном
            вам приюте, нужно:
            <li>Зайти на карту;</li>
            <li>Выбрать приют;</li>
            <li>Кликнуть на него;</li>
            <li>И получить всю информацию о конкретном приюте.</li>
            Все легко и просто. Удачи!
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindov;
