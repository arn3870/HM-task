<template>
  <div class="px-[20px]">
    <h3 class="text-center text-[40px] font-bold">Preview</h3>
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="bg-white p-4 rounded-md shadow-md mb-4"
    >
      <h2 class="font-bold">
        {{ `Question ${index + 1}: ${question.question}` }}
      </h2>
      <ul class="list-disc ml-6">
        <li
          v-for="(option, i) in question.options"
          :key="i"
          class="font-normal mb-2"
        >
          <input v-model="option.correct" type="checkbox" class="mr-2" />
          <span :class="{ 'text-green-500': option.correct }">
            {{ option.value }}
          </span>
          <span v-if="option.correct">(correct)</span>
        </li>
      </ul>
    </div>
    <div class="flex justify-center">
      <button
        @click="createQuestion()"
        type="submit"
        class="bg-[#0d2137] text-[#fff] p-[10px] rounded-[10px] w-fit"
      >
        Submit questions
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuestionsStore } from "../stores/questionsStore";

export default defineComponent({
  setup() {
    const questionsStore = useQuestionsStore();
    let questions = questionsStore.questions;
    async function createQuestion() {
      try {
        const response = await fetch("http://localhost:3000/api/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questions: questions,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    return {
      createQuestion,
      questions,
    };
  },
});
</script>
