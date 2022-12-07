import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Athletes from "./components/pages/Athletes";
import Nav from "./components/Header";
import About from "./components/pages/About";
import AddAthlete from "./components/pages/AddAthlete";
import EditAthlete from "./components/EditAthlete";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="app">
          <Nav turvataso="" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Athletes />} />
              <Route path="/athletes/add" element={<AddAthlete />} />
              <Route path="/athletes/edit/:id" element={<EditAthlete />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
