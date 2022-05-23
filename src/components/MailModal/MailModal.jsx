import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import style from "../UserRegistration/userRegistration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authShelter } from "../../redux/features/application";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";

const MailModal = ({
  mailModalShow,
  setMailModalShow,
}) => {
  return (
    <>
      <Modal
        size="sm"
        show={mailModalShow}
        onHide={() => setMailModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Body>
          <div className={style.mail}>
            Напишите на эту почту <span>admin@mail.ru</span>для создания приюта
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MailModal;
