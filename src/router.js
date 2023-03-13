const express = require('express');
const taksController = require('./controllers/tasksControllers');
const tasksMiddlewares = require('./middlewares/tasksMiddlewares');
const router = express.Router();

router.get('/tasks', taksController.getAll);
router.post(
  '/tasks',
  tasksMiddlewares.validateFieldTitle,
  taksController.createTask
);

router.delete('/tasks/:id', taksController.deleteTask);
router.put(
  '/tasks/:id',
  tasksMiddlewares.validateFieldTitle,
  tasksMiddlewares.validateFieldStatus,
  taksController.updateTask
);

module.exports = router;
