import React from "react";
import CatalogPets from "../../components/CatalogPets/CatalogPets";
import Header from "../../components/Header/Header";
import SearchPets from "../../components/SearchPets/SearchPets";
import Footer from "../../components/Footer/Footer";

export default function Pets() {
  return (
    <>
      <Header />
      <CatalogPets />
      <SearchPets />
      <Footer />
    </>
  );
}
