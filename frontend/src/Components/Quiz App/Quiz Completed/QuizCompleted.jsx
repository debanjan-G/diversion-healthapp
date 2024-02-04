/* eslint-disable react/prop-types */
import styles from "./QuizCompleted.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const QuizCompleted = ({ totalScore }) => {
  const [quizFeedback, setQuizFeedback] = useState({});
  useEffect(() => {
    axios
      .post("/feedback/getFeedback", { score: totalScore })
      .then((res) => {
        console.log(res.data);
        setQuizFeedback({ ...res.data });
      })
      .catch((error) => {
        console.error("Error posting totalScore:", error);
      });
  }, [totalScore]);

  const navigateTo = useNavigate();
  const handleNextClick = () => {
    navigateTo("/quiz-home");
  };
  return (
    <div className={styles.container}>
      <img
        src={quizFeedback.imgSrc}
        alt=""
        style={{ height: "20rem" }}
        className={styles.completionImage}
      />
      <div className={styles.feedbackContainer}>
        <h1 className={styles.feedbackHeading}>
          Insights into Your Mental Health:
        </h1>
        <p className={styles.feedback}>{quizFeedback.feedback}</p>
      </div>
      <button
        className={styles.btn}
        // style={{ marginBottom: "50px" }}
        onClick={handleNextClick}
      >
        Quiz Home
      </button>
    </div>
  );
};

export default QuizCompleted;
