import React from "react";
import style from "../CreateShelters/createShelters.module.css";

const CreateShelters = () => {
  return (
    <>
      <div className={style.createSheltersPosition}>
        <div className={style.createSheltersFlex}>
          <div className={style.createSheltersFileUpload}>
            <div className={style.createSheltersImage}>
              <input type="file" id="upload" hidden accept="image/*" />
              <label htmlFor="upload">
                <img
                  className={style.imageIcon}
                  src="https://www.babypillowth.com/images/templates/upload.png"
                  alt="img"
                />
              </label>
            </div>
          </div>
        </div>
        <div className={style.createSheltersDetails}>
          <div className={style.createSheltersTitle}>
            <span>Параметры</span>
          </div>
          <div className={style.createSheltersFuncional}>
            {/* TITLE */}
            <div className={style.createSheltersFuncionalInfo}>
              <h6>Название приюта </h6>
              <input type="text" placeholder="Имя приюта" />
            </div>
            {/* PHONE NUMBER */}
            <div className={style.createSheltersFuncionalInfo}>
              <h6>Номер телефона </h6>
              <input type="tel" placeholder="8 (929) 000-00-00" />
            </div>
            {/* ADRESS */}
            <div className={style.createSheltersFuncionalInfo}>
              <h6>Адрес </h6>
              <input type="text" placeholder="Адрес приюта" />
            </div>
            {/* EMAIL */}
            <div className={style.createSheltersFuncionalInfo}>
              <h6>Email </h6>
              <input type="email" placeholder="_________@mail.ru" />
            </div>
            {/* DISCRIOTION */}
            <div className={style.createSheltersFuncionalInfo}>
              <h6>История приюта</h6>
              <textarea name="text" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateShelters;
