import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pets from "./pages/Pets/Pets";
import AnimalShelters from "./pages/AnimalShelters/AnimalShelters";
import PetControll from "./pages/PetControll/PetControll";
import ShelterPage from "./pages/ShelterPage/ShelterPage";
import Fundraising from "./pages/Fundraising/Fundraising";
import PetGiveAway from "./pages/PetGiveAway/PetGiveAway";
import FundraisingForm from "./pages/FundraisingForm/FundraisingForm";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsForm from "./components/NewsForm/NewsForm";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import ShelterPetsAdd from "./pages/ShelterPetFormPage/ShelterPetsAdd";
import PetsIsShelter from "./pages/Pets/PetsIsShelter";
import AddNews from "./pages/AddNews/AddNews";
import TakeCarePet from './pages/TakeCarePet/TakeCarePet'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets-is-shelter" element={<PetsIsShelter />} />
        <Route path="/pets-is-shelter/:id" element={<PetsIsShelter />} />
        <Route path="/animal-shelters" element={<AnimalShelters />} />
        <Route path="/pet-control-form" element={<PetControll />} />
        <Route path="/pet-give-away-form" element={<PetGiveAway />} />
				<Route path="/take-care-pet" element={<TakeCarePet />} />
        <Route path="/animal-shelters" element={<AnimalShelters />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news-form" element={<AddNews />} />
        <Route path="/shelter-page-profile/:id" element={<ShelterPage />} />
        <Route path="/fundraising-page" element={<Fundraising />} />
        <Route path="/pets/type/:id" element={<Pets/>} />
        <Route path="/shelter-pets-form" element={<ShelterPetsAdd/>} />
        <Route path="/fundraising-page-form" element={<FundraisingForm/>} />
        <Route path='/profile/:id' element={< PersonalPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;