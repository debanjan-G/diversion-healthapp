/* eslint-disable react/prop-types */
import styles from "./QuizCompleted.module.css";
import { useNavigate } from "react-router-dom";

const QuizCompleted = ({ totalScore }) => {
  const navigateTo = useNavigate();
  const handleNextClick = () => {
    navigateTo("/quiz-home");
  };
  return (
    <div className={styles.container}>
      <h1>You have reached the End of the Quiz.</h1>
      <p className={styles.score}>Your score is {totalScore}</p>
      <img
        src="https://img.freepik.com/free-vector/tiny-people-standing-near-big-checkmark-team-male-female-characters-finishing-work-with-list-good-job-sign-flat-vector-illustration-done-job-checklist-time-management-concept_74855-21019.jpg"
        alt=""
        className={styles.completionImage}
      />
      <button className={styles.btn} onClick={handleNextClick}>
        Quiz Home
      </button>
    </div>
  );
};

export default QuizCompleted;
