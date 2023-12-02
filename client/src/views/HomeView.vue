<script>
import { ref } from "vue";
import FormComponent from "../components/FormComponent.vue";
import PreviewComponent from "../components/PreviewComponent.vue";

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

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 l:grid-cols-2 min-h-screen">
    <div class="bg-secondary flex items-center justify-center flex-grow">
      <FormComponent />
    </div>
    <div class="bg-primary overflow-y-auto flex-grow">
      <PreviewComponent />
    </div>
  </div>
</template>
