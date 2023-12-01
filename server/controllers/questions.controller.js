const questionSchema = require("../models/questions.model");

// Controller function to handle POST request
const postQuestion = async (req, res) => {
    try {
      const { questions } = req.body;
      const savedQuestions = [];
  
      for (let { id, question, options } of questions) {
        const newQuestion = new questionSchema({
          id: id,
          question: question,
          options: options.map(opt => ({
            value: opt.value,
            correct: opt.correct,
          })),
        });
  
        const savedQuestion = await newQuestion.save();
        savedQuestions.push(savedQuestion);
      }
  
      res.json(savedQuestions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Controller function to handle GET request
const getQuestions = async (req, res) => {
  try {
    const questions = await questionSchema.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postQuestion,
  getQuestions,
};
