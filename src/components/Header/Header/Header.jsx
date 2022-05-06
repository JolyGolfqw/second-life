import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <header>
      <div className={style.contentHead}>
        <div className={style.logo}>hatiko</div>
        <div className={style.navigate}>
            <Link to={"/pets"} className={style.listHead}>Найти питомца</Link>
            <Link to={"/animal-shelters"} className={style.listHead}>Помощь приютам</Link>
            <Link to={"/"} className={style.listHead}>Советы</Link>
            <Link to={"/"} className={style.listHead}>Сборы</Link>
            <Link to={"/"} className={style.listHead}>Услуги</Link>
            <Link to={"/"} className={style.listHead}>Войти</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
