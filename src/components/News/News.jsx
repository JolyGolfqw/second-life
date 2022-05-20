import React, { useEffect } from "react";
import style from "../../components/News/news.module.css";
import imageNews from "../../assets/news.jpg";
import NewsRender from "./NewsRender";
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../redux/features/news";
const News = () => {
 const dispatch = useDispatch()

 const news = useSelector(state => state.news.items)

 useEffect(() => {
  dispatch(loadNews())
 }, [dispatch])

 console.log(news)
 
  return (
    <div className={style.newsPosition}>
      {news.map((item, index) => {
        const data = item.date.toString();
        const year = data.slice(0, 10);
        const time = data.slice(11, 19);
        const date = `${year} ${time}`;
        return <NewsRender title={item.title} description={item.description} image={item.image} date={date} key={index} />;
      })}
    </div>
  );
};

export default News;
