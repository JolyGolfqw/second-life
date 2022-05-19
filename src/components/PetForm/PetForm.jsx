import React, { useEffect, useState } from "react";
import style from "./petForm.module.css";
import PetsGenderCheckbox from "./PetsGenderCheckbox/PetsGenderCheckbox";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPet } from "../../redux/features/pets";
import { useSelector } from "react-redux";
export default function PetForm() {
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petDesc, setPetDesc] = useState("");
  const [petCategory, setPetCategory] = useState("");
  const [petGender, setPetGender] = useState("Мужской");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const category = useSelector((state) => state.category.items);

  const dispatch = useDispatch();

  const radios = [
    { name: "Мужской", value: "Мужской" },
    { name: "Женский", value: "Женский" },
  ];

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

  const handlePetName = (e) => setPetName(e.target.value);
  const handlePetAge = (e) => setPetAge(e.target.value);
  const handlePetDesc = (e) => setPetDesc(e.target.value);
  const handlePetCategory = (e) => setPetCategory(e.target.value);
  const handleContact = (e) => setContact(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const saveForm = () => {
    dispatch(
      addPet(
        photo,
        petName,
        petAge,
        petGender,
        petDesc,
        petCategory,
        contact,
        address
      )
    );
  };

  return (
    <>
      <div className={style.createSheltersMainBox}>
        <div className={style.createSheltersPosition}>
          {/* //! IMAGE UPLOAD */}
          <div className={style.createSheltersFlex}>
            <div className={style.createSheltersFileUpload}>
              <div className={style.createSheltersImage}>
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
                {preview ? (
                  <>
                    <img src={preview} alt="fileUpload" />
                    <label htmlFor="upload">
                      <ion-icon name="create-outline"></ion-icon>Изменить
                    </label>
                  </>
                ) : (
                  <label htmlFor="upload">
                    <img
                      className={style.previewImg}
                      src="https://www.babypillowth.com/images/templates/upload.png"
                      alt="icon"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/*//!INPUT FIELDS */}
          <div className={style.createSheltersDetails}>
            <div className={style.createSheltersTitle}>
              <span>Отдать в добрые руки</span>
            </div>
            <div className={style.createSheltersFuncional}>
              {/* NAME PETS */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Имя питомца </h6>

                <input
                  value={petName}
                  onChange={(e) => handlePetName(e)}
                  type="text"
                  placeholder="Морти"
                />
              </div>
              {/* GENDER PETS */}
              {radios.map((radio, idx) => (
                <PetsGenderCheckbox
                  radio={radio}
                  idx={idx}
                  petGender={petGender}
                  setPetGender={setPetGender}
                />
              ))}
              {/* AGE PETS */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Возраст питомца </h6>
                <input
                  value={petAge}
                  onChange={(e) => handlePetAge(e)}
                  type="text"
                  placeholder="10 месяцев"
                />
              </div>

              {/* DISCRIOTION */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Описание</h6>
                <textarea
                  value={petDesc}
                  onChange={(e) => handlePetDesc(e)}
                  placeholder="Расскажите про питомца, какой уход необходим, кто вам нужен и т.д."
                  name="text"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              {/* TYPE PETS */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Тип животного</h6>
                <Form.Select
                  value={petCategory}
                  onChange={(e) => handlePetCategory(e)}
                  aria-label="Default select example"
                >
                  {category.map((item, index) => {
                    return <option index={index}>{item.category}</option>;
                  })}
                </Form.Select>
              </div>

              {/* PHONE NUMBER */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Номер для связи </h6>
                <input
                  value={contact}
                  onChange={(e) => handleContact(e)}
                  type="tel"
                  placeholder="8 (929) 000-00-00"
                />
              </div>

              {/* ADRESS */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Адрес </h6>
                <input
                  value={address}
                  onChange={(e) => handleAddress(e)}
                  type="text"
                  placeholder="Грозный, ул. Г. Трошева 7..."
                />
              </div>
            </div>
            {/* BUTTON */}
            <div className={style.buttonPositionCreateShelters}>
              <Button
                onClick={saveForm}
                variant="primary"
                className={style.btn}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
