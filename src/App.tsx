import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import { DarkModeContext } from "./Context/Darkmodecontext";
import Footer from "./Components/Footer";
import Service from "./Pages/Servicepage";
import Doctors from "./Pages/Doctorspage";
import AppointmentPage from "./Pages/Appointmentpage";
import Gallery from "./Pages/Gallerypage";
import HealthScheme from "./Pages/Healthscheme";
import Contact from "./Pages/Contactpage";
import Credentials from "./Pages/Credentialspage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Services" element={<Service />} />
          <Route path="Doctors" element={<Doctors />} />
          <Route path="/appointment/:doctorId" element={<AppointmentPage />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Healthscheme" element={<HealthScheme />} />
          <Route path="Contact-Us" element={<Contact />} />
          <Route path="Credentials" element={<Credentials />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DarkModeContext.Provider>
  );
}