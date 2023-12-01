<template>
  <div>
    <div v-for="question in questions" :key="question._id.$oid">
      <h2>{{ question.question }}</h2>
      <ul>
        <li v-for="option in question.options" :key="option._id.$oid">
          {{ option.value }} - {{ option.correct ? "Correct" : "Incorrect" }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const questions = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:3000/api/questions");
        const data = await response.json();
        questions.value = data;
      } catch (error) {
        console.log(error);
      }
    });

    return { questions };
  },
};
</script>
