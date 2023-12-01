<script setup>
import FormComponent from "../components/FormComponent.vue";
import PreviewComponent from "../components/PreviewComponent.vue";
</script>

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
