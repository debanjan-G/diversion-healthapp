import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/Landing Page/LandingPage";
import Bmi from "./Components/BMI App/Bmi";
import QuizHome from "./Components/Quiz App/QuizHome/QuizHome";
import About from "./Components/Layout/About Page/About";
import Contact from "./Components/Layout/Contact Us Page/Contact";
import InvalidRoute from "./Components/Invalid Route/InvalidRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./Components/Quiz App/Quiz/Quiz";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/quiz-home" element={<QuizHome />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
