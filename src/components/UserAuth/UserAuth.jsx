import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import style from "../UserRegistration/userRegistration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../redux/features/application";
import styled from "@emotion/styled";

const UserAuth = ({
  authShow,
  setAuthShow,
  setRegShow,
  shelterAuthShow,
  setShelterAuthShow,
}) => {
  const error = useSelector((state) => state.application.errorSignIn);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  // ошибка пароля или логина
  const [uncorrect, setUncorrect] = useState("Неверный логин или пароль");

  // видимость пароля
  const [passwordVisible, setPasswordVisible] = useState(true);

  // состояние кнопки зарегаться
  const [disabledButton, setDisabledButton] = useState(true);

  const dispatch = useDispatch();

  const openRegistrationModal = () => {
    setUncorrect("");

    setRegShow(true);
    setAuthShow(false);
		setShelterAuthShow(false);

    setLogin("");
    setPassword("");
  };

  const openShelterRegistrModal = () => {
    setUncorrect("");

    setShelterAuthShow(true);
    setAuthShow(false);

    setLogin("");
    setPassword("");
  };

  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(authUser(login, password));
  };

  // проверка на заполнение и правильность форм
  useEffect(() => {
    if (!login || !password) {
      setDisabledButton(true);
    }
    if (!(!login || !password)) {
      setDisabledButton(false);
    }
  }, [login, password]);

  return (
    <>
      <Modal
        size="sm"
        show={authShow}
        onHide={() => setAuthShow(false)}
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
              <h1 className={style.form_heading}>Авторизация</h1>
            </div>
            <div className={style.form_inputs}>
              <div className={style.field}>
                <label htmlFor="login">Логин</label>
                <input
                  className={style.input}
                  name="login"
                  type="text"
                  placeholder="Введите логин"
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
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Введите пароль"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {error && <div className={style.authWarning}>{uncorrect}</div>}
              <div className={style.buttonPosition}>
                <div className={style.field}>
                  <button
                    onClick={handleAuth}
                    disabled={disabledButton}
                    className={disabledButton ? style.disabledBtn : style.btn}
                  >
                    Войти
                  </button>
                </div>
              </div>
              <div className={style.login}>
                <span className={style.question}>Нет аккаунта?</span>
                <span onClick={openRegistrationModal}>Зарегистрируйтесь</span>
                <span className={style.or}>или</span>
                <span onClick={openShelterRegistrModal} className={style.shelterAuth}>
                  Войдите как приют
                </span>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserAuth;
