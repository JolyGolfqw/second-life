import React from "react";
import styles from "./header.module.css";
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
      <div className={styles.contentHead}>
        <div className={styles.logo}>hatiko</div>
        <div className={styles.navigate}>
          {headArr.map((item) => {
            return (
              <Link to={"/"} className={styles.listHead}>
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
