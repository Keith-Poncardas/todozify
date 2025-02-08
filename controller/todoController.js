const todoService = require('../services/todoService');
const { formatDate } = require('../helper/utils');

/**
 * Async function to create new todo.
 */
const createTodo = async (req, res) => {
  try {
    await todoService.createTodo(req.body); // Await the data to be pass and stored to databasa.
    res.redirect('/todos'); // If awaiting success go to todos or home.
  } catch (err) {
    console.log(`Error creating todo: ${err.message}`); // Log error message if awaiting fails.
    res.redirect('/todos/post');
  };
};

/**
 * Async function to get all created todo from database.
 */
const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos(); // Await all the todos data to be stored in variable.
    res.render('index', { todos, formatDate }); // If awaiting success render the index (Home) page and pass all the todos data to be used in the client.
  } catch (err) {
    console.log(`Error getting all todos: ${err.message}`); // Log error message if awaiting fails.
  };
};

/**
 * Async function to update todo based on the todo id.
 */
const updateTodo = async (req, res) => {
  try {
    await todoService.updateTodo(req.params.id, req.body); // Await the data to be updated and pass all the ID and BODY, to alter the old data.
    res.redirect('/todos'); // If awaiting success go to todos or home.
  } catch (err) {
    console.log(`Error updating todo: ${err.message}`); // Log error message if awating fails.
  };
};

/**
 * Async function to delete todo based on the todo id.
 */
const deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id); // Await the data to be deleted and pass the ID to remo
    res.redirect('/todos'); // If awating success go to todos or home.
  } catch (err) {
    console.log(`Error deleting todo: ${err.message}`); // Log error message if awating fails.
  };
};

/**
 *  Function to render post form page.
 */
const getPostForm = (req, res) => {
  res.render('post'); // Render post page.
};

/**
 * Async function to find the todo based on ID.
 */
const getIDThenUpdate = async (req, res) => {
  try {
    const todo = await todoService.findID(req.params.id); // Await the ID to be locate in database.
    res.render('edit', { todo }); // If the ID found papulate the relating data and render the post form page.
  } catch (err) {
    console.log(`Error getting ID and Update form: ${err.message}`); // Log error message if awating fails.
  }
}

module.exports = { createTodo, getTodos, updateTodo, deleteTodo, getPostForm, getIDThenUpdate }; // Export and destructure all functions.