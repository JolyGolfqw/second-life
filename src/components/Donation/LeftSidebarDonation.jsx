import React from 'react';
import style from "./donation.module.css";

const LeftSidebarDonation = () => {
    return (
        <div className={style.leftDonatContent}>
        <div className={style.leftCheckPoint}>
          <div className={style.titleLeft}>Взять питомца</div>
          <div className={style.subtitleLeft}>
            Более 50 собак и котов <br /> ждут своего нового хозяина
          </div>
        </div>
        <div className={style.leftCheckPoint}>
          <div className={style.titleLeft}>Финансовая помочь</div>
          <div className={style.subtitleLeft}>
            Можно перевести небольшую
            <br /> сумму для поддержки приюта
          </div>
        </div>
      </div>
    );
};

export default LeftSidebarDonation;