const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  id: Number,
  value: String,
  correct: Boolean,
});

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  options: [optionSchema],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
