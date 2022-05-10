import React from "react";
import CardPointer from "../../components/CardPointer/CardPointer";
import PetsCard from "../../components/PetsCard/PetsCard";
import Donation from "../../components/Donation/Donation";
import MapCard from "../../components/MapCard/MapCard";

export default function Pets() {
  return (
    <>
      <PetsCard />
      <CardPointer />
      <Donation/>
      <MapCard/>
    </>
  );
}
