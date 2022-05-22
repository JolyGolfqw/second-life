import React from "react";
import Header from "../../components/Header/Header";
import PetsCardIsShelter from "../../components/PetsCard/PetsCardIsShelter";
import Footer from "../../components/Footer/Footer";
import CatalogPetsIsShelter from "../../components/CatalogPets/CatalogPetsIsShelter";

export default function PetsIsShelter() {
  return (
    <>
      <Header />
      <CatalogPetsIsShelter />
      <PetsCardIsShelter />
      <Footer />
    </>
  );
}
