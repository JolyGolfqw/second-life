import React from "react";
import style from "./donation.module.css";
import { Link } from "react-router-dom";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";

const Donation = () => {
  return (
    <div className={style.donatBlock}>
      <div className={style.titleAndSubtitle}>
        <div className={style.mainTitle}>Как можно помочь приюту?</div>
        <div className={style.mainSubtitle}>
          В данный момент животные в приюте живут исключительно
          <br /> на пожертвования и они очень нуждаются в вашей поддержке
        </div>
      </div>
      <div className={style.donatContent}>

        {/* LEFT */}
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

        {/* CENTR */}
        <div className={style.centerDonatContent}>
          <div className={style.imageCircle}>
            {/* CHECKPOINTS */}
            <div className={style.checkpointOne}>
              <ion-icon name="disc-outline"></ion-icon>
            </div>
            <div className={style.checkpointTwo}>
              <ion-icon name="disc-outline"></ion-icon>
            </div>
            <div className={style.checkpointThree}>
              <ion-icon name="disc-outline"></ion-icon>
            </div>
            <div className={style.checkpointFour}>
              <ion-icon name="disc-outline"></ion-icon>
            </div>
            <img
              src="https://c.pxhere.com/photos/22/e3/canon_l_f2_usm_ef_135mm-145752.jpg!d"
              alt="donatImage"
            />
            {/* BUTTON */}
            <Link to={"/"}>
              <button className={style.btn}>Сделать пожертвование</button>
            </Link>
          </div>
        </div>
        
        {/* RIGHT  */}
        <div className={style.rightDonatContent}>
          <div className={style.rightCheckPoint}>
            <div className={style.titleRight}>Стать волонтером</div>
            <div className={style.subtitleRight}>
              Для тех, кто любит животных и готов
              <br /> помочь своей энергией и временем
            </div>
          </div>
          <div className={style.rightCheckPoint}>
            <div className={style.titleRight}>Вещи и амуниция</div>
            <div className={style.subtitleRight}>
              Принимаем в подарок
              <br /> хозяйственные вещи и зоотовары
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
