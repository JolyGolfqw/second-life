import React from "react";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import QuestionsAndAnswers from "../../components/QuestionsAndAnswers/QuestionsAndAnswers";
import SearchPetsInShelters from "../../components/SearchPetsInShelters/SearchPetsInShelters";
import ShelterFaceCard from "../../components/ShelterFaceCard/ShelterFaceCard";

export default function ShelterPage() {
  return (
    <>
      <Header />
      <ShelterFaceCard />
      <Gallery/>
      <SearchPetsInShelters />
      <QuestionsAndAnswers />
      <Footer />
    </>
  );
}
