import "./App.css";
import Bmi from "./assets/Components/BMI App/Bmi";
import LandingPage from "./assets/Components/Landing Page/LandingPage";
import About from "./assets/Components/Layout/About Page/About";
import Contact from "./assets/Components/Layout/Contact Us Page/Contact";
import NavBar from "./assets/Components/NavBar/NavBar";
import QuizHome from "./assets/Components/Quiz App/QuizHome";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <hr />
      <Bmi />
      <hr />
      <QuizHome />
      <hr />
      <About />
      <hr />
      <Contact />
    </>
  );
}

export default App;
