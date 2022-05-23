import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Gallerymodal from "../Modal/GalleryModal";
import EditShelter from "../ShelterRegistration/EditShelter";
import { useDispatch, useSelector } from "react-redux";
import { loadShelters } from "../../redux/features/shelters";

export default function ShelterProfileDropdown({id}) {

  const [show, setShow] = useState(false);  
  // const [showGallery, setShowGallery] = useState(false); 
	
	const name = useSelector(state => state.application.shelterName)

	const navigate = useNavigate();

	const logOut = () => {
		localStorage.clear();
		window.location.reload();
		return navigate('/');
	}


  const shelters = useSelector((state => state.shelters.items) )
  const shelter = shelters && shelters.find(item => item._id === id)
  console.log(shelter);

  return (
    <>
    <Dropdown className="headerDrop shelterDrop">
      <Dropdown.Toggle className={"dropdown"} id="dropdown-basic">
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link className="dropItem" to={`/shelter-page-profile/${id}`}>
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
        {/* <Dropdown.Item>
          <span onClick={() => setShow(true)} className="dropItem">
          Редактировать профиль
          </span>
          </Dropdown.Item> */}
        <Dropdown.Item onClick={logOut}>
            Выйти
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Gallerymodal show={show} setShow={setShow}/>
    
    {/* <EditShelter shelter={shelter} show={show} setShow={setShow}/> */}
    </>
  );
}
