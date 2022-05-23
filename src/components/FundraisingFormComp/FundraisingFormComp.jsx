import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFundraising, loadFundraisings } from "../../redux/features/fundraising";
import { addPetKeeping } from "../../redux/features/petsKeeping";
import style from "./fundraisingFormComp.module.css";

export default function FundraisingFormComp() {
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const author = useSelector((state) => state.application.shelterId)

  const dispatch = useDispatch();

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [photo]);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);
  const handleCardNumber = (e) => setCardNumber(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  

  const saveForm = () => {
    dispatch(
      addFundraising(
        photo,
        title,
        amount,
        cardNumber,
        phoneNumber,
        description, 
        author
      )
    );
  };

  return (
    <>
      <div className={style.createSheltersMainBox}>
        <div className={style.createSheltersPosition}>
          <div className={style.createSheltersFlex}>
            <div className={style.createSheltersFileUpload}>
              <div className={style.createSheltersImage}>
                <input
                  type="file"
                  id="upload"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.type.substring(0, 5) === "image") {
                      setPhoto(file);
                    } else {
                      setPhoto(null);
                    }
                  }}
                />
                {preview ? (
                  <>
                    <img src={preview} alt="" />
                    <label htmlFor="upload">
                      <ion-icon name="create-outline"></ion-icon>Изменить
                    </label>{" "}
                  </>
                ) : (
                  <label htmlFor="upload">
                    <img
                      className={style.imageIcon}
                      src="https://www.babypillowth.com/images/templates/upload.png"
                      alt="img"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className={style.createSheltersDetails}>
            <div className={style.createSheltersTitle}>
              <span>Объявить сбор</span>
            </div>
            <div className={style.createSheltersFuncional}>
              {/* TITLE */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Название</h6>
                <input
                  value={title}
                  onChange={(e) => handleTitle(e)}
                  type="text"
                  placeholder="Введите название сбора..."
                />
              </div>


              {/* DISCRIOTION */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Цель сбора</h6>
                <textarea
                  value={description}
                  onChange={(e) => handleDescription(e)}
                  placeholder="Расскажите про цель вашего сбора..."
                  name="text"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <div className={style.createSheltersFuncionalInfo}>
                <h6>Номер карты</h6>
                <input
                  value={cardNumber}
                  onChange={(e) => handleCardNumber(e)}
                  type="text"
                  placeholder="Сбербанк: 4890-0000-0000-2760"
                />
              </div>

              <div className={style.createSheltersFuncionalInfo}>
                <h6>Номер перевода</h6>
                <input
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumber(e)}
                  type="tel"
                  placeholder="8-962-657-57-27"
                />
              </div>

              <div className={style.createSheltersFuncionalInfo}>
                <h6>Сумма сбора</h6>
                <input
                  value={amount}
                  onChange={(e) => handleAmount(e)}
                  type="text"
                  placeholder="10 тысяч"
                />
              </div>

            </div>
            <div className={style.buttonPositionCreateShelters}>
              <button
                onClick={saveForm}
                variant="primary"
                className={style.buttonForm}
              >
                Сохранить
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
