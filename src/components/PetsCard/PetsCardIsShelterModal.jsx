import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import style from "../PetsCard/petsCard.module.css";

const PetsCardIsShelterModal = ({
  smShow,
  setSmShow,
  name,
  description,
  age,
  gender,
}) => {
  return (
    <Modal
      size="lm"
      show={smShow}
      onHide={() => setSmShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Информация об питомце
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCardNumber">
            <div className={style.modalDescription}>
              <Form.Control type="text" placeholder={name} disabled />
              <Form.Text className="text-muted">Имя питомца</Form.Text>
            </div>

            <div className={style.modalDescription}>
              <Form.Control type="text" placeholder={age} disabled />
              <Form.Text className="text-muted">Возраст питомца</Form.Text>
            </div>

            <div className={style.modalDescription}>
              <Form.Control type="text" placeholder={gender} disabled />
              <Form.Text className="text-muted">Пол питомца</Form.Text>
            </div>

            <div className={style.modalDescription}>
              <Form.Control type="text" placeholder={description} disabled />
              <Form.Text className="text-muted">Описание питомца</Form.Text>
            </div>
            <div className={style.modalDescription}>
              <Form.Control type="text" placeholder="8929-905-05-08" disabled />
              <Form.Text className="text-muted">Номер хозяина</Form.Text>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PetsCardIsShelterModal;
