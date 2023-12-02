<template>
  <div class="px-4">
    <h3 class="text-center text-2xl font-bold mb-5">Preview</h3>
    <questions-component :questions="questions"></questions-component>
    <div class="flex justify-center">
      <button
        @click="createQuestion"
        class="btn-submit bg-blueButton text-[#fff] p-[10px] rounded-[10px] w-fit cursor-pointer"
      >
        Submit Questions
      </button>
    </div>

    <!-- Modal -->
    <div
      v-if="show_modal"
      class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-10 rounded-md text-center">
        <h2 class="text-center text-2xl font-bold mb-5">
          Worksheet saved successfully
        </h2>
        <h2 class="font-bold text-sm text-center mb-4">
          Navigate to the test page?
        </h2>
        <div class="flex flex-row justify-center gap-5">
          <button
            @click="navigateToTest"
            class="bg-blueButton text-white rounded-md cursor-pointer w-[30%]"
          >
            Yes
          </button>
          <button
            @click="closeModal"
            class="bg-blueButton text-white p-[10px] rounded-md cursor-pointer w-[30%]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuestionsStore } from "../stores/questionsStore";
import { useRouter } from "vue-router";
import QuestionsComponent from "./QuestionsComponent.vue";

export default defineComponent({
  components: { QuestionsComponent },
  setup() {
    const questionsStore = useQuestionsStore();
    const questions = questionsStore.questions;
    const show_modal = ref(false);
    const router = useRouter();

    const createQuestion = async () => {
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
        localStorage.setItem("testId", JSON.stringify(data._id));
        show_modal.value = true;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    const navigateToTest = () => {
      const testId = JSON.parse(localStorage.getItem("testId"));
      router.push(`test/${testId}`);
    };

    const closeModal = () => {
      show_modal.value = false;
    };

    return {
      createQuestion,
      questions,
      show_modal,
      navigateToTest,
      closeModal,
    };
  },
});
</script>
