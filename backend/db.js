const mongoose = require('mongoose');
const { boolean } = require('zod');

const todoSchema = mongoose.Schema({
title: String,
description: String,
completed: Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
