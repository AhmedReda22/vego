import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import SelectVehicle from "./pages/SelectVehicle";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select/:type" element={<SelectVehicle />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/splash" element={<Splash />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;