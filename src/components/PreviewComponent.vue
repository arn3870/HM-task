<template>
  <div class="preview-component">
    <h2 class="text-center text-[40px] font-bold">Preview</h2>
    <ul>
      <li v-for="(question, index) in questions" :key="index">
        <strong>{{ question.question }}</strong>
        <ul>
          <li
            v-for="(option, optionIndex) in question.options"
            :key="optionIndex"
          >
            {{ option.text }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    questions: Array,
  },
};
</script>
