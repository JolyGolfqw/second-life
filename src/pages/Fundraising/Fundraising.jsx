import React from "react";
import Footer from "../../components/Footer/Footer";
import FundraisingCard from "../../components/FundraisingCard/FundraisingCard";
import Header from "../../components/Header/Header";
import style from './fundraising.module.css'

const Fundraising = () => {
  return (
    <>
      {/* <Header /> */}
      <div className={style.container}>
        <FundraisingCard />
      </div>
      <Footer />
    </>
  );
};

export default Fundraising;
