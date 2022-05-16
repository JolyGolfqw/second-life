import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import style from "./petForm.module.css";
import PetsGenderCheckbox from "./PetsGenderCheckbox/PetsGenderCheckbox";
import { FloatingLabel, Form } from "react-bootstrap";

export default function PetForm() {
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");

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

  return (
    <div className={style.petForm}>
      <div className={style.createImage}>
        <div>
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
              <img src={preview} alt="" />
              <label htmlFor="upload">
                <ion-icon name="create-outline"></ion-icon>
              </label>{" "}
            </>
          ) : (
            <label htmlFor="upload">
              <img
                className={style.previewImg}
                src="https://www.babypillowth.com/images/templates/upload.png"
                alt=""
              />
            </label>
          )}
        </div>
      </div>

      <div>
        <div>
          <TextField
            id="standard-basic"
            label="Имя питомца"
            variant="standard"
          />
        </div>

        <PetsGenderCheckbox />

        <div>
          <TextField id="standard-basic" label="Возраст" variant="standard" />
        </div>

        <div>
          <FloatingLabel controlId="floatingTextarea2" label="Описание">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
        </div>

        <div>
          <Form.Select aria-label="Default select example">
            <option>Категория животного</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
}
