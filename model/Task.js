// BLOCK 1: Importing Mongoose
const mongoose = require("mongoose");

// BLOCK 2: Defining Task Schema
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

// BLOCK 3: Creating and Exporting the Model
//module.exports = mongoose.model("Task", TaskSchema);

const Task = mongoose.model("Task", reviewSchema);

export default Task;
