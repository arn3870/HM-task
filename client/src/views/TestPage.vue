<template>
  <div
    class="bg-[#E0EAF5] min-h-screen flex flex-col items-center justify-center"
  >
    <div class="my-10 mx-8">
      <h1 class="font-bold text-3xl text-center mb-4">Test Questions</h1>
      <p class="font-bold text-sm text-center mb-4">
        Please choose the correct answer from the below questions. You can
        choose one or more options. The text color of the correct answer will
        turn green upon selection.
      </p>
      <div v-for="worksheet in questions" :key="worksheet._id">
        <div
          v-for="(question, index) in worksheet.questions"
          :key="question._id"
          class="bg-white p-4 rounded-md shadow-md mb-4"
        >
          <h2 class="font-bold text-lg">
            {{ `Question ${index + 1}: ${question.question}` }}
          </h2>
          <ul class="list-disc ml-6">
            <li
              v-for="option in question.options"
              :key="option._id"
              class="mb-2"
            >
              <input v-model="option.correct" type="checkbox" class="mr-2" />
              <span :class="{ 'text-green-500': option.correct }">{{
                option.value
              }}</span>
            </li>
          </ul>
        </div>
      </div>
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
