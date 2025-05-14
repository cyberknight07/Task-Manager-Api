
import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is needed"],
        trim: true,
        minLength: [3, "Not less than 3"],
        maxLength: [30, "Not more than 30"]
    },
    description: {
        type: String,
        required: true,
        maxLength: [100, " Not more than 100"]
    },
    dueDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    priority: {
        type: String,
        default: "Low",
        enum: ["High", "Medium", "Low"]
    },
    status: {    
        type: String,
        default: "Processing",
        enum: ["Ordered", "Processing", "Completed"]
    },
    assignedTo: {
        type: String,
        ref: "User",
        required: true,
        index: true
    }
}, {timestamps: true});

const Tasks = mongoose.model("Tasks", tasksSchema);

export default Tasks;