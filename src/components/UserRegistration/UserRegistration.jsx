import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import { useState } from "react";
import style from "./userRegistration.module.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/features/application";

const UserRegistration = ({ regShow, setRegShow, setAuthShow }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // видимость пароля
  const [passwordVisible, setPasswordVisible] = useState(true);

  // эти состояния используются для валидации форм
  const [loginNotification, setLoginNotification] = useState(false);
  const [loginPlaceholder, setLoginPlaceholder] = useState("Придумайте логин");

  const [passwordNotification, setPasswordNotification] = useState(false);
  const [passwordPlaceHolder, setPasswordPlaceholder] = useState("Пароль");

  const [nameNotification, setNameNotification] = useState(false);
  const [namePlaceholder, setNamePlaceholder] = useState("Имя");

  // если тут будет тру, то кнопка зарегаться будет неактивна
  const [buttonState, setButtonState] = useState(true);

  const dispatch = useDispatch();

  const openAuthModal = () => {
    setRegShow(false);
    setAuthShow(true);
  };

  // состояние кнопки зарегаться
  const handleButtonState = () => {
    if (passwordNotification && nameNotification && loginNotification) {
      setButtonState(true);
    }
    if (!passwordNotification && !nameNotification && !loginNotification) {
      setButtonState(false);
    }
  };

  // проверка логина
  const handleLogin = () => {
    // проверка на заполнение формы
    if (!login) {
      setLoginPlaceholder("Логин не может быть пустым");
      setLoginNotification(true);
    }
    if (login) {
      setLoginPlaceholder("Придумайте логин");
      setLoginNotification(false);
    }
    // проверка на длину логина
    if (login.length < 6 && login) {
      setLoginPlaceholder("Должно быть мининум 6 символов");
      setLoginNotification(true);
    }
  };

  // проверка пароля
  const handlePassword = () => {
    // проверка на заполнение формы
    if (!password) {
      setPasswordPlaceholder("Пароль не может быть пустым");
      setPasswordNotification(true);
    }
    if (password) {
      setPasswordPlaceholder("Пароль");
      setPasswordNotification(false);
    }
    // проверка на длину логина
    if (password.length < 6 && password) {
      setPasswordPlaceholder("Должно быть мининум 6 символов");
      setPasswordNotification(true);
    }
  };

  // проверка имени
  const handleName = () => {
    // проверка на заполнение формы
    if (!name) {
      setNamePlaceholder("Имя не может быть пустым");
      setNameNotification(true);
    }
    if (name) {
      setNamePlaceholder("Имя");
      setNameNotification(false);
    }
    // проверка на длину логина
    if (name.length < 3 && name) {
      setNamePlaceholder("Должно быть мининум 3 символа");
      setNameNotification(true);
    }
  };

  // сброс валидации при закрытии модального окна
  const handleValidation = () => {
    setLoginPlaceholder("Придумайте логин");
    setLoginNotification(false);
    setLogin("");

    setPasswordPlaceholder("Пароль");
    setPasswordNotification(false);
    setPassword("");

    setNamePlaceholder("Имя");
    setNameNotification(false);
    setName("");

    // это для закрытии модального окна
    setRegShow(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!login || !name || !password) {
      return;
    }
    dispatch(createUser(name, login, password));
    openAuthModal();
  };

  return (
    <>
      <Modal
        size="sm"
        show={regShow}
        onHide={handleValidation}
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
            <div className={style.form_inputs}>
              <div className={loginNotification ? style.warning : style.field}>
                <label htmlFor="login">{loginPlaceholder}</label>
                <input
                  className={style.input}
                  name="login"
                  type="text"
                  placeholder="Придумайте логин"
                  id="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  onBlur={handleLogin}
                />
              </div>
              <div
                className={passwordNotification ? style.warning : style.field}
              >
                <label htmlFor="password">{passwordPlaceHolder}</label>
                <input
                  className={style.input}
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Придумайте пароль"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handlePassword}
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className={style.eye}
                >
                  {passwordVisible ? (
                    <ion-icon name="eye-outline"></ion-icon>
                  ) : (
                    <ion-icon name="eye-off-outline"></ion-icon>
                  )}
                </span>
              </div>
              <div className={nameNotification ? style.warning : style.field}>
                <label htmlFor="name">{namePlaceholder}</label>
                <input
                  className={style.input}
                  name="name"
                  type="text"
                  placeholder="Введите имя"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={handleName}
                />
              </div>
            </div>
          </form>
          <div className={style.buttonPosition}>
            <div className={style.field}>
              <button onClick={handleSignup} className={style.btn}>
                Зарегистрироваться
              </button>
            </div>
          </div>
          <div className={style.login}>
            Уже есть аккаунт? <span onClick={openAuthModal}>Войдите</span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserRegistration;
