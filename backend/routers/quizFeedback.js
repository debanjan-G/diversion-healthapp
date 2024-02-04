import express from "express";
import { mentalHealthFeedback } from "../utils/quiz.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json("msg: quizfeedbackworks");
});

const getFeedback = (score) => {
  if (score >= 16) {
    return mentalHealthFeedback[0]; // Very low mental health concerns
  } else if (score >= 11) {
    return mentalHealthFeedback[1]; // Low to Moderate Mental Health Concerns
  } else if (score >= 7) {
    return mentalHealthFeedback[2]; // Moderate Mental Health Concerns
  } else if (score >= 4) {
    return mentalHealthFeedback[3]; // High Mental Health Concerns
  } else {
    return mentalHealthFeedback[4]; // Very High Mental Health Concerns
  }
};

router.post("/getFeedback", (req, res) => {
  const score = req.body.score;
  console.log(score);
  const feedback = getFeedback(score);
  res.json(feedback);
});
router.get("/bmi", (req, res) => {
  const score = req.body.score
  console.log(score)
  const feedback = getFeedback(score)
  res.json(feedback)
})

export default router;
