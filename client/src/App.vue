<template>
  <RouterView />
</template>
<script>
import { ref } from "vue";
import FormComponent from "./components/FormComponent.vue";
import PreviewComponent from "./components/PreviewComponent.vue";
import { RouterLink, RouterView } from "vue-router";

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
