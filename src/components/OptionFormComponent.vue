<template>
  <div class="w-full items-center my-3">
    <div class="flex flex-row">
      <input
        v-model="option.value"
        type="text"
        placeholder="Enter option value"
        class="w-full rounded-[10px]"
      />
      <input v-model="option.correct" type="checkbox" />
      <button type="button" @click="removeOption">Remove</button>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  props: {
    option: Object,
  },
  setup(_, { emit }) {
    function removeOption() {
      emit("remove-option", option);
    }

    return {
      removeOption,
    };
  },
});
</script>
