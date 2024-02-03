// foodRecommendation.js

import express from "express";
import { BMI_FEEDBACK } from "../Foods.js";
const router = express.Router();

// BMI calculation and food recommendation logic
const getFoodRecommendations = (bmi) => {
  // Implement food recommendation logic
  if (bmi < 18.5) {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "rangeA");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "rangeB");
  } else if (bmi >= 25 && bmi < 29.9) {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "rangeC");
  } else if (bmi >= 25 && bmi < 29.9) {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "Underweight");
  } else {
    return BMI_FEEDBACK.find((bmi) => bmi.category === "Obese");
  }
};

// Endpoint for BMI calculation and food recommendations
router.post("/calculate-bmi", (req, res) => {
  const { height, weight } = req.body;

  if (!height || !weight) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide both height and weight." });
  }

  const heightInMeters = height * 0.3048;
  const bmi = (weight / heightInMeters ** 2).toFixed(2);
  const foodRecommendations = getFoodRecommendations(bmi);

  // console.log(
  //   `BMI = ${bmi}, Food recommendations = ${JSON.stringify(
  //     foodRecommendations
  //   )}`
  // );

  res.json({ bmi, foodRecommendations });
});

export default router;
