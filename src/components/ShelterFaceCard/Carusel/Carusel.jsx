import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../Carusel/carusel.module.css";
import { useSelector } from "react-redux";

//!! КАРУСЕЛЬ ПИТОМЦЕВ
const WhileReadingCarousel = () => {
  const pets = useSelector((state) => state.pets.items);

  //!! ФИЛЬТР НА КАРАСУЛЬ
  const filteredPetsforCaruosel = pets.slice(0, 6);
  console.log(filteredPetsforCaruosel, "carousel");

  return (
    <div className={style.carouselSize}>
      <Carousel
        variant="dark"
        interval="4000"
        controls={true}
        indicators={false}
        wrap={true}
      >
        <Carousel.Item>
          <div className={style.reversCard}>
            {filteredPetsforCaruosel.map((item, index) => {
              return index % 2 === 0 ? (
                <div className={style.card} key={index}>
                  <div className={style.cardImg}>
                    <img
                      alt="avatar"
                      src={`http://localhost:4000/${item.img}`}
                    ></img>
                  </div>
                  <div className={style.cardInfo}>
                    <p className={style.subtitle}>{item.name}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.reversCard}>
            {filteredPetsforCaruosel.map((item, index) => {
              return index % 2 !== 0 ? (
                <div className={style.card} key={index}>
                  <div className={style.cardImg}>
                    <img
                      alt="avatar"
                      src={`http://localhost:4000/${item.img}`}
                    ></img>
                  </div>
                  <div className={style.cardInfo}>
                    <p className={style.subtitle}>{item.name}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WhileReadingCarousel;
