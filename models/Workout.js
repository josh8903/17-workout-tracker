const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: { type: String },
    name: { type: String },
    distance: { type: Number },
    duration: { type: Number },
    weight: { type: Number },
    sets: { type: Number },
    reps: { type: Number },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;