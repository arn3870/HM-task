import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useQuestionsStore = defineStore("questions", {
  state: () => ({
    questions: [],
  }),

  actions: {
    addQuestion(question) {
      const transformedQuestion = {
        question: question.question,
        options: question.options.map((option) => ({
          value: option.value,
          correct: option.correct,
        })),
      };

      this.questions.push(transformedQuestion);
      console.log(this.questions);
    },
  },
});
