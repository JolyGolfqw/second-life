import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchPetsDropdown.module.css";
// import { Link } from "react-router-dom";

export default function SearchPetsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle className={"dropdown"} id="dropdown-basic">
        Поиск по приюту
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Приют 1</Dropdown.Item>
        <Dropdown.Item>Приют 2</Dropdown.Item>
        <Dropdown.Item>Приют 3</Dropdown.Item>
        <Dropdown.Item>Приют 4</Dropdown.Item>
        <Dropdown.Item>Приют 5</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
