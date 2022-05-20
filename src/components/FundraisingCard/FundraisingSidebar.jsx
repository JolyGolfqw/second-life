import React from "react";
import style from "./fundraising.module.css";

const FundraisingSidebar = () => {
  return (
    <div className={style.wrapperSidebar}>
      <div className={style.wrapperSidebarHeader}>
        <div className={style.wrapperSidebarHeaderIcon}>
          <ion-icon name="newspaper-outline"></ion-icon>
        </div>
        <div className={style.wrapperSidebarHeaderTitle}>
          Бронирование на сайте -<br /> безопасность для вас и ваших питомцев
        </div>
      </div>
      <hr />
      <div className={style.wrapperSidebarList}>
        <li>Поддержка</li>
        <li>Гарантия бронирования</li>
        <li>Консультация</li>
        <li>Удобства</li>
        <li>Оптимизация</li>
      </div>
      <hr />
      <div className={style.wrapperSidebarText}>
        Вы можете выбрать
        <br /> определенный приют, чтобы
        <br /> пожертвовать и помочь приюту
        <br /> {`(Спасибо за поддержку)`}.
      </div>
      <hr />
      <div className={style.wrapperSidebarSocial}>
        <div className={style.social}>
          <a className={style.socialIcon} href="#">
            <ion-icon name="logo-instagram"></ion-icon>{" "}
          </a>
          <a className={style.socialIcon} href="#">
            <ion-icon name="logo-facebook"></ion-icon>{" "}
          </a>
          <a className={style.socialIcon} href="#">
            <ion-icon name="logo-github"></ion-icon>{" "}
          </a>
          <a className={style.socialIcon} href="#">
            <ion-icon name="logo-twitter"></ion-icon>{" "}
          </a>
          <a className={style.socialIcon} href="#">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FundraisingSidebar;
