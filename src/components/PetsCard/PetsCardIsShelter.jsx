import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPets } from "../../redux/features/pets";
import style from "../PetsCard/petsCard.module.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

//!! ЖИВОТНЫЕ В ДОБРЫЕ РУКИ
const PetsCardIsShelter = () => {
  const pets = useSelector((state) => state.pets.items);
  const [smShow, setSmShow] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadPets());
  }, [dispatch]);

  //!! ФИЛЬТР ПО ИМЕНИ ПИТОМЦА
  const searchFiltered =
    pets &&
    pets.filter((item) => {
      return item.name?.toLowerCase().includes(value.toLowerCase());
    });

  //!! ФИЛЬТР ПО ТИПУ ЖИВОТНЫХ
  const filtereByType = searchFiltered.filter((item) => {
    if (!id) return true;
    return item.type === id;
  });

  //!! ФИЛЬТР ИЗ ПРИЮТА ИЛИ В ДОБРЫЕ РУКИ
  const isShelteredPets = filtereByType.filter((item) => {
    if (!item.isShelter) {
      return true;
    }
  });

  return (
    <div className={style.searchPetsPosition}>
      <div className={style.searchPetsHeader}>
        <div className={style.searchPetsInput}>
          <input
            type="text"
            placeholder="Поиск по кличке..."
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      {/* //!! ПРОВЕРКА И ЛОАДЕР */}
      <div className={style.searchPetsBody}>
        <div>
          {!searchFiltered.length ||
          !filtereByType.length ||
          !isShelteredPets.length ? (
            <div className={style.sectorСlear}>
              <img
                src="https://acegif.com/wp-content/gif/hamster-wheel-46.gif"
                alt="gif"
              />
              <h2>Ничего не найдено...</h2>
            </div>
          ) : (
            //!! КАРТОЧКА ПИТОМЦА
            <div className={style.cardPetsRender}>
              {isShelteredPets.map((item) => {
                return (
                  <>
                    <button
                      className={style.card}
                      key={item._id}
                      onClick={() => setSmShow(true)}
                    >
                      <div className={style.headPetsCard}>
                        <div className={style.agePets}>
                          <span>{item.age}</span>
                        </div>
                        <div className={style.iconPets}>
                          <div className={style.iconOne}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                          </div>
                          <div className={style.iconTwo}>
                            <ion-icon name="file-tray-outline"></ion-icon>
                          </div>
                        </div>
                      </div>
                      <div className={style.bodyPetsCard}>
                        <div className={style.imgPetsCard}>
                          <img
                            src={`http://localhost:4000/${item.img}`}
                            alt="pet"
                          ></img>
                        </div>
                        <div className={style.titlePetsCard}>{item.name}</div>
                        <div className={style.descriptionPetsCard}>
                          {item.description}
                        </div>
                      </div>
                      <div className={style.footerPetsCard}></div>
                    </button>
                    {/* //!! МОДАЛЬНОЕ ОКНО ПИТОМЦА */}
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
                        {/* //!! ИНФОРМАЦИЯ ОБ ПИТОМЦЕ */}
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCardNumber"
                          >
                            <div className={style.modalDescription}>
                              <Form.Control type="text" placeholder={item.name} disabled/>
                              <Form.Text className="text-muted">Имя питомца</Form.Text>
                            </div>

                            <div className={style.modalDescription}>
                              <Form.Control type="text" placeholder={item.age} disabled/>
                              <Form.Text className="text-muted">Возраст питомца</Form.Text>
                            </div>

                            <div className={style.modalDescription}>
                              <Form.Control type="text" placeholder={item.gender} disabled/>
                              <Form.Text className="text-muted">Пол питомца</Form.Text>
                            </div>

                            <div className={style.modalDescription}>
                              <Form.Control type="text" placeholder={item.description} disabled/>
                              <Form.Text className="text-muted">Описание питомца</Form.Text>
                            </div>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetsCardIsShelter;
