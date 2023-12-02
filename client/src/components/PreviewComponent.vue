<template>
  <div class="px-4">
    <h3 class="text-center text-2xl font-bold">Preview</h3>
    <questions-component :questions="questions"></questions-component>
    <div class="flex justify-center">
      <button
        @click="createQuestion"
        class="btn-submit bg-blueButton text-[#fff] p-[10px] rounded-[10px] w-fit cursor-pointer"
      >
        Submit Questions
      </button>
    </div>
    <div
      v-if="show_modal"
      class="fixed md:left-[110px] left-0 m-[0!important] top-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-[#001A35] bg-opacity-40"
    >
      <div
        class="relative w-full max-h-screen flex justify-center items-center h-full"
      >
        <!-- Modal content -->
        <div
          class="relative bg-white rounded-lg shadow xl:w-[700px] md:w-[500px] md:top-[-25px] w-full"
        >
          <button
            @click="toggleModal"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div
            class="w-full m-auto bg-white px-[20px] py-[30px] rounded-[10px]"
          ></div>
          This is a modal
        </div>
      </div>
    </div>
    <button @click="navigateToTest">nav button</button>
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
    let show_modal = ref(false);
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
        show_modal = true;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    const navigateToTest = () => {
      const testId = JSON.parse(localStorage.getItem("testId"));
      router.push(`test/${testId}`);
    };
    return {
      createQuestion,
      questions,
      show_modal,
      navigateToTest,
    };
  },
});
</script>

<style scoped>
.btn-submit {
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #07212a;
}
</style>
