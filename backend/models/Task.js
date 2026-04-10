const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
    minlength: [3, "Title must be at least 3 characters"]
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

taskSchema.pre("save", function () {
  console.log("Saving task:", this.title);
});
module.exports = mongoose.model("Task", taskSchema);