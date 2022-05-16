import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import ServicesDropdown from "../../DropdownButton/ServicesDropdown";
import logoImg from "../../assets/logo.png";
import Authorization from "./Authorization";
const Header = () => {
  return (
      
    <header>
      <div className={style.contentHead}>
        <div className={style.logo}>
          <img src={logoImg} alt="logo"></img>
          <Link to={"/"} className={style.logoLink}>
            <span>Хатико</span>
          </Link>
        </div>
        <div className={style.navigate}>
          <Link to={"/pets"} className={style.listHead}>
            Найти питомца
          </Link>
          <ServicesDropdown />
          <Link to={"/"} className={style.listHead}>
            Сборы
          </Link>
          <Link to={"/animal-shelters"} className={style.listHead}>
            Помощь приютам
          </Link>
          <Link to={"/shelter-page"} className={style.listHead}>
            Приют
          </Link>
          <Authorization />
        </div>
      </div>
    </header>
  );
};

export default Header;
