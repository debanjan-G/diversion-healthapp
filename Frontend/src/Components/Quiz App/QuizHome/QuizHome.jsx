import styles from "./QuizHome.module.css";
import { useNavigate } from "react-router-dom";

const QuizHome = () => {
  const navigateTo = useNavigate();
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://i.pinimg.com/736x/4e/86/31/4e86314dee018140b8f3d089b60f21f0.jpg"
            className={`d-block mx-lg-auto img-fluid ${styles.quizHeroImage}`}
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Discover Your Well-being: Take Our Personalized Mental Health Quiz
          </h1>
          <p className="lead">
            Welcome to our interactive self-assessment tool designed to help you
            gain insights into your mental well-being. Taking the quiz is a
            simple yet impactful step towards understanding your emotional
            health better.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={() => {
                navigateTo("/quiz");
              }}
            >
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
