import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link } from "react-router-dom";

export default function ServicesDropdown() {
  return (
    <Dropdown className="headerDrop">
      <Dropdown.Toggle className={"dropdown"} id="dropdown-basic">
        Услуги
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item >
          <Link className="dropItem" to="/pet-control-form">
            Отдать на присмотр
          </Link>
        </Dropdown.Item>
        <Dropdown.Item componentclass='span'>
          <Link className="dropItem" to="/pet-give-away-form">
            Отдать в добрые руки
          </Link>
        </Dropdown.Item>
				<Dropdown.Item componentclass='span'>
          <Link className="dropItem" to="/take-care-pet">
            Взять питомца на время
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
