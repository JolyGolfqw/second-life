import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../Carusel/carusel.module.css";

const WhileReadingCarousel = () => {
  return (
    <div className={style.carouselSize}>
      <Carousel interval="4000" controls={true} indicators={false} wrap={true}>
        <Carousel.Item>
          <div className={style.reversCard}>
            <div className={style.imageContent}>
              <div className={style.titleContent}>
                <span>Кошки</span>
              </div>
              <img alt="img" src="https://thumbs.dreamstime.com/b/%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D0%BA%D0%BE%D1%82-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-156815624.jpg"></img>
            </div>
            <div className={style.imageContent}>
              <div className={style.titleContent}>
                <span>Собаки</span>
              </div>
              <img alt="img" src="https://wildfrontier.ru/wp-content/uploads/2015/06/Dzhek-rassel-terer-shhenki4.jpg"></img>
            </div>
            <div className={style.imageContent}>
              <div className={style.titleContent}>
                <span>Кролики</span>
              </div>
              <img alt="img" src="https://thumbs.dreamstime.com/b/e-%D0%BA%D1%80%D0%BE%D0%BB%D0%B8%D0%BA-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BA%D0%B5-150713489.jpg"></img>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={style.reversCard}>
            <div className={style.imageContent}>
              <div className={style.titleContent}>
                <span>Черепашки</span>
              </div>
              <img alt="img" src="https://img.freepik.com/free-photo/turtle-on-white-background_64161-248.jpg?w=2000"></img>
            </div>
            <div className={style.imageContent}>
              <div className={style.titleContent}>
                <span>Птицы</span>
              </div>
              <img alt="img" src="https://99px.ru/sstorage/53/2016/05/tmb_164498_4296.jpg"></img>
            </div>
            <div className={style.imageContent}>
              <div className={style.titleContent}>
                <span>Хомяки</span>
              </div>
              <img alt="img" src="https://st4.depositphotos.com/8499796/26776/i/600/depositphotos_267763170-stock-photo-syrian-hamster-on-a-white.jpg"></img>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WhileReadingCarousel;
