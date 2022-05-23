import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link } from "react-router-dom";
import Gallerymodal from "../Modal/GalleryModal";
import EditShelter from "../ShelterRegistration/EditShelter";
import { useDispatch, useSelector } from "react-redux";
import { loadShelters } from "../../redux/features/shelters";

export default function ShelterProfileDropdown() {
  const [show, setShow] = useState(false);  
  const [showGallery, setShowGallery] = useState(false);

  const dispatch = useDispatch()
  
  useEffect(() => {
    loadShelters()
  }, [dispatch])

  const shelters = useSelector((state => state.shelters.items) )
  const shelter = shelters && shelters.find(item => item._id === "628393995fb7cdb7a412ee94")
  console.log(shelter);

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
          <span onClick={() => setShowGallery(true)} className="dropItem">
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
        {/* <Dropdown.Item>
          <span onClick={() => setShow(true)} className="dropItem">
          Редактировать профиль
          </span>
        </Dropdown.Item> */}
        <Dropdown.Item>
            Выйти
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Gallerymodal showGallery={showGallery} setShowGallery={setShowGallery}/>
    
    {/* <EditShelter shelter={shelter} show={show} setShow={setShow}/> */}
    </>
  );
}
