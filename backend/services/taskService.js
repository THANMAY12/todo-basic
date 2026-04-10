const Task = require("../models/Task");

exports.getTasks = async () => {
  return await Task.find();
};