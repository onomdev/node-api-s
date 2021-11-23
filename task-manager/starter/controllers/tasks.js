const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  // .find to get the tasks, {} empty filter everything shows up
  // IMPORTANT!!! DO NOT FORGET ASYNC AWAIT!!!
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  //res.status(500).json({ msg: error });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    //always make sure to use return
    return res
      .status(404)
      .json({ msg: `Task with id ${taskId} does not exist` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    //always make sure to use return
    return res
      .status(404)
      .json({ msg: `Task with id ${taskId} does not exist` });
  }
  res.status(200).json({ task });
});

// patch is partial update, put is total replace
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    // always shows the new value
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `Task with id ${taskId} does not exist` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
