import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import style from "../UserRegistration/userRegistration.module.css";
import { useDispatch } from "react-redux";
import { authUser } from "../../redux/features/application";

const UserAuth = ({ authShow, setAuthShow }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(authUser(login, password));
  };

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
                  type="text"
                  placeholder="Введите пароль"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={style.buttonPosition}>
                <div className={style.field}>
                  <button onClick={handleAuth} className={style.btn}>
                    Войти
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserAuth;
