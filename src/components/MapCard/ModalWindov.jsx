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
        size="lg"
        show={lgShow}
        centered
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Информация о приюте
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Телефон</div>
          <div>Address</div>
          <div>Название приюта</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindov;
