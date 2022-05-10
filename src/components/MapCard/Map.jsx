import React from "react";
import style from "../MapCard/mapCard.module.css";

const YandMap = () => {
  
  return (
    <div className={style.configMap}>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A36917e96354b2512f3535947ab80d382fe0c39ed098a8cd8de12d1d1cab784f4&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
    </div>
  );
};

export default YandMap;
