import express from "express";
import { mentalHealthFeedback } from "../utils/quiz.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.json("msg: quizfeedbackworks")
})

const getFeedback = (score) => {
    if (score >= 16) {
        return mentalHealthFeedback[0].feedback; // Very low mental health concerns
    } else if (score >= 11) {
        return mentalHealthFeedback[1].feedback; // Low to Moderate Mental Health Concerns
    } else if (score >= 7) {
        return mentalHealthFeedback[2].feedback; // Moderate Mental Health Concerns
    } else if (score >= 4) {
        return mentalHealthFeedback[3].feedback; // High Mental Health Concerns
    } else {
        return mentalHealthFeedback[4].feedback; // Very High Mental Health Concerns
    }
}

router.get("/getfeedback/:score", (req, res) => {
    const score = parseInt(req.params.score);
    if (isNaN(score)) {
        return res.status(400).json({ error: "Invalid score provided" });
    }
    const feedback = getFeedback(score);
    res.json({ feedback });
});

export default router;