import React from "react";
import TextField from "@mui/material/TextField";
import style from './petForm.module.css'

export default function PetForm() {
  return (
    <div className={style.petForm}>
      <img
        src="https://i.pinimg.com/474x/77/01/9b/77019bdbb08909fa0c07f97841c2e95d.jpg"
        alt=""
      />
      <div>
        <div>
          <TextField id="standard-basic" label="Имя питомца" variant="standard"/>
        </div>

        <div>
          <TextField id="standard-basic" label="Пол" variant="standard" />
        </div>

        <div>
          <TextField id="standard-basic" label="Возраст" variant="standard" />
        </div>

        <div>
          <TextField id="standard-basic" label="Описание" variant="standard" />
        </div>

        <div>
          <TextField id="standard-basic" label="Тип" variant="standard" />
        </div>
      </div>
    </div>
  );
}
