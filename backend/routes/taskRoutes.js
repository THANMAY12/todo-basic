const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

// SEARCH FIRST
router.get("/search/:text", controller.searchTask);
// GET ALL
router.get("/", controller.getTasks);
// GET BY ID 
router.get("/:id", controller.getTaskById);
// CREATE
router.post("/", controller.createTask);
// UPDATE
router.put("/:id", controller.updateTask);
// DELETE
router.delete("/:id", controller.deleteTask);
// TOGGLE
router.patch("/:id", controller.toggleTask);
module.exports = router;