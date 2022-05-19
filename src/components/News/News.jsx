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
        return <NewsRender title={item.title} description={item.description} image={item.image} key={index} />;
      })}
    </div>
  );
};

export default News;
