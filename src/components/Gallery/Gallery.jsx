import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "../../redux/features/gallery";
import style from "../Gallery/gallery.module.css";
import FullPhotoModal from "../Modal/FullPhotoModal";
const Gallery = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState("");

  const openModal = (img) => {
    setPhoto(img);
    setShow(true);
    console.log(photo);
  };

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const images = useSelector((state) => state.gallery.items);
  return (
    <div className={style.galleryPosition}>
      <div className={style.galleryContent}>
        <div className={style.galleryTitle}>Галерея</div>
        <div className={style.galleryBoxImages}>
          {images.map((item, index) => {
            return index % 2 === 0 ? (
              <div className={style.evenImages} key={index}>
                <img
                  onClick={(e) => openModal(item.image)}
                  src={`http://localhost:4000/${item.image}`}
                  alt="img"
                ></img>
                <FullPhotoModal
                  show={show}
                  setShow={setShow}
                  image={`http://localhost:4000/${photo}`}
                />
              </div>
            ) : (
              <div className={style.oddImages} key={index}>
                <img
                  onClick={(e) => openModal(item.image)}
                  src={`http://localhost:4000/${item.image}`}
                  alt="img"
                ></img>
                <FullPhotoModal
                  show={show}
                  setShow={setShow}
                  image={`http://localhost:4000/${photo}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
