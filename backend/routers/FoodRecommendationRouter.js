// foodRecommendation.js

import express from "express";
import { BMI_FEEDBACK } from "../utils/Food.js";
const router = express.Router();

// BMI calculation and food recommendation logic
const getFoodRecommendations = (bmi) => {
  // Implement food recommendation logic
  if (bmi < 16.0) {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "Severely Underweight");
  } else if (bmi >= 16.0 && bmi < 18.4) {
    return BMI_FEEDBACK.find(
      (bmi) => bmi.category === "Moderately Underweight"
    );
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "Healthy Weight");
  } else if (bmi >= 25.0 && bmi < 29.9) {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "Overweight");
  } else {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "Obese");
  }
};

// Endpoint for BMI calculation and food recommendations
router.post("/calculate-bmi", (req, res) => {
  const { height, weight } = req.body;
  console.log(height, weight);

  if (!height || !weight) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide both height and weight." });
  }

  const heightInMeters = height * 0.3048;
  const bmi = (weight / heightInMeters ** 2).toFixed(2);
  const foodRecommendations = getFoodRecommendations(bmi);

  res.json({ bmi, foodRecommendations });
});

export default router;
