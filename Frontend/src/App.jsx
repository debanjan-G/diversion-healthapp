import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/Landing Page/LandingPage";
import Bmi from "./Components/BMI App/Bmi";
import QuizHome from "./Components/Quiz App/QuizHome";
import About from "./Components/Layout/About Page/About";
import Contact from "./Components/Layout/Contact Us Page/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/quiz" element={<QuizHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
