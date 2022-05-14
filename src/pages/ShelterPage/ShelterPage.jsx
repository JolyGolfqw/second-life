import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import OurPets from "../../components/OurPets/OurPets";
import QuestionsAndAnswers from "../../components/QuestionsAndAnswers/QuestionsAndAnswers";
import SearchPetsInShelters from "../../components/SearchPetsInShelters/SearchPetsInShelters";
import ShelterFaceCard from "../../components/ShelterFaceCard/ShelterFaceCard";

export default function ShelterPage() {
  return (
    <>
      <Header />
      <ShelterFaceCard />
      <OurPets />
      <SearchPetsInShelters />
      <QuestionsAndAnswers />
      <Footer />
    </>
  );
}