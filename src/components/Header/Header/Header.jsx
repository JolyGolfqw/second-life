import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const headArr = [
    "Найти питомца",
    "Помощь приютам",
    "Советы",
    "Сборы",
    "Услуги",
    "Войти",
  ];
  return (
    <header>
      <div className={style.contentHead}>
        <div className={style.logo}>hatiko</div>
        <div className={style.navigate}>
          {headArr.map((item) => {
            return (
              <Link to={"/"} className={style.listHead}>
                <li>{item}</li>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
