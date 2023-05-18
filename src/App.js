import "./App.css";
import Applayout from "./core/Applayout";
import LandingPage from "./page/LandingPage";
import { Routes, Route } from "react-router-dom";
import SavedPage from "./page/SavedPage";
import ServicesPage from "./page/ServicesPage";
import ContacgtPage from "./page/ContacgtPage";
import InfographiePage from "./page/InfographiePage";
import InformatiquePage from "./page/InformatiquePage";
import MaintenanceInfoPage from "./page/MaintenanceInfoPage";
import ComptabilitePage from "./page/ComptabilitePage";
import CommunicationDigPage from "./page/CommunicationDigPage";
import AideSoignantePage from "./page/AideSoignantePage";
function App() {
  return (
    <Routes>
      <Route to="" element={<Applayout />}>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/infographie" element={<InfographiePage />}></Route>
        <Route path="/informatique" element={<InformatiquePage />}></Route>
        <Route path="/maintenance" element={<MaintenanceInfoPage />}></Route>
        <Route path="/comptabilite" element={<ComptabilitePage />}></Route>
        <Route path="/communication" element={<CommunicationDigPage />}></Route>
        <Route path="/soignante" element={<AideSoignantePage />}></Route>
        <Route path="/contact" element={<ContacgtPage />}></Route>
        <Route path="/save" element={<SavedPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
