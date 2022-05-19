import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import style from "./changeSheltersAndPets.module.css";
import { useState } from "react";
const ChangeSheltersAndPets = () => {
  const [value, setValue] = useState([1, 2]);

  const handleChange = (val) => setValue(val);

  return (
    <div className={style.changeSheltersAndPets}>
      <ToggleButtonGroup
        type="checkbox"
        value={value}
        onChange={handleChange}
        className={style.btn}
      >
        <ToggleButton id="tbg-btn-1" value={1}>
          Животные из приюта
        </ToggleButton>

        <ToggleButton id="tbg-btn-2" value={2}>
          Животные от пользователей
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ChangeSheltersAndPets;
