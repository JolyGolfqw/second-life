import React from "react";
import { Modal } from "react-bootstrap";


const FullPhotoModal = ({ show, setShow, image }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-w100"
        aria-labelledby="example-custom-modal-styling-title"
      >
       
        <Modal.Body>
          <img src={image} style={{width: '100%'}} alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FullPhotoModal;
