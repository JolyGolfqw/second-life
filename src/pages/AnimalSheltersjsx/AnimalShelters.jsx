import React from "react";
import Header from "../../components/Header/Header";
import HelpSheltersCard from "../../components/HelpSheltersCard/HelpSheltersCard";
import OurShelters from "../../components/OurShelters/OurShelters";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";

export default function AnimalShelters() {
  return (
    <>
      <Header />
      <HelpSheltersCard />
      <OurShelters />
      <News/>
      <Footer />
    </>
  );
}
