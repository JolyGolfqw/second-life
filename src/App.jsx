import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pets from "./pages/Pets/Pets";
import AnimalShelters from "./pages/AnimalShelters/AnimalShelters";
import PetControll from "./pages/PetControll/PetControll";
import ShelterPage from "./pages/ShelterPage/ShelterPage";
import Fundraising from './pages/Fundraising/Fundraising'
import PetGiveAway from "./pages/PetGiveAway/PetGiveAway";
import FundraisingForm from "./pages/FundraisingForm/FundraisingForm";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsForm from "./components/NewsForm/NewsForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/animal-shelters" element={<AnimalShelters />} />
        <Route path="/pet-control-form" element={<PetControll />} />
        <Route path="/pet-give-away-form" element={<PetGiveAway />} />
        <Route path="/animal-shelters" element={<AnimalShelters />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news-form" element={<NewsForm />} />
        <Route path="/shelter-page/:id" element={<ShelterPage />} />
				<Route path="/fundraising-page" element={<Fundraising />} />
				<Route path="/pets/type/:id" element={<Pets/>} />
        <Route path="/fundraising-page-form" element={<FundraisingForm/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
