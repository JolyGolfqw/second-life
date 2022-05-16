import React from "react";
import style from "../Gallery/gallery.module.css";
const Gallery = () => {
  const galleryImages = [
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-pet-portrait-dog_23-2149218450.jpg?t=st=1652545020~exp=1652545620~hmac=8841b361d1122f2f3be9480e939489b966883c89b05057f648d6bc5dcae1f6a1&w=900",
    },
    {
      image:
        "https://img.freepik.com/free-photo/adorable-white-black-kitty-with-monochrome-wall-her_23-2148955171.jpg?w=360&t=st=1652550772~exp=1652551372~hmac=d09667cf2b7bc97d29c932139231c27beea811ea82f20df22f69f019647f8a4b",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-adorable-white-golden-retriever-with-white-headphones-lying-floor_181624-57296.jpg?w=740",
    },
    {
      image:
        "https://img.freepik.com/free-photo/adorable-white-kitty-with-monochrome-wall-her_23-2148955155.jpg?w=740",
    },
    {
      image:
        "https://img.freepik.com/free-photo/close-up-view-beautiful-dog-with-bow-tie_23-2148786567.jpg?w=900",
    },
    {
      image:
        "https://img.freepik.com/free-photo/grey-kitty-with-monochrome-wall-her_23-2148955114.jpg?t=st=1652545784~exp=1652546384~hmac=49aa0cf306fed64a4f97611883fdc5c90c0569a75afcac86a31794f7efebfa06&w=360",
    },
  ];

  return (
    <div className={style.galleryPosition}>
      <div className={style.galleryContent}>
        <div className={style.galleryTitle}>Галерея</div>
        <div className={style.galleryBoxImages}>
          {galleryImages.map((item, index) => {
            return index % 2 === 0 ? (
              <div className={style.evenImages} key={index}>
                <img src={item.image} alt="img"></img>
              </div>
            ) : (
              <div className={style.oddImages}  key={index}>
                <img src={item.image} alt="img"></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
