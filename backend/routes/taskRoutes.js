const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");
router.get("/search/:text", controller.searchTask);
router.post("/", controller.createTask);
router.get("/", controller.getTasks);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);
router.patch("/:id", controller.toggleTask);


module.exports = router;