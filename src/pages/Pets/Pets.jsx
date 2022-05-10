import React from "react";
import CardPointer from "../../components/CardPointer/CardPointer";
// import PetsCard from "../../components/PetsCard/PetsCard";
import Donation from "../../components/Donation/Donation";
import MapCard from "../../components/MapCard/MapCard";
import Header from "../../components/Header/Header";
import FaceCard from "../../components/FaceCard/FaceCard";
export default function Pets() {
  return (
    <>
      <Header />
      <FaceCard/>
      <CardPointer />
      <MapCard />
      <Donation />
    </>
  );
}
