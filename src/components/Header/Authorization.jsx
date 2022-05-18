import React from "react";
import style from "./header.module.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Authorization = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <button className={style.listHeadSingIn} onClick={() => setLgShow(true)}>
        Войти и Регистрация
      </button>
      <Modal
        size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)}
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
            <div className={style.field}>
              <label for="username">Имя</label>
              <input
                className={style.input}
                name="username"
                type="text"
                placeholder="Твое имя..."
                id="username"
              />
            </div>
            <div className={style.field}>
              <label for="email">Email</label>
              <input
                className={style.input}
                name="email"
                type="email"
                placeholder="Твой email..."
                id="email"
              />
            </div>
            <div className={style.field}>
              <label for="password">Пароль</label>
              <input
                className={style.input}
                name="user_password"
                type="password"
                placeholder="Ваш пароль"
                id="password"
              />
            </div>
            <div className={style.buttonPosition}>
            <div className={style.field}>
              <button>Зарегистрироваться</button>
            </div>
            </div>

          
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Authorization;
