import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import ServicesDropdown from "../DropdownButton/ServicesDropdown";
import logoImg from "../../assets/logo.png";
import { useState } from "react";
import UserRegistration from "../UserRegistration/UserRegistration";
import ShelterProfileDropdown from "../DropdownButton/ShelterProfileDropdown";
import MailModal from "../MailModal/MailModal";
import UserAuth from "../UserAuth/UserAuth";
import ShelterAuth from "../ShelterAuth/ShelterAuth";
import { useSelector } from "react-redux";
import AvatarDropDown from "../DropdownButton/AvatarDropDown";
import ShelterRegistration from "../ShelterRegistration/ShelterRegistration";

const Header = () => {
  const [regShow, setRegShow] = useState(false);
  const [authShow, setAuthShow] = useState(false);
  const [shelterAuthShow, setShelterAuthShow] = useState(false);
  const [mailModalShow, setMailModalShow] = useState(false);

  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.userId);
  const shelter = useSelector((state) => state.application.shelterId);
  const role = useSelector((state) => state.application.role);

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

          {!token && (
            <>
              <button
                className={style.listHeadSingIn}
                onClick={() => setRegShow(true)}
              >
                Вход и Регистрация
              </button>
              <UserRegistration
                regShow={regShow}
                setRegShow={setRegShow}
                authShow={authShow}
                setAuthShow={setAuthShow}
              />
              <UserAuth
                regShow={regShow}
                setRegShow={setRegShow}
                authShow={authShow}
                setAuthShow={setAuthShow}
                shelterAuthShow={shelterAuthShow}
                setShelterAuthShow={setShelterAuthShow}
              />
              <ShelterAuth
                regShow={regShow}
                setRegShow={setRegShow}
                authShow={authShow}
                setAuthShow={setAuthShow}
                shelterAuthShow={shelterAuthShow}
                setShelterAuthShow={setShelterAuthShow}
                mailModalShow={mailModalShow}
                setMailModalShow={setMailModalShow}
              />
              <MailModal
                mailModalShow={mailModalShow}
                setMailModalShow={setMailModalShow}
              />
            </>
          )}
          {user && <AvatarDropDown id={user} />}
          {shelter && <ShelterProfileDropdown id={shelter} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
