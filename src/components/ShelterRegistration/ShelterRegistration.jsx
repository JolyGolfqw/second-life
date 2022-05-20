import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { createShelter } from "../../redux/features/application";
import { useDispatch } from "react-redux";
import style from './shelterRegistration.module.css'

const ShelterRegistration = ({regShow, setRegShow}) => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const [warning, setWarning] = useState("Повторите пароль");
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [requisities, setRequisities] = useState("");
  const [description, setDescription] = useState("");

  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");

  function showWarning() {
    if (password !== correctPassword) {
      setWarning("Пароли не совпадают");
    } else if (password === correctPassword) {
      setWarning("Повторите пароль");
    }
  }

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

  const dispatch = useDispatch();

  const shelterRegistration = (e) => {
    e.preventDefault();
    console.log(
      photo,
      login,
      password,
      name,
      contacts,
      address,
      email,
      requisities,
      description
    );
    dispatch(
      createShelter(
        photo,
        login,
        password,
        name,
        contacts,
        address,
        email,
        requisities,
        description
      )
    );
  };

  return (
    <Modal
      size="xl"
      show={regShow}
      onHide={() => setRegShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      centered
    >
      <Modal.Body>
        <form className={style.card}>
          <div className={style.card_header}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
              ></path>
            </svg>
            <h1 className={style.form_heading}>Регистрация</h1>
          </div>
          <div className={style.wrapper}>
            <div className={style.avatar}>
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
                    <ion-icon name="create-outline"></ion-icon>
                  </label>{" "}
                </>
              ) : (
                <label htmlFor="upload">
                  <img
                    className={style.previewImg}
                    src="https://www.babypillowth.com/images/templates/upload.png"
                    alt=""
                  />
                </label>
              )}
            </div>

            <div className={style.form_inputs}>
              <div className={style.field}>
                <label htmlFor="login">Логин</label>
                <input
                  className={style.input}
                  name="login"
                  type="text"
                  placeholder="Придумайте логин"
                  id="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="password">Пароль</label>
                <input
                  className={style.input}
                  name="password"
                  type="text"
                  placeholder="Придумайте пароль"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className={
                  warning === "Пароли не совпадают"
                    ? style.warning
                    : style.field
                }
              >
                <label htmlFor="correctPassword">{warning}</label>
                <input
                  className={style.input}
                  name="correctPassword"
                  type="password"
                  placeholder="Повторите пароль"
                  id="correctPassword"
                  value={correctPassword}
                  onChange={(e) => setCorrectPassword(e.target.value)}
                  onBlur={showWarning}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="name">Название приюта</label>
                <input
                  className={style.input}
                  name="name"
                  type="text"
                  placeholder="Введите название приюта"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={style.form_inputs}>
              <div className={style.field}>
                <label htmlFor="contacts">Контактные данные</label>
                <input
                  className={style.input}
                  name="contacts"
                  type="contacts"
                  placeholder="+7-(000)-000-00-00"
                  id="contacts"
                  value={contacts}
                  onChange={(e) => setContacts(e.target.value)}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="address">Адрес</label>
                <input
                  className={style.input}
                  name="addresss"
                  type="text"
                  placeholder="Введите адрес приюта"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="email">Почта</label>
                <input
                  className={style.input}
                  name="email"
                  type="text"
                  placeholder="Введите ваш email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="requisities">Введите ваши реквизиты</label>
                <input
                  className={style.input}
                  name="requisities"
                  type="text"
                  placeholder="0000-0000-0000-0000"
                  id="requisities"
                  value={requisities}
                  onChange={(e) => setRequisities(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={style.description}>
            <textarea
              name="description"
              maxLength="1000"
              placeholder="Описание приюта"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={style.buttonPosition}>
            <div className={style.field}>
              <button onClick={shelterRegistration}>Оставить заявку</button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ShelterRegistration;
