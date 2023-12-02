<template>
  <div class="w-full mx-4 flex flex-col items-center space-y-6">
    <h2 class="text-center text-4xl font-bold text-white">Add Questions</h2>
    <p class="font-bold text-sm text-center text-white">
      Please type in a question and click the "Add Option" button to add options. Once done, click the "Add Question" button to preview.
    </p>

    <form @submit.prevent="addQuestion" class="w-full flex flex-col items-center space-y-4">
      <textarea
        v-model.trim="newQuestion"
        placeholder="Enter your question"
        class="w-full rounded-md p-2"
        required
      />
      <option-form-component
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        @remove-option="removeOption(index)"
      />
      <div class="flex flex-col space-y-4">
        <button
          type="button"
          @click="addOption"
          class="btn-primary"
        >
          Add Option
        </button>
        <button
          type="submit"
          class="btn-primary"
        >
          Add Question
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import OptionFormComponent from "./OptionFormComponent.vue";
import { useQuestionsStore } from "../stores/questionsStore";
import { ref } from "vue";

export default {
  setup(_, { emit }) {
    const newQuestion = ref("");
    const options = ref([]);
    const questionsStore = useQuestionsStore();

    const addOption = () => {
      options.value.push({ value: "", correct: false });
    };

    const addQuestion = () => {
      if (!newQuestion.value.trim()) {
        alert("Please enter a question.");
        return;
      }

      if (options.value.length < 2) {
        alert("Please add at least two options.");
        return;
      }

      if (!options.value.some((option) => option.correct)) {
        alert("Please choose at least one correct option.");
        return;
      }

      const question = {
        question: newQuestion.value,
        options: options.value,
      };

      questionsStore.addQuestion(question);

      newQuestion.value = "";
      options.value = [];
    };

    const removeOption = (index) => {
      options.value.splice(index, 1);
    };

    return {
      newQuestion,
      options,
      addOption,
      addQuestion,
      removeOption,
    };
  },
  components: {
    OptionFormComponent,
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #0d2137;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #07212a;
}
</style>
