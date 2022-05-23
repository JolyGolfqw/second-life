import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { createShelter } from "../../redux/features/application";
import { useDispatch } from "react-redux";
import style from "./shelterRegistration.module.css";
import { editShelter } from "../../redux/features/shelters";

const EditShelter = ({ show, setShow, shelter }) => {

  const [name, setName] = useState(shelter.name && shelter.name);
  const [contacts, setContacts] = useState(shelter.contacts && shelter.contacts);
  const [address, setAddress] = useState(shelter.address);
  const [email, setEmail] = useState(shelter.email);
  const [requisities, setRequisities] = useState(shelter.requisites);
  const [description, setDescription] = useState(shelter.description);

  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");

  console.log(shelter.avatar);

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [photo]);

  const dispatch = useDispatch();

  const shelterRegistration = (e) => {
    e.preventDefault();
    // console.log(
    //   shelter._id,
    //   photo,
    //   name,
    //   contacts,
    //   address,
    //   email,
    //   requisities,
    //   description
    // );
    dispatch(
      editShelter(
        shelter._id,
        photo,
      name,
      contacts,
      address,
      email,
      requisities,
      description
      )
    );
  };

  return (
    <Modal
      size="xl"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      centered
    >
      <Modal.Body>
        <form className={style.card}>
          <div className={style.card_header}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
              ></path>
            </svg>
            <h1 className={style.form_heading}>Регистрация</h1>
          </div>
          <div className={style.wrapper}>
            <div className={style.avatar}>
              <input
                type="file"
                id="upload"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substring(0, 5) === "image") {
                    setPhoto(file);
                  } else {
                    setPhoto(null);
                  }
                }}
              />
              <img
                src={
                  preview ? preview : `http://localhost:4000/${shelter.avatar}`
                }
                alt=""
              />
              <label htmlFor="upload">
                <ion-icon name="create-outline"></ion-icon>
              </label>{" "}
            </div>

            <div className={style.form_inputs}>
              <div className={style.field}>
                <label htmlFor="name">Название приюта</label>
                <input
                  className={style.input}
                  name="name"
                  type="text"
                  placeholder="Введите название приюта"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={style.form_inputs}>
              <div className={style.field}>
                <label htmlFor="contacts">Контактные данные</label>
                <input
                  className={style.input}
                  name="contacts"
                  type="contacts"
                  placeholder="+7-(000)-000-00-00"
                  id="contacts"
                  value={contacts && contacts}
                  onChange={(e) => setContacts(e.target.value)}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="address">Адрес</label>
                <input
                  className={style.input}
                  name="addresss"
                  type="text"
                  placeholder="Введите адрес приюта"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="email">Почта</label>
                <input
                  className={style.input}
                  name="email"
                  type="text"
                  placeholder="Введите ваш email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="requisities">Введите ваши реквизиты</label>
                <input
                  className={style.input}
                  name="requisities"
                  type="text"
                  placeholder="0000-0000-0000-0000"
                  id="requisities"
                  value={requisities}
                  onChange={(e) => setRequisities(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={style.description}>
            <textarea
              name="description"
              maxLength="1000"
              placeholder="Описание приюта"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={style.buttonPosition}>
            <div className={style.field}>
              <button onClick={shelterRegistration}>Сохранить*</button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditShelter;
