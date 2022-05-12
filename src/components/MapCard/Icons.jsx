import React from 'react';
import style from "../MapCard/mapCard.module.css";

const Icons = () => {
    return (
        <>
            <div className={style.iconsMapCardOne}>
              <ion-icon name="paw-outline"></ion-icon>
            </div>
            <div className={style.iconsMapCardTwo}>
              <ion-icon name="paw-outline"></ion-icon>
            </div>
            <div className={style.iconsMapCardThree}>
              <ion-icon name="paw-outline"></ion-icon>
            </div>
            <div className={style.iconsMapCardFour}>
              <ion-icon name="paw-outline"></ion-icon>
            </div> 
        </>
    );
};

export default Icons;