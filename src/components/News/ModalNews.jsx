import React from "react";
import Modal from "react-bootstrap/Modal";
import style from "../../components/News/news.module.css";
import imageNews from "../../assets/news.jpg";

const ModalNews = ({ show, setShow }) => {
  const newsRenderInModal = [
    {
      img: imageNews,
      title: 'Девятиклассница организовали акцию "Доброе сердце"',
      description:
        "Учащиеся 9а класса МБОУ 'СОШ 23' г.Грозного совместно с классным руководителем Исаевой М.Х. организовали и провели акцию 'Доброе сердце' для оказания помощи приюту для животных 'Надежда на жизнь'. От лица всех волонтеров хотим выразить огромную благодарность за эту акцию. Спасибо большое . Прививать чувство милосердия к животным это очень важно и значимо. Спасибо учителям и детям!",
    },
  ];
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
          {newsRenderInModal.map((item, index) => {
            return (
              <div className={style.modalNewsFlex} key={index}>
                <div className={style.modalNewsImage}>
                  <img src={item.img} alt="img" />
                </div>
                <div className={style.modalNewsTitleAndDescription}>
                  <div className={style.modalNewsTitle}>{item.title}</div>
                  <div className={style.modalNewsDescription}>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalNews;
