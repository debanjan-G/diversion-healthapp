import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import foodRecommendationRouter from "./routers/FoodRecommendationRouter.js";
import quizFeedback from "./routers/quizFeedback.js";
import contactEmail from "./routers/contactEmail.js"


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Use the foodRecommendation router for the /api path
app.use("/api", foodRecommendationRouter);
app.use("/feedback", quizFeedback);
app.use("/contact", contactEmail);


app.get("/", (req, res) => {
    res.json("msg: index.js works");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
