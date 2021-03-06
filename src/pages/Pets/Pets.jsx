import React from "react";
import CatalogPets from "../../components/CatalogPets/CatalogPets";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PetsCard from "../../components/PetsCard/PetsCard";

export default function Pets() {
  return (
    <>
      <Header />
      <CatalogPets />
      <PetsCard />
      <Footer />
    </>
  );
}
