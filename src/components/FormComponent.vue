<template>
  <div class="w-full mx-[20px]">
    <textarea
      v-model="question"
      placeholder="Enter your question..."
      class="w-full rounded-[10px]"
    ></textarea>
    <button @click="addQuestion" class="bg-[#0d2137] text-[#fff] p-[10px] rounded-[10px]">Add Question</button>
    <OptionFormComponent
      :options="options"
      @addOption="addOption"
      @removeOption="removeOption"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import OptionFormComponent from "./OptionFormComponent.vue";

export default {
  props: {
    addQuestion: Function,
  },
  components: {
    OptionFormComponent,
  },
  setup() {
    const question = ref("");
    const options = ref([]);

    const addOption = (newOption) => {
      options.value.push(newOption);
    };

    const removeOption = (index) => {
      options.value.splice(index, 1);
    };

    const addQuestion = () => {
      const hasCorrectOption = options.value.some((option) => option.correct);
      if (hasCorrectOption) {
        const newQuestion = {
          question: question.value,
          options: options.value,
        };
        this.addQuestion(newQuestion);
        // Reset form fields
        question.value = "";
        options.value = [];
      } else {
        alert("Please mark at least one option as correct.");
      }
    };

    return {
      question,
      options,
      addOption,
      removeOption,
      addQuestion,
    };
  },
};
</script>
