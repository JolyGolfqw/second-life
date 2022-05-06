import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pets from "./pages/Pets/Pets";
import AnimalShelters from "./pages/AnimalShelters.jsx/AnimalShelters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/animal-shelters" element={<AnimalShelters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
