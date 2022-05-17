import React from "react";
import style from "../../components/News/news.module.css";
import imageNews from "../../assets/news.jpg";
import NewsRender from "./NewsRender";
const News = () => {
  const news = [
    {
      img: imageNews,
      title: "Девятиклассница организовали акцию 'Доброе сердце'",
      description:
        "Учащиеся 9а класса МБОУ 'СОШ 23' г.Грозного совместно с классным руководителем Исаевой М.Х. организовали и провели акцию 'Доброе сердце' для оказания помощи приюту для животных 'Надежда на жизнь'. От лица всех волонтеров хотим выразить огромную благодарность за эту акцию. Спасибо большое . Прививать чувство милосердия к животным это очень важно и значимо. Спасибо учителям и детям!",
    },
  ];
  return (
    <div className={style.newsPosition}>
      {news.map((item, index) => {
        return <NewsRender item={item} key={index} />;
      })}
    </div>
  );
};

export default News;
