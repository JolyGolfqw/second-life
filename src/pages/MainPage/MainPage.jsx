import React from "react";
import CardPointer from "../../components/CardPointer/CardPointer";
import Donation from "../../components/Donation/Donation";
import MapCard from "../../components/MapCard/MapCard";
import Header from "../../components/Header/Header";
import FaceCard from "../../components/FaceCard/FaceCard";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
  return (
    <>
      <Header />
      <FaceCard />
      <CardPointer />
      <MapCard />
      <Donation />
      <Footer />
    </>
  )
}
