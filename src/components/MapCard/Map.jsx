import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandMap = () => {
  return (
    <div>
      <YMaps>
        <div className="map">
          <Map
            width={"100%"}
            height={"450px"}
            defaultState={{ center: [43.31, 45.68], zoom: 10 }}
          >
            <Placemark geometry={[43.31, 45.68]} />
            <Placemark geometry={[43.32, 45.72]} />
            <Placemark geometry={[43.34, 45.7]} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandMap;
