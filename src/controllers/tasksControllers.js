const tasksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const tasks = await tasksModel.createTask(req.body);

  return res.status(200).json(tasks);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.deleteTask(id);
  return res.status(204).json({ message: 'Task deleted successfully.' });
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.updateTask(id, req.body);
  return res.status(204).json({ message: 'Task updated successfully.' });
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};
