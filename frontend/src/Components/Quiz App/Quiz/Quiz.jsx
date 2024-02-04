import styles from "./Quiz.module.css";
import { quizData } from "../../../assets/QuizData";
import { useState } from "react";
import QuizCompleted from "../Quiz Completed/QuizCompleted";

const Quiz = () => {
  const [quesNo, setQuesNo] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNextClick = () => {
    if (selectedOption !== null) {
      setSelectedOption(null);
      setQuesNo((prev) => prev + 1);
    }
  };

  return quesNo < quizData.length ? (
    <div className={styles.quizContainer}>
      <h1 className={styles.header}>Mental Health Quiz</h1>
      <div className={styles.question}>{quizData[quesNo].question}</div>
      <ul className={styles.options}>
        <li
          style={
            selectedOption === 1 ? { border: "5px solid greenyellow" } : {}
          }
          className={styles.option}
          onClick={() => {
            setSelectedOption(1);
            setScore((prev) => prev + 4);
          }}
        >
          {quizData[quesNo].option1}
        </li>
        <li
          style={
            selectedOption === 2 ? { border: "5px solid greenyellow" } : {}
          }
          className={styles.option}
          onClick={() => {
            setSelectedOption(2);
            setScore((prev) => prev + 3);
          }}
        >
          {quizData[quesNo].option2}
        </li>
        <li
          style={
            selectedOption === 3 ? { border: "5px solid greenyellow" } : {}
          }
          className={styles.option}
          onClick={() => {
            setSelectedOption(3);
            setScore((prev) => prev + 2);
          }}
        >
          {quizData[quesNo].option3}
        </li>
        <li
          style={
            selectedOption === 4 ? { border: "5px solid greenyellow" } : {}
          }
          className={styles.option}
          onClick={() => {
            setSelectedOption(4);
            setScore((prev) => prev + 1);
          }}
        >
          {quizData[quesNo].option4}
        </li>
      </ul>
      <button className={styles.btn} onClick={handleNextClick}>
        Next
      </button>
      <p className={styles.questionNumber}>
        Question {quizData[quesNo].no} of 5
      </p>
    </div>
  ) : (
    <QuizCompleted totalScore={score} />
  );
};

export default Quiz;
