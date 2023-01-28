const mongoose = require('mongoose');

const Schema = mongoose.Schema

//create a new schema 
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required:true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true }); //second argument

module.exports = mongoose.model('Workout', workoutSchema)