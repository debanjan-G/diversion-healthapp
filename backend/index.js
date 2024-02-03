import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import quizFeedback from "./routers/quizFeedback.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/feedback", quizFeedback);


app.get("/", (req, res) => {
    res.json("msg: index.js works");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
