import { Dropdown } from "bootstrap";
import React from "react";

const Petstypesdropdown = () => {
  return (
    <Dropdown className="petsDrop">
      <Dropdown.Toggle className={"dropdown"} id="dropdown-basic">
        Пол
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>...</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Petstypesdropdown;
