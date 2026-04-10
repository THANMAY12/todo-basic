const Task = require("../models/Task");
const mongoose = require("mongoose");


//  CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    // validation
    if (!title || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Title is required to create a task"
      });
    }

    const task = new Task({ title: title.trim() });
    const savedTask = await task.save();

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: savedTask
    });

  } catch (error) {
    console.error("Create Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong while creating task"
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks"
    });
  }
};

exports.getTaskById = async (req, res) => {
  const mongoose = require("mongoose");

  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task ID"
      });
    }

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.json({
      success: true,
      data: task
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching task"
    });
  }
};
//GET TASK BY ID
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task ID"
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating task"
    });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task ID"
      });
    }

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    await task.deleteOne();

    res.json({
      success: true,
      message: "Task deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting task"
    });
  }
};


exports.toggleTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task ID"
      });
    }

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    task.completed = !task.completed;
    await task.save();

    res.json({
      success: true,
      message: "Task status updated",
      data: task
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating task status"
    });
  }
};


exports.searchTask = async (req, res) => {
  try {
    const text = req.params.text;
    if (!text || text.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Invalid search input"
      });
    }

    const tasks = await Task.find({
      title: { $regex: text, $options: "i" }
    });

    res.json({
      success: true,
      count: tasks.length,
      data: tasks
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Search failed"
    });
  }
};