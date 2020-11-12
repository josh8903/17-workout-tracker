const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// html routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});



app.post("/api/workouts/:id", ({ workoutData }, res) => {
    db.Workout.create(workoutData)
    console.log("server.js", workoutData)
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});