// const express = require('express');
// const router = express.Router();
// const createQuestionController =  require('../controllers/questions.controller');

// router.post('/questions', createQuestionController);

// module.exports = router;

const express = require('express');
const router = express.Router();
const createQuestionController =  require('../controllers/questions.controller');

// POST request to add a question
router.post('/questions', createQuestionController.postQuestion);

// GET request to retrieve all questions
router.get('/questions', createQuestionController.getQuestions);

module.exports = router;
