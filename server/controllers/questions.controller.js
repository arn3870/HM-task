const questionSchema = require("../models/questions.model");

// Controller function to handle POST request
const postQuestion = async (req, res) => {
  try {
    const { questions } = req.body;

    const worksheet = new questionSchema({
      questions: questions.map(({ id, question, options }) => ({
        id: id,
        question: question,
        options: options.map((opt) => ({
          value: opt.value,
          correct: opt.correct,
        })),
      })),
    });

    const savedWorksheet = await worksheet.save();
    res.json(savedWorksheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getQuestions = async (req, res) => {
  try {
    const id = req.query.id;
    const worksheet = await questionSchema.findById(id);

    if (!worksheet) {
      return res
        .status(404)
        .json({ message: "No question found with that ID" });
    }
    res.json(worksheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  postQuestion,
  getQuestions,
};
