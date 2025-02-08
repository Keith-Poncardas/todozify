const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const controller = require('../controller/todoController');

router.post('/', controller.createTodo);
router.get('/', controller.getTodos);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);
router.get('/post', controller.getPostForm);
router.get('/:id/edit', controller.getIDThenUpdate);

module.exports = router;
