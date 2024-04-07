const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb+srv://adithyans21:uiMdwKnyE9vvuMCw@cluster0.kr59owk.mongodb.net/todolist-app");

const todoSchema = mongoose.Schema({
title: String,
description: String,
completed: Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}