<template>
  <div
    class="bg-primary min-h-screen flex flex-col items-center justify-center"
  >
    <div class="my-10 mx-8">
      <h1 class="font-bold text-3xl text-center mb-4">Test Questions</h1>
      <p class="font-bold text-sm text-center mb-4">
        Please choose the correct answer from the below questions. You can
        choose one or more options. The text color of the correct answer will
        turn green upon selection.
      </p>
      <questions-component :questions="questions"></questions-component>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import QuestionsComponent from "../components/QuestionsComponent.vue";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: { QuestionsComponent },
  setup(props, { emit }) {
    let questions = ref([]);

    onMounted(async () => {
      try {
        const id = props.id;
        const response = await fetch(
          `http://localhost:3000/api/questions?id=${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        questions.value = data.questions;
        console.log("reactive data", data.questions)
      } catch (error) {
        console.log(error);
      }
    });

    return { questions };
  },
};
</script>
