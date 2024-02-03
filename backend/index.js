// index.js

import express from "express";
import bodyParser from "body-parser";
import foodRecommendationRouter from "./routers/FoodRecommendationRouter.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Use the foodRecommendation router for the /api path
app.use("/api", foodRecommendationRouter);

// Other server routes (if any)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
