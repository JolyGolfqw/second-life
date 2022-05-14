import React from "react";
import { Dropdown } from "react-bootstrap";

export default function PetsDropdown() {
  return (
    <Dropdown className="petsDrop">
      <Dropdown.Toggle className={"dropdown"} id="dropdown-basic">
        Пол
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Мужской</Dropdown.Item>
        <Dropdown.Item>Женский</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
