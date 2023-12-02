<template>
  <div>
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="bg-white p-4 rounded-md shadow-md mb-4"
    >
      <h2 class="font-bold">
        {{ `Question ${index + 1}: ${question.question}` }}
      </h2>
      <ul class="list-disc ml-6">
        <li v-for="option in question.options" :key="option" class="mb-2">
          <input
            v-model="option.selected"
            type="checkbox"
            class="mr-2"
            :disabled="question.submitted"
          />
          <span :class="getOptionTextColor(option)">
            {{ option.value }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    questions: Array,
  },
  setup() {
    const getOptionTextColor = (option) => {
      if (option.selected) {
        return option.correct ? "text-green-500" : "text-red-500";
      } else {
        return "text-black";
      }
    };

    return { getOptionTextColor };
  },
};
</script>
