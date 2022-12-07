import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Puhelintiedot from "./components/pages/Athletes";
import Ylatunniste from "./components/Header";
import Tietoa from "./components/pages/About";
import LisaaPuhelintieto from "./components/pages/AddAthlete";
import MuokkaaPuhelintieto from "./components/EditAthlete";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="app">
          <Ylatunniste turvataso="" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Puhelintiedot />} />
              <Route path="/athletes/add" element={<LisaaPuhelintieto />} />
              <Route
                path="/athletes/edit/:id"
                element={<MuokkaaPuhelintieto />}
              />
              <Route path="/about" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
