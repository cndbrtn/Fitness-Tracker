const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        },
    exercises: [
        {
            type: {
                type: String,
                // required: "Cardio or resistance?",
            },
            name: {
                type: String,
                // required: "What workout did you do?",
                trim: true
            },
            duration: {
                types: Number,
                // required: "How long did you work out?"
            },
            weight: Number,
            reps: Number,
            set: Number,
            distance: Number
        }
    ]  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;