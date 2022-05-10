import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer>
      <div className={style.contentFoot}>
        <div className={style.logo}>Хатико</div>
        <div className={style.navigate}>
            <Link to={"/"} className={style.listFoot}>Посещение приюта</Link>
            <Link to={"/"} className={style.listFoot}>Питомцы</Link>
            <Link to={"/"} className={style.listFoot}>Помощь приюту</Link>
            <Link to={"/"} className={style.listFoot}>Вопросы и ответы</Link>
            <Link to={"/"} className={style.listFootSingIn}>+7 (989) 000-00-00</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
