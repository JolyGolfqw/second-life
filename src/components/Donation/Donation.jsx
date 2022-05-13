import React from "react";
import style from "./donation.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import RightSidebarDonation from "./RightSidebarDonation";
import LeftSidebarDonation from "./LeftSidebarDonation";
import CenterContentDonation from "./CenterContentDonation";

const Donation = () => {
  return (
    <div className={style.donatBlock}>
      <div className={style.titleAndSubtitle}>
        <div className={style.mainTitle}>Как можно помочь приюту?</div>
        <div className={style.mainSubtitle}>
          В данный момент животные в приюте живут исключительно
          <br /> на пожертвования и они очень нуждаются в вашей поддержке
        </div>
      </div>
      <div className={style.donatContent}>
        <div className={style.donatContentPosition}>
          <LeftSidebarDonation />
          <CenterContentDonation />
          <RightSidebarDonation />
        </div>
      </div>
    </div>
  );
};

export default Donation;
