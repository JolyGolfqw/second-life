import React from "react";
import style from "./donation.module.css";
import { Link } from "react-router-dom";
import IconsDonation from "./IconsDonation";

const CenterContentDonation = () => {
  return (
    <div className={style.centerDonatContent}>
      <div className={style.imageCircle}>
        <IconsDonation />
        <img
          src="https://c.pxhere.com/photos/22/e3/canon_l_f2_usm_ef_135mm-145752.jpg!d"
          alt="donatImage"
        />
        <Link to={"/animal-shelters"}>
          <button className={style.btn}>Сделать пожертвование</button>
        </Link>
      </div>
    </div>
  );
};

export default CenterContentDonation;
