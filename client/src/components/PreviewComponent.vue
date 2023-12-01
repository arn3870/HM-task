<template>
  <div class="px-[20px]">
    <h3 class="text-center text-[40px] font-bold">Preview</h3>
    <ul>
      <li v-for="(question, index) in questions" :key="index" class="font-bold">
        {{ question.question }}
        <ul>
          <li
            v-for="(option, i) in question.options"
            :key="i"
            class="font-normal"
          >
            {{ option.value }}
            <span v-if="option.correct">(correct)</span>
          </li>
        </ul>
      </li>
    </ul>
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

export default defineComponent({
  props: {
    questions: Array,
  },
  setup(context) {
    async function createQuestion() {
      try {
        const response = await fetch("http://localhost:3000/api/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questions: context.questions,
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
    };
  },
});
</script>
