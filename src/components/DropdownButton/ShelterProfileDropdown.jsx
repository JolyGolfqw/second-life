import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link } from "react-router-dom";
import Gallerymodal from "../Modal/GalleryModal";

export default function ShelterProfileDropdown() {
  const [show, setShow] = useState(false);  

  return (
    <>
    <Dropdown className="headerDrop shelterDrop">
      <Dropdown.Toggle className={"dropdown"} id="dropdown-basic">
        НАДЕЖДА НА ЖИЗНЬ
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link className="dropItem" to="/shelter-page-profile/628393995fb7cdb7a412ee94">
            Личный кабинет
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <span onClick={() => setShow(true)} className="dropItem">
           Галерея
          </span>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="dropItem" to="/shelter-pets-form">
            Добавить питомца
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="dropItem" to="/fundraising-page-form">
            Объявить сбор
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="dropItem" to="/news-form">
            Добавить новость
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
            Выйти
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Gallerymodal show={show} setShow={setShow}/>
    </>
  );
}
