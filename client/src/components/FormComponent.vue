<template>
  <div class="w-full mx-[20px] flex flex-col items-center space-y-3">
    <h2 class="text-center text-[40px] font-bold text-white">Add questions</h2>
    <form
      @submit.prevent="addQuestion"
      class="w-full flex flex-col justify-center items-center space-y-3"
    >
      <textarea
        v-model="newQuestion"
        placeholder="Enter your question"
        class="w-full rounded-md p-2"
      />
      <option-form-component
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        @remove-option="removeOption(index)"
      />
      <div class="flex flex-col space-y-3">
        <button
          type="button"
          @click="addOption"
          class="bg-[#0d2137] text-[#fff] p-[10px] rounded-[10px]"
        >
          Add Option
        </button>
        <button
          type="submit"
          class="bg-[#0d2137] text-[#fff] p-[10px] rounded-[10px]"
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

    function addOption() {
      options.value.push({ value: "", correct: false });
    }

    const addQuestion = () => {
      const question = {
        question: newQuestion.value,
        options: options.value,
      };

      // Update the questions array in the Pinia store
      questionsStore.addQuestion(question);

      // Clear form inputs
      newQuestion.value = "";
      options.value = [];
    };

    function removeOption(index) {
      this.options.splice(index, 1);
    }

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
