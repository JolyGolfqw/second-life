import React from "react";
import Modal from "react-bootstrap/Modal";
import style from "../../components/News/news.module.css";

const ModalNews = ({ show, setShow, title, description, image }) => {
  return (
    <Modal
      size="xl"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-custom-modal-styling-title"
      centered
    >
      <Modal.Body>
        <div className={style.modalNewsPosition}>
       
              <div className={style.modalNewsFlex}>
                <div className={style.modalNewsImage}>
                  <img src={`http://localhost:4000/${image}`} alt="img" />
                </div>
                <div className={style.modalNewsTitleAndDescription}>
                  <div className={style.modalNewsTitle}>{title}</div>
                  <div className={style.modalNewsDescription}>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            
          
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalNews;
