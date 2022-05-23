import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPetKeeping } from "../../redux/features/petsKeeping";
import style from "../CreateShelters/createShelters.module.css";
import PetsGenderCheckbox from "../PetForm/PetsGenderCheckbox/PetsGenderCheckbox";
import { useSelector } from "react-redux";

//!! ОТДАТЬ НА ПРИСМОТР
const CreateShelters = () => {
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petDesc, setPetDesc] = useState("");
  const [petCategory, setPetCategory] = useState("");
  const [petGender, setPetGender] = useState("Мужской");
  const [petPrice, setPetPrice] = useState("");
  const [period, setPeriod] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const category = useSelector((state) => state.categories.items);

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
  const handlePetPrice = (e) => setPetPrice(e.target.value);
  const handlePeriod = (e) => setPeriod(e.target.value);
  const handleContact = (e) => setContact(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const saveForm = () => {
    dispatch(
      addPetKeeping(
        photo,
        petName,
        petAge,
        petGender,
        petDesc,
        petCategory,
        petPrice,
        period,
        contact,
        address
      )
    );
  };

  return (
    <>
      <div className={style.createSheltersMainBox}>
        <div className={style.createSheltersPosition}>
          {/* //!! ЗАГРУЗЧИК ФОТОГРАФИЙ */}
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
                      alt="img"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* //!! ПОЛЕ ВВОДА ПАРАМЕТРОВ */}
          <div className={style.createSheltersDetails}>
            <div className={style.createSheltersTitle}>
              <span>Отдать на присмотр</span>
            </div>
            <div className={style.createSheltersFuncional}>

              {/* //!! ИМЯ ПИТОМЦА */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Имя питомца </h6>
                <input
                  value={petName}
                  onChange={(e) => handlePetName(e)}
                  type="text"
                  placeholder="Морти"
                />
              </div>

              {/* //!! ПОЛ ПИТОМЦА */}
              {radios.map((radio, index) => (
                <PetsGenderCheckbox
                  radio={radio}
                  key={index}
                  petGender={petGender}
                  setPetGender={setPetGender}
                />
              ))}

              {/* //!! ВОЗРАСТ ПИТОМЦА */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Возраст питомца </h6>
                <input
                  value={petAge}
                  onChange={(e) => handlePetAge(e)}
                  type="text"
                  placeholder="10 месяцев"
                />
              </div>

              {/* //!! ОПИСАНИЕ ПИТОМЦА */}
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

              {/* //!! ТИП ПИТОМЦА */}
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

              {/* //!! ВРЕМЯ ПРИСМОТРА */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Период присмотра</h6>
                <input
                  value={period}
                  onChange={(e) => handlePeriod(e)}
                  type="text"
                  placeholder="2 недели..."
                />
              </div>

              {/* //!! ОПЛАТА */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Оплата</h6>
                <input
                  value={petPrice}
                  onChange={(e) => handlePetPrice(e)}
                  type="text"
                  placeholder="По стандарту / договорная"
                />
              </div>

              {/* //!! ТЕЛЕФОН НОМЕР */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Номер для связи </h6>
                <input
                  value={contact}
                  onChange={(e) => handleContact(e)}
                  type="tel"
                  placeholder="8 (929) 000-00-00"
                />
              </div>

              {/* //!! АДРЕС */}
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

            {/* //!! КНОПКА СОХРАНИТЬ */}
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
};

export default CreateShelters;
