import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import ServicesDropdown from "../DropdownButton/ServicesDropdown";
import logoImg from "../../assets/logo.png";
import { useState } from "react";
import ShelterRegistration from "../ShelterRegistration/ShelterRegistration";
import UserRegistration from "../UserRegistration/UserRegistration";

const Header = () => {

	const [lgShow, setLgShow] = useState(false);

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
          <Link to={"/fundraising-page"} className={style.listHead}>
            Сборы
          </Link>
          <Link to={"/news"} className={style.listHead}>
            Новости
          </Link>
          <Link to={"/animal-shelters"} className={style.listHead}>
            Помощь приютам
          </Link>
          <Link to={"/shelter-page"} className={style.listHead}>
            Приют
          </Link>
          <button
            className={style.listHeadSingIn}
            onClick={() => setLgShow(true)}
          >
            Вход и Регистрация
          </button>
					<ShelterRegistration lgShow={lgShow} setLgShow={setLgShow} />
					<UserRegistration lgShow={lgShow} setLgShow={setLgShow} />
        </div>
      </div>
    </header>
  );
};

export default Header;
