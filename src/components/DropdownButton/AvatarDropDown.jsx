import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AvatarDropDown({id}) {

	const name = useSelector(state => state.application.name)

  return (
    <Dropdown className="headerDrop">
      <Dropdown.Toggle className={"dropdown-user"} id="dropdown-basic">
        <div className="account">
          <div className="avatar-wrapper">
            <img
              src="https://i04.fotocdn.net/s111/799fe6f493c0c11a/public_pin_l/2493173933.jpg"
              alt="avatar"
            />
          </div>
          <h6>{name}</h6>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link className="dropItem" to={`/profile/${id}`}>
            Личная страница
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="dropItem" to="/pet-give-away-form">
            Выйти
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
