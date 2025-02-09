const Todo = require('../models/Todo');

/**
 * Async function to create todo directly to the database.
 */
const createTodo = async (data) => {
  return await Todo.create(data); // Await the data to be created then return.
};

/**
 * Async function to get all todos directly to the database.
 */
const getTodos = async () => {
  return await Todo.find().sort({ updatedAt: -1 }); // Await the data to be find and sorted by updated at order then return.
};

/**
 * Async function to update todo directly to the database.
 */
const updateTodo = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data); // Await the data to be updated then return.
};

/**
 * Async function to delete todo directly to the database.
 */
const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id); // Await the data to be deleted then return.
};

/**
 * Async function to find todo by ID directly to the database.
 */
const findID = async (id) => {
  return await Todo.findById(id); // Await the data to be find then return.
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo, findID }; // Export and destructured the whole function.