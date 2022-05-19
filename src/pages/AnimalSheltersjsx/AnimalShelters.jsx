import React from "react";
import Header from "../../components/Header/Header";
import HelpSheltersCard from "../../components/HelpSheltersCard/HelpSheltersCard";
import OurShelters from "../../components/OurShelters/OurShelters";
import Footer from "../../components/Footer/Footer";
import PersonalPage from "../../components/PersonalPage/PersonalPage";

export default function AnimalShelters() {
  return (
    <>
      <Header />
      <HelpSheltersCard />
      <OurShelters />
      <PersonalPage/>
      <Footer />

    </>
  );
}
