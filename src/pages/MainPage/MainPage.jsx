import React from "react";
import CardPointer from "../../components/CardPointer/CardPointer";
import Donation from "../../components/Donation/Donation";
import MapCard from "../../components/MapCard/MapCard";
import Header from "../../components/Header/Header";
import FaceCard from "../../components/FaceCard/FaceCard";
import Footer from "../../components/Footer/Footer";
import CardPetModel from "../../components/CardPetModel/CardPetModel";
import CarouselNews from "../../components/CarouselNews/CarouselNews";
import CarouselFundraisers from "../../components/CarouselFundraisers/CarouselFundraisers";

export default function MainPage() {
  return (
    <>
      <Header />
      <FaceCard />
      <CardPointer />
      <CarouselNews />
      <MapCard />
      <CarouselFundraisers />
      <Donation />
      {/* <CardPetModel /> */}
      <Footer />
    </>
  );
}
