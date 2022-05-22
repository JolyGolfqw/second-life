import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../redux/features/news";
import NewsRender from "../../components/News/NewsRender";
import style from "./carouselNews.module.css";
const CarouselNews = () => {
  const news = useSelector((state) => state.news.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);
  return (
    <div className={style.carouselNewsPosition}>
      <div className={style.carouselNewsTitle}>Новости</div>
      <Carousel
        variant="dark"
        interval="3000"
        controls={true}
        indicators={false}
        wrap={true}
      >
        {news.map((item, index) => {
          const data = item.date.toString();
          const year = data.slice(0, 10);
          const time = data.slice(11, 19);
          const date = `${year} ${time}`;
          return (
            <Carousel.Item key={index}>
              <NewsRender
                title={item.title}
                description={item.description}
                image={item.image}
                date={date}
                key={index}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselNews;
