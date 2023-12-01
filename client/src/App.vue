<template>
  <div class="grid grid-cols-1 md:grid-cols-2 l:grid-cols-2">
    <div class="bg-[#2E77AE] h-screen flex items-center justify-center">
      <FormComponent @addQuestion="addQuestion" />
    </div>
    <div class="bg-[#E0EAF5] overflow-y-auto">
      <PreviewComponent :questions="questions" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import FormComponent from "./components/FormComponent.vue";
import PreviewComponent from "./components/PreviewComponent.vue";

export default {
  name: "App",
  components: {
    FormComponent,
    PreviewComponent,
  },
  setup() {
    const questions = ref([]);

    const addQuestion = (question) => {
      questions.value.push(question);
    };

    return {
      questions,
      addQuestion,
    };
  },
};
</script>